<?php
// Set headers for CORS & JSON output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-Upload-Secret");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido. Utilice POST."]);
    exit();
}

// Read secret key from environment variable
$serverSecret = getenv('UPLOAD_SECRET') ?: ($_ENV['UPLOAD_SECRET'] ?? ($_SERVER['UPLOAD_SECRET'] ?? ''));
$clientSecret = $_SERVER['HTTP_X_UPLOAD_SECRET'] ?? ($_POST['secret'] ?? '');

if (empty($serverSecret)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "UPLOAD_SECRET no está configurado en las variables de entorno del hosting."]);
    exit();
}

if ($clientSecret !== $serverSecret) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Clave de seguridad inválida."]);
    exit();
}

if (empty($_FILES['files'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "No se recibieron archivos para subir."]);
    exit();
}

// Target directory: ../media/ (relative to public_html/api/)
$targetDir = realpath(__DIR__ . '/../media');
if (!$targetDir) {
    $targetDir = $_SERVER['DOCUMENT_ROOT'] . '/media';
}

if (!file_exists($targetDir)) {
    @mkdir($targetDir, 0755, true);
}

$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'pdf', 'doc', 'docx', 'txt', 'mp4', 'webm', 'zip'];
$uploadedFiles = [];
$errors = [];

// Handle single or multiple file upload structures
$files = $_FILES['files'];
$fileCount = is_array($files['name']) ? count($files['name']) : 1;

for ($i = 0; $i < $fileCount; $i++) {
    $name = is_array($files['name']) ? $files['name'][$i] : $files['name'];
    $tmpName = is_array($files['tmp_name']) ? $files['tmp_name'][$i] : $files['tmp_name'];
    $error = is_array($files['error']) ? $files['error'][$i] : $files['error'];

    if ($error !== UPLOAD_ERR_OK) {
        $errors[] = "Error al subir '$name' (Código: $error).";
        continue;
    }

    $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
    if (!in_array($ext, $allowedExtensions)) {
        $errors[] = "La extensión '.$ext' no está permitida en '$name'.";
        continue;
    }

    // Sanitize filename (preserve extension, replace special chars)
    $filenameBase = pathinfo($name, PATHINFO_FILENAME);
    $sanitizedBase = preg_replace('/[^a-zA-Z0-9_-]/', '-', $filenameBase);
    $sanitizedBase = preg_replace('/-+/', '-', trim($sanitizedBase, '-'));
    if (empty($sanitizedBase)) {
        $sanitizedBase = 'file-' . time();
    }

    $finalFilename = $sanitizedBase . '.' . $ext;
    $destination = $targetDir . '/' . $finalFilename;

    // Append timestamp if file already exists
    if (file_exists($destination)) {
        $finalFilename = $sanitizedBase . '-' . time() . '.' . $ext;
        $destination = $targetDir . '/' . $finalFilename;
    }

    if (move_uploaded_file($tmpName, $destination)) {
        $publicUrl = "https://karenexplora.com/media/" . $finalFilename;
        $uploadedFiles[] = [
            "name" => $finalFilename,
            "originalName" => $name,
            "url" => $publicUrl
        ];
    } else {
        $errors[] = "No se pudo guardar el archivo '$name' en el servidor.";
    }
}

http_response_code(200);
echo json_encode([
    "success" => count($uploadedFiles) > 0,
    "files" => $uploadedFiles,
    "errors" => $errors
]);
