<?php

include("cnx.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/phpmailer/phpmailer/src/Exception.php';
require '../vendor/phpmailer/phpmailer/src/phpmailer.php';
require '../vendor/phpmailer/phpmailer/src/SMTP.php';

//Load Composer's autoloader
require '../vendor/autoload.php';

$sql =  $cnx->prepare("select mail from user order by id desc");
$sql->execute();
$mailUser = $sql->fetchAll();

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->setLanguage('fr','/PHPMailer/language/');
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp.laposte.net'; //Connection du serveur SMTP de la poste
    $mail->SMTPAuth = true;
    $mail->Username = 'lvdlbbb@laposte.net'; //Mail du serveur 
    $mail->Password = 'Hackathonbluebutton2022!';//Mdp
    $mail->setFrom('lvdlbbb@laposte.net');//Connection du serveur SMTP de outlook
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    
    //Destinataire
    $mail->setFrom('lvdlbbb@laposte.net');
    $mail->addAddress($mailUser[0]['mail']); //Ajout du récepteur du mail

    $mail->isHTML(true); //Ici on va set le sujet et le message du mail
    $mail->Subject = utf8_decode("Big Blue Button : lien de téléchargement visio");
    $mail->Body = utf8_decode("<p>Voici le lien de la visio <br><br>Bien cordialement <br><br> L'équipe LVDL</p>");

    $mail->send();
    echo 'Le mail à été bien envoyé';
} catch (Exception $e) {
    echo "Le message n'a pas été envoyé. Le message d'erreur : {$mail->ErrorInfo}";
}
?>