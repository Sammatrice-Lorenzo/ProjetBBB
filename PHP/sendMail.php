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


//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->setLanguage('fr','/PHPMailer/language/');
    $mail->SMTPDebug = 2;
    $mail->isSMTP();
    $mail->Host = 'smtp-mail.outlook.com'; //Connection du serveur SMTP de outlook
    $mail->SMTPAuth = true;
    $mail->Username = "lvdlbbb@outlook.fr"; //Mail du serveur 
    $mail->Password = "hackathonbluebutton2022";//Mdp
    $mail->setFrom('lvdlbbb@outlook.fr');//Connection du serveur SMTP de outlook
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    //Destinataire
    $mail->setFrom('lvdlbbb@outlook.fr');
    $mail->addAddress($mailUser[0]['mail']); //Ajout du récepteur du mail

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = utf8_decode("Big Blue Button : lien de téléchargement visio");
    $mail->Body = utf8_decode("Voici le lien de la visio <br><br>Bien cordialement <br><br> L'équipe LVDL");

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>