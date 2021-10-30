<?php
    require_once("config.php");

    $rs = $cn->query("SELECT * FROM juegos ORDER BY idjuego");
    while ($row = $rs->fetch_assoc()) {
        $res[] = $row;
    }

    echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn -> close();

?>