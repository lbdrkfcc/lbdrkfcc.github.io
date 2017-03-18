<?php

$name = htmlspecialchars($_POST['user_name']);
$number = htmlspecialchars($_POST['user_phone']);
$mail = htmlspecialchars($_POST['user_mail']);
$option = htmlspecialchars($_POST['user_option']);
$user_message = htmlspecialchars($_POST['user_message']);
$time = getdate();
$from = "from site"; //Change
 
$to = "lbdrkfcc@yandex.ru"; //Change
$subject = "new_subject"; //Change
  
$message  = "<h1>Заголовок письма</h1>". PHP_EOL; //Change
$message .= "<p>Имя клиента: $name</p><p>Номер телефона: $number<br>Почта: $mail</p><br>". PHP_EOL;
$message .= "<p>Тип занятия: $option</p><br>". PHP_EOL;
$message .= "<p>Сообщение получено в $time[hours]:$time[minutes]:$time[seconds] $time[mday].$time[mon].$time[year]</p>";
$message .= "<p>Сообщение: $user_message</p><br>". PHP_EOL;
  
$headers  = "Content-type: text/html; charset=UTF-8". PHP_EOL; 
$headers .= "From: <$from>". PHP_EOL; 
$headers .= "Reply-To: $mail". PHP_EOL;
  
mail($to, $subject, $message, $headers);

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}
/*
	'From: '.adopt($name).' <'.$mail.'>' . PHP_EOL .
*/