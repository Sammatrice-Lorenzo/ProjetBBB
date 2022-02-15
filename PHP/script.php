<?php

    $sql = $cnx->prepare("select url from user order by DESC");
    $sql->execute();
    foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $url) {
        $commandes = shell_exec('bash capture-full-replay.sh' . $url['url']);
    }
?>