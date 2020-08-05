

function validarFormulario(){
    // removemos el div con la clase alert
    $('.alert').remove();


    // declarion de variables
    var nombre=$('#nombre').val(),
        apellido=$('#apellido').val(),
        fNac =$('#fNac').val(),
        correo=$('#correo').val(),
        usuario =$('#usuario').val(),
        contraseña =$('#contraseña').val(),
        vercontraseña =$('#vercontraseña').val();

        
    // validamos el campo nombre
    if(nombre=="" || nombre==null){

        cambiarColor("nombre");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("nombre");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    if(apellido=="" || apellido==null){

        cambiarColor("apellido");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(apellido)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("apellido");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    // validamos el correo
    if(correo=="" || correo==null){

        cambiarColor("correo");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("correo");
            mostraAlerta("Por favor ingrese un correo válido");
            return false;
        }
    }

    // validamos el usuario
    if(usuario=="" || usuario==null){

        cambiarColor("usuario");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(usuario)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("usuario");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }
   

     // validamos el mensaje

     if(contraseña=="" || contraseña==null){

        cambiarColor("contraseña");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(contraseña)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("contraseña");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }
    if(vercontraseña=="" || vercontraseña==null){

        cambiarColor("vercontraseña");
        // mostramos le mensaje de alerta
        mostraAlerta("Campo obligatorio");
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(vercontraseña)){
            // mostrara el mesaje que debe ingresar un nombre válido
            cambiarColor("vercontraseña");
            mostraAlerta("No se permiten carateres especiales o numeros");
            return false;
        }
    }

    if(contraseña!==vercontraseña){
        // Las contraseñas no coinciden
        mostraAlerta("las contraseñas no coinciden");
            return 'formulario diligenciado correctamente';
        
    }    
    
    $('form').submit();
    return true;
    
} 

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

// creamos un funcion de color por defecto a los bordes de los inputs
function colorDefault(dato){
    $('#' + dato).css({
        border: "1px solid #999"
    });
}

// creamos una funcio para cambiar de color a su bordes de los input
function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid #dd5144"
    });
}

// funcion para mostrar la alerta

function mostraAlerta(texto){
    $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
}

function visualizar() {
    var div1 = document.getElementById('enfermo');
    var div2 = document.getElementById('contagioso');
    var enfermo = document.formulario.enfermedades.value;
    var contagioso = document.formulario.enfermedadesC.value;

    if(enfermo == "si"){
        div1.style.display = 'block';
    }
    else{
        div1.style.display = 'none';
    }
    if(contagioso == "si"){
        div2.style.display = 'block';
    }
    else{
        div2.style.display = 'none';
    }
}

$(function(){
        $('#fNac').on('change', calcularEdad);
    });
            
function calcularEdad() {
    
    fecha = $(this).val();
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    $('#edad').val(edad);
}