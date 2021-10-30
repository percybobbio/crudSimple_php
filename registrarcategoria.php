<?php
    require_once("config.php");

    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $rs = $cn->query("INSERT INTO categorias(nombrecat, descripcion) VALUES ('$nombre', '$descripcion')");
    echo $cn->insert_id;
    /*
    while ($row = $rs->fetch_assoc()) {
        $res[] = $row;
    }*/

    //echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn -> close();

?>