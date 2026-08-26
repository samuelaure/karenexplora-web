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

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
    exit();
}

// Read JSON input
$input = json_decode(file_get_contents('php://input'), true);
$clientSecret = $_SERVER['HTTP_X_UPLOAD_SECRET'] ?? ($input['secret'] ?? '');
$githubUsername = trim($input['username'] ?? '');

$serverSecret = env_lookup('UPLOAD_SECRET');
$githubToken = env_lookup('GITHUB_INVITE_TOKEN');

// Validate configurations
if (empty($serverSecret)) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "La contraseña del servidor no está configurada."]);
    exit();
}

if (empty($githubToken)) {
    http_response_code(503);
    echo json_encode(["success" => false, "message" => "El token de GitHub no está configurado."]);
    exit();
}

// Validate credentials
if ($clientSecret !== $serverSecret) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    exit();
}

// Validate username
if (empty($githubUsername)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Falta el nombre de usuario de GitHub."]);
    exit();
}

// Sanitize username (alphanumeric and dashes only)
if (!preg_match('/^[a-zA-Z0-9-]+$/', $githubUsername)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El nombre de usuario contiene caracteres inválidos."]);
    exit();
}

// GitHub API Request to invite collaborator
$repoOwner = "samuelaure";
$repoName = "karenexplora-web";
$url = "https://api.github.com/repos/{$repoOwner}/{$repoName}/collaborators/{$githubUsername}";

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// We pass empty json object as data to set default permission (push/write)
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["permission" => "push"]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/vnd.github+json",
    "Authorization: Bearer " . $githubToken,
    "X-GitHub-Api-Version: 2022-11-28",
    "User-Agent: KarenExplora-Automated-Inviter",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Evaluate GitHub API response
// 201 = Created (invitation sent)
// 204 = No Content (user is already a collaborator)
if ($httpCode === 201) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Invitación enviada correctamente. Revisa tu correo o las notificaciones de GitHub."]);
} elseif ($httpCode === 204) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "El usuario ya tiene acceso al repositorio."]);
} elseif ($httpCode === 404) {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "No se encontró el usuario en GitHub o el token no tiene permisos."]);
} else {
    // Other errors
    $decodedResponse = json_decode($response, true);
    $errorMessage = $decodedResponse['message'] ?? 'Error desconocido de GitHub.';
    http_response_code($httpCode);
    echo json_encode(["success" => false, "message" => "Fallo al enviar la invitación: " . $errorMessage]);
}
