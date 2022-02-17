<?php
include("cnx.php");

$sql = $cnx->prepare("select id, mail FROM user where approbation = 0"); //On récupère tous les membres pas actifs
$sql->execute();
$mails =  $sql->fetchAll();

$date = new DateTime('NOW'); //Récupération de la date du jour
$datePlus = $date->add(new DateInterval('P1D'));

foreach($mails as $mail)
{
    $id = $mail['id'];

    if($date >= $datePlus) {
        $req =  $cnx->prepare("delete FROM user WHERE id= ?"); //requete remove
        $sql->bindValue(1, $id);
    }
}
?>