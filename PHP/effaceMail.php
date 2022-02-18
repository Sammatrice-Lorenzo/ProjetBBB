<?php
include("cnx.php");

$sql = $cnx->prepare("select id, mail, date_creation FROM user where approbation = 0"); //On récupère tous les utilisateurs qui n'ont pas coché la case mde mémorisatrion du mail   
$sql->execute();
$users =  $sql->fetchAll();

$date = new DateTime('NOW'); //Récupération de la date du jour

foreach($users as $user)
{
    $id = $user['id'];
    $dateCreation = DateTime::createFromFormat('Y-m-d H:i:s', $user['date_creation']); //On récupere la date de création et on la set au format DateTime 
    $datePlus = $dateCreation->add(new DateInterval('P1D')); //On ajoute un Jour à la date de création
    
    if($date >= $datePlus) {
        $req =  $cnx->prepare("delete FROM user WHERE id= ?"); //requete remove
        $req->bindValue(1, $id);
        $req->execute();
    }
}
?>