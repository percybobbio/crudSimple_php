<?php
    require_once("config.php");

    $idcat = $_POST["idcategoria"];
    $nombre = $_POST["nombre"];
    $descripcion = $_POST["descripcion"];
    $rs = $cn->query("UPDATE categorias SET nombrecat='$nombre', descripcion='$descripcion' WHERE idcategoria=$idcat");
    //echo $cn->insert_id;
    /*
    while ($row = $rs->fetch_assoc()) {
        $res[] = $row;
    }*/

    //echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn->close();
?>