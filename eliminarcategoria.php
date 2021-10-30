<?php
    require_once("config.php");

    $idcat = $_POST["idcategoria"];
    $rs = $cn->query("DELETE FROM categorias WHERE idcategoria=$idcat");
    //echo $cn->insert_id;
    /*
    while ($row = $rs->fetch_assoc()) {
        $res[] = $row;
    }*/

    //echo json_encode($res, JSON_UNESCAPED_UNICODE);
    $cn->close();
   