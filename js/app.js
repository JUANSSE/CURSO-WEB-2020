// variables
const id_usr = document.getElementById('id_usr');
const id_pais = document.getElementById('id_pais');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const direccion = document.getElementById('direccion');
const usuario = document.getElementById('ccusuario');
const password = document.getElementById('ccpaswd');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-formulario');
const resetBtn = document.getElementById('resetBtn');
const verpassword = document.getElementById('ccpaswd2');
var snapSlider = document.getElementById('slider-snap');
var snapValues = [
    document.getElementById('slider-snap-value-lower'),
    document.getElementById('slider-snap-value-upper')
];


// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     id_usr.addEventListener('blur', validarCampo);
     nombre.addEventListener('blur', validarCampo);
     apellido.addEventListener('blur', validarCampo);
     direccion.addEventListener('blur', validarCampo);
     usuario.addEventListener('blur', validarCampo);
     password.addEventListener('blur', validarCampo);
     verpassword.addEventListener('blur', validarCampo);
     telefono.addEventListener('blur', validarCampo); 
     email.addEventListener('blur', validarCampo); 

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarFormulario);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}



// funciones
function inicioApp() {
     // deshabilitar el envio del formulario
     btnEnviar.disabled = true;
}

// Validación de los campos del formulario
function validarCampo() {
    
    
     // Se valida la longitud del texto y que no este vacio
     validarLongitud(this);
    
    // Validar ID de usuario
     if(this.id === 'id_usr') {
          validarID_usr(this);
     }

    // Validar nombre
     if(this.id === 'nombre') {
          validarNombre(this);
     }
    
    // Validar apellido
     if(this.id === 'apellido') {
          validarApellido(this);
     }
    
    // Validar dirección
     if(this.id === 'direccion') {
          validarDireccion(this);
     }
      // Validar email
     if(this.id === 'email') {
          validarEmail(this);
     }
    
     // Validar usuario
     if(this.id === 'ccusuario') {
          validarUsuario(this);
     }
    
    // Validar la seguridad de la contraseña
     if(this.id === 'ccpaswd') {
          validarContraseña(this);
     } 
    
    // Validar que la contraseña sea la que se ingresó
     if(this.id === 'ccpaswd2') {
          validarVerContraseña(this);
     }
    
     // Validar numero telefónico
     if(this.id === 'telefono') {
          validarTelefono(this);
     }
    
     let errores = document.querySelectorAll('.error');

     if(id_usr.value !== '' && nombre.value !== '' && apellido.value !== '' && direccion.value !== '' && usuario.value !== '' && password.value !== '' && verpassword.value !== '' && telefono.value !== '' && email.value !== '') {
          if(errores.length === 0) {
               btnEnviar.disabled = false;
          }
     }
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

// Cuando se envia el correo
function enviarFormulario(e) {
     // Spinner al presionar Enviar
     const spinnerGif = document.querySelector('#spinner');
     spinnerGif.style.display = 'block';

     // Gif de check que envia el formulario
     const enviado = document.createElement('img');
     enviado.src = '../Imagenes/mail.gif';
     enviado.style.display = 'block';

     // Ocultar Spinner y mostrar gif de enviado
     setTimeout(function() {
          spinnerGif.style.display = 'none';

          document.querySelector('#loaders').appendChild( enviado );

          setTimeout(function() {
               enviado.remove();
               formularioEnviar.reset();
          }, 5000);
     }, 3000);

     e.preventDefault();
}

// Verifica la longitud del texto en los campos y coloca un borde verde para correcto y rojo para reportar un error
function validarLongitud(campo) {

     if(campo.value.length > 0 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
     }
}

// Validaciones y restricciones con respecto a los requerimientos de cada campo

function validarID_usr(campo) {

     if(id_usr.value.length > 0 && id_usr.value.length < 12 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un ID de máximo 11 números de longitud');
     }
}

function validarNombre(campo) {

     if(nombre.value.length > 0 && nombre.value.length < 26 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un nombre que contenga máximo 25 caracteres');
     }
}

function validarApellido(campo) {

     if(apellido.value.length > 0 && apellido.value.length < 26 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un apellido que contenga un máximo de 25 caracteres');
     }
}

function validarDireccion(campo) {

     if(direccion.value.length > 0 && direccion.value.length < 46 && (direccion.value.substring(0,3).toLowerCase() === 'cll' 
          || direccion.value.substring(0,3).toLowerCase() === 'cra' || direccion.value.substring(0,2).toLowerCase() === 'av' 
          || direccion.value.substring(0,3).toLowerCase() === 'anv' || direccion.value.substring(0,5).toLowerCase() === 'trans' )) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar una direccion de máximo 45 caracteres.\nRecuerde que para validar correctamente este campo su direccion debe empezar con cll, cra, av, anv o trans.');
     }
}

