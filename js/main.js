leerDatos = () => {
    //archivo localhost para leer categoria
    var ruta = "http://localhost/proywebcrud/listarcategoria.php"; 
//var ruta = "http://serviciosweb.great-site.net/listarcategoria.php"; 
fetch(ruta)

.then(response => response.json())
.then(datos => {
    console.log(datos);
    llenarTabla(datos);
})
}

leerDatos();

function llenarTabla(datos) {
    $("#tbody_categorias").html("");
    $(datos).each((index, value) => {
        var fila = "<tr>";
        fila += "<td>" + value.idcategoria + "</td>";
        fila += "<td>" + value.nombrecat + "</td>";
        fila += "<td>" + value.descripcion + "</td>";
        fila += "<td><i class='bi bi-pencil-fill boton-actualizar' data-bs-toggle='modal' data-bs-target='#modalActualizar'></i></td>";
        fila += "<td><i class='bi bi-x-lg boton-eliminar'></i></td>";
        fila += "</tr>"
        $("#tbody_categorias").append(fila);

    });

    $(".boton-eliminar").click(function() {
        var filaActual = $(this).parent().parent();
        var posicion = filaActual.index();
        console.log(posicion);
        var idcategoria = datos[posicion].idcategoria;
        var respuesta = confirm("¿Esta seguro que desea eliminar la categoria "+ datos[posicion].nombrecat + "?")
        if(respuesta == true){
            eliminarCategoria(idcategoria);
        }
    });

    $(".boton-actualizar").click(function() {
        var filaActual = $(this).parent().parent();
        var posicion = filaActual.index();
        $("#txtIdCategoriaActualizar").val(datos[posicion].idcategoria);
        $("#txtNombreActualizar").val(datos[posicion].nombrecat);
        $("#txtDescripcionActualizar").val(datos[posicion].descripcion);
});

eliminarCategoria = (idcategoria) => {
    var ruta = "http://localhost/proywebcrud/eliminarcategoria.php";
   
    var formData = new FormData();
    formData.append("idcategoria", idcategoria);

    fetch(ruta, {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(() => {
            leerDatos();
        })
}

$("#btnGuardar").click(()=>{
    var nombre = $("#txtNombre").val();
    var descripcion = $("#txtDescripcion").val();
    $("#txtNombre").val("");
    $("#txtDescripcion").val("");
    //archivo localhost para registrar categoria
    var ruta = "http://localhost/proywebcrud/registrarcategoria.php";
    //var ruta = "http://serviciosweb.great-site.net/registrarcategoria.php";
    var formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);

    fetch(ruta, {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(datos => {
            console.log(datos);
            leerDatos();
    })
});

$("#btnActualizar").click(() => {
    var idcategoria = $("#txtIdCategoriaActualizar").val();
    var nombre = $("#txtNombreActualizar").val();
    var descripcion = $("#txtDescripcionActualizar").val();

    var ruta = "http://localhost/proywebcrud/actualizarcategoria.php";
    //var ruta = "http://serviciosweb.great-site.net/registrarcategoria.php";
    var formData = new FormData();
    formData.append("idcategoria", idcategoria);
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);

    fetch(ruta, {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(() => {
            leerDatos();
    })
});
}

