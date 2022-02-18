<?php
include('cnx.php');

$sql = $cnx->prepare("select url FROM user order by id desc");
$sql->execute();
$url = $sql->fetchAll();

$comm = "bash /home/ubuntu/bbb-downloader/capture-full-replay.sh\ " . $url[0]['url'];

echo $comm;

$commandes = shell_exec($comm);

?>