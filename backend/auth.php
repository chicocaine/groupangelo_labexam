<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

session_start();

$file = "users.json";
$data = json_decode(file_get_contents($file), true);

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

if ($method === "OPTIONS") {
    http_response_code(200);
    exit;
}

function saveData($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

if ($action === "register") {
    $input = json_decode(file_get_contents("php://input"), true);
    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    if (isset($data[$username])) {
        echo json_encode(["error" => "User already exists"]);
        exit;
    }

    $data[$username] = password_hash($password, PASSWORD_DEFAULT);
    saveData($file, $data);
    echo json_encode(["success" => true]);
}

elseif ($action === "login") {
    $input = json_decode(file_get_contents("php://input"), true);
    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';

    if (isset($data[$username]) && password_verify($password, $data[$username])) {
        $_SESSION['user'] = $username;
        echo json_encode(["success" => true, "user" => $username]);
    } else {
        echo json_encode(["error" => "Invalid credentials"]);
    }
}

elseif ($action === "logout") {
    session_destroy();
    echo json_encode(["success" => true]);
}

elseif ($action === "me") {
    echo json_encode(["user" => $_SESSION['user'] ?? null]);
}

else {
    echo json_encode(["error" => "Unknown action"]);
}
