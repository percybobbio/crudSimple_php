<?php
    require_once("config.php");

    $nombre = $_POST["nombrejuego"];
    $estudio = $_POST["estudio"];
    $rs = $cn->query("INSERT INTO juegos(nombrejuego, estudio) VALUES ('$nombre', '$estudio')");
    echo $cn->insert_id;
    /*
    while ($row = $rs->fetch_assoc()) {
        $res[] = $row;
    }*/

    //echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn -> close();

?>