<?php
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['name'], $data['telephone'])) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка: данные не были переданы правильно.',
    ]);
    exit;
}

$name = $data['name'];
$telephone = $data['telephone'];

$to = 'kruzinka@yandex.ru';
$subject = 'Новая заявка с сайта Циклонов';

$subject = "=?UTF-8?B?" . base64_encode($subject) . "?=";

$message = "Имя: $name\nТелефон: $telephone";

$headers = "From: cyclon@othertool.ru\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$success = mail($to, $subject, $message, $headers);

header('Content-Type: application/json');
echo json_encode([
    'success' => $success,
    'message' => $success ? 'Заявка отправлена!' : 'Ошибка отправки',
]);