function validarUsuario(campo) {
     if(usuario.value.length > 9 && usuario.value.length < 21 
        && usuario.value.indexOf('@')===-1 && usuario.value.indexOf('+')===-1 
        && usuario.value.indexOf('*')===-1 && usuario.value.indexOf('-')===-1 
        && usuario.value.indexOf('!')===-1 && usuario.value.indexOf('"')===-1 
        && usuario.value.indexOf('·')===-1 && usuario.value.indexOf('¡')===-1 
        && usuario.value.indexOf('$')===-1 && usuario.value.indexOf('^')===-1 
        && usuario.value.indexOf('%')===-1 && usuario.value.indexOf('`')===-1 
        && usuario.value.indexOf('&')===-1 && usuario.value.indexOf(',')===-1 
        && usuario.value.indexOf('/')===-1 && usuario.value.indexOf(';')===-1 
        && usuario.value.indexOf('(')===-1 && usuario.value.indexOf(':')===-1 
        && usuario.value.indexOf(')')===-1 && usuario.value.indexOf('<')===-1 
        && usuario.value.indexOf('?')===-1 && usuario.value.indexOf('>')===-1 
        && usuario.value.indexOf('[')===-1 && usuario.value.indexOf('{')===-1 
        && usuario.value.indexOf(']')===-1 && usuario.value.indexOf('}')===-1 
        && usuario.value.indexOf('÷')===-1 && usuario.value.indexOf('º')===-1 
        && usuario.value.indexOf('“')===-1 && usuario.value.indexOf('ª')===-1 
        && usuario.value.indexOf('”')===-1 && usuario.value.indexOf('¬')===-1 
        && usuario.value.indexOf('≠')===-1 && usuario.value.indexOf('|')===-1 
        && usuario.value.indexOf(' ')===-1) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un usuario con almenos 10 caracteres de longitud y máximo 25 caracteres.\nRecuerde que solo se permite usar caracteres alfanuméricos en su nickname');
     }
}


function validarEmail(campo) {
     if(email.value.indexOf('@') !== -1 && email.value.length > 0 && email.value.length < 121 && email.value.indexOf('.') !== -1) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Email incorrecto, por favor asegúrese de ingresar una direccion de correo con máximo 120 caracteres.\nRecuerde colocar @ => Ejemplo@correo.com');
     }
}
function validarContraseña(campo){    
    if(password.value.length > 14 && password.value.length < 21 
      && (password.value.indexOf('A') !==-1 || password.value.indexOf('B') !==-1 
      || password.value.indexOf('C') !==-1 || password.value.indexOf('D') !==-1 
      || password.value.indexOf('E') !==-1 || password.value.indexOf('F') !==-1 
      || password.value.indexOf('G') !==-1 || password.value.indexOf('H') !==-1 
      || password.value.indexOf('I') !==-1 || password.value.indexOf('J') !==-1 
      || password.value.indexOf('K') !==-1 || password.value.indexOf('L') !==-1 
      || password.value.indexOf('M') !==-1 || password.value.indexOf('N') !==-1 
      || password.value.indexOf('O') !==-1 || password.value.indexOf('P') !==-1 
      || password.value.indexOf('Q') !==-1 || password.value.indexOf('R') !==-1 
      || password.value.indexOf('S') !==-1 || password.value.indexOf('T') !==-1 
      || password.value.indexOf('U') !==-1 || password.value.indexOf('V') !==-1 
      || password.value.indexOf('W') !==-1 || password.value.indexOf('X') !==-1 
      || password.value.indexOf('Y') !==-1 || password.value.indexOf('Z') !==-1) 
      && (password.value.indexOf('0') !==-1 || password.value.indexOf('1') !==-1
      || password.value.indexOf('2') !==-1 || password.value.indexOf('3') !==-1 
      || password.value.indexOf('4') !==-1 || password.value.indexOf('5') !==-1
      || password.value.indexOf('6') !==-1 || password.value.indexOf('7') !==-1
      || password.value.indexOf('8') !==-1 || password.value.indexOf('9') !==-1)
      && (password.value.indexOf('#') !==-1 || password.value.indexOf('%') !==-1
      || password.value.indexOf('/') !==-1 || password.value.indexOf('&') !==-1)) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         alert('Campo incorrecto, por favor asegúrese de ingresar una contraseña con al menos 15 caracteres alfanuméricos y no sobrepasarse de 20 caracteres de longitud.\nRecuerde que para cumplir con los parámetros de seguridad su contraseña debe contener mayúsculas, numeros, letras y/o los siguientes caracteres [#,%,/,&].'); 
    }
}

function validarVerContraseña(campo){
    if(password.value === verpassword.value) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
         alert('Campo incorrecto, por favor asegúrese de que la contraseña sea la misma que ingresó anteriormente');
    }
}


function validarTelefono(campo) {

     if(telefono.value.length > 0 && telefono.value.length < 21 ) {
          campo.style.borderBottomColor = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.borderBottomColor = 'red';
          campo.classList.add('error');
          alert('Campo incorrecto, por favor asegúrese de ingresar un número telefónico que contenga máximo 20 caracteres numéricos.');
     }
}

//Configura el deslizador con los valores para el rango de precios
noUiSlider.create(snapSlider, {
    start: [100000, 350000],
    snap: true,
    connect: true,
    range: {
        'min': 0,
        '10%': 50000,
        '20%': 100000,
        '30%': 150000,
        '40%': 200000,
        '50%': 250000,
        '60%': 300000,
        '70%': 350000,
        '80%': 400000,
        '90%': 450000,
        'max': 500000
    }
});

//Muesrta el precio seleccionado
snapSlider.noUiSlider.on('update', function (values, handle) {
    snapValues[handle].innerHTML = values[handle];
});



















