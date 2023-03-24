function cargar(){
    $(document).ready(function() {
    $.ajax({
        url: 'datos.txt',
        type: 'POST',
        sucess: function(respuesta) {
           document.getElementById("datos").innerHTML = respuesta;
        },
        error: function(){
            console.log("No fue posible completar la opercion");
            }
    });
    });
}

let btnCarga = document.getElementById("cargar");
btnCarga.addEventListener("click", cargar);