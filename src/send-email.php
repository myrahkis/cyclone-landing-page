<?php
$name = $_POST['name'] ?? '';
$telephone = $_POST['telephone'] ?? '';

$to = 'info@othertool.ru';
$subject = 'Новая заявка с сайта Циклонов';
$message = "Имя: $name\nТелефон: $telephone";
$headers = "From: site@othertool.ru\r\n";

$success = mail($to, $subject, $message, $headers);

header('Content-Type: application/json');
echo json_encode([
  'success' => $success,
  'message' => $success ? 'Заявка отправлена!' : 'Ошибка отправки',
]);