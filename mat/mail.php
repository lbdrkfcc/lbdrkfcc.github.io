<?php

$method = $_SERVER['REQUEST_METHOD'];
$project_name = "Строительство заборов";
$admin_email  = "yar-zabor-76@yandex.ru";

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$form_subject = trim($_POST["form_name"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			
            if($key == "user_name"){
                $key = "Имя клиента";
            }
            else if($key == "user_phone"){
                $key = "Телефон клиента";
            }
            else if($key == "form_name"){
                $key = "Услуга";
            }
			else if($key == "zabor_type"){
                $key = "Тип забора";
            }
			else if($key == "metrazh"){
                $key = "Метраж";
            }
            
            $message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
} else if ( $method === 'GET' ) {

	$form_subject = trim($_GET["form_name"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			
            if($key == "user_name"){
                $key = "Имя клиента";
            }
            else if($key == "user_phone"){
                $key = "Телефон клиента";
            }
            else if($key == "form_name"){
                $key = "Услуга";
            }
			else if($key == "zabor_type"){
                $key = "Тип забора";
            }
			else if($key == "metrazh"){
                $key = "Метраж";
            }
            
            $message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
			<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
			<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
		</tr>
		";
	}
}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );
