<?php
// Set headers for CORS & JSON output
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, X-Upload-Secret");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Function to lookup environment variables via getenv, $_SERVER, $_ENV, or .env file fallback
function env_lookup($name) {
    $v = getenv($name);
    if ($v !== false && $v !== '') return $v;
    if (!empty($_SERVER[$name])) return $_SERVER[$name];
    if (!empty($_ENV[$name])) return $_ENV[$name];

    // Fallback: Check if .env exists in DOCUMENT_ROOT or parent directories
    $docRoot = $_SERVER['DOCUMENT_ROOT'] ?? __DIR__;
    $possibleEnvFiles = [
        $docRoot . '/.env',
        $docRoot . '/../.env',
        __DIR__ . '/../../.env',
        __DIR__ . '/../../../.env'
    ];

    foreach ($possibleEnvFiles as $file) {
        if (file_exists($file) && is_readable($file)) {
            $lines = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                $line = trim($line);
                if (empty($line) || strpos($line, '#') === 0) continue;
                if (strpos($line, '=') !== false) {
                    list($k, $val) = explode('=', $line, 2);
                    if (trim($k) === $name) {
                        return trim(trim($val), '"\'');
                    }
                }
            }
        }
    }
    return null;
}

$serverSecret = env_lookup('UPLOAD_SECRET');
$clientSecret = $_SERVER['HTTP_X_UPLOAD_SECRET'] ?? ($_POST['secret'] ?? ($_GET['secret'] ?? ''));

if (empty($serverSecret)) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "La contraseña del servidor no está configurada en las variables de entorno."]);
    exit();
}

// Action: Verify PIN / Password
if (isset($_GET['action']) && $_GET['action'] === 'verify') {
    if (!empty($clientSecret) && $clientSecret === $serverSecret) {
        http_response_code(200);
        echo json_encode(["success" => true, "message" => "Autenticado correctamente."]);
    } else {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    }
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
    exit();
}

if ($clientSecret !== $serverSecret) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
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
    $targetDir = ($_SERVER['DOCUMENT_ROOT'] ?? __DIR__) . '/media';
}

if (!file_exists($targetDir)) {
    @mkdir($targetDir, 0755, true);
}

$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'pdf', 'doc', 'docx', 'txt', 'mp4', 'webm', 'zip'];
$uploadedFiles = [];
$errors = [];

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

    $filenameBase = pathinfo($name, PATHINFO_FILENAME);
    $sanitizedBase = preg_replace('/[^a-zA-Z0-9_-]/', '-', $filenameBase);
    $sanitizedBase = preg_replace('/-+/', '-', trim($sanitizedBase, '-'));
    if (empty($sanitizedBase)) {
        $sanitizedBase = 'file-' . time();
    }

    $finalFilename = $sanitizedBase . '.' . $ext;
    $destination = $targetDir . '/' . $finalFilename;

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
