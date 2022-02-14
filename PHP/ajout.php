<?php
include('cnx.php');
include('index.php');
$sql = $cnx->prepare("insert into user (mail, url, approbation) VALUES (?, ?, ?)");

$sql->bindValue(1, $_GET['mail']);
$sql->bindValue(2, $_GET['url']);
$sql->bindValue(3, $_GET['check']);

$sql->execute();

echo "Votre insertion a été bien preise en compte";
?>