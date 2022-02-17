<?php
include('cnx.php');
$sql = $cnx->prepare("insert into user (mail, url, approbation, webcam, ecran, slides) VALUES (?, ?, ?, ?, ?, ?)");

$sql->bindValue(1, $_GET['mail']);
$sql->bindValue(2, $_GET['url']);
$sql->bindValue(3, $_GET['check']);
$sql->bindValue(4, $_GET['webcam']);
$sql->bindValue(5, $_GET['ecran']);
$sql->bindValue(6, $_GET['slides']);

$sql->execute();

echo "Votre insertion a été bien preise en compte";
?>