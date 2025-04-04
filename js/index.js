
//Modifica el texto del botón de iniciar sesión al hacer click.
//Si el texto es 'Iniciar Sesión', lo cambia a 'Cerrar Sesión' y viceversa.
let botonIniciarSesion = document.querySelector('#btn-iniciar-sesion');
//console.log(botonIniciarSesion);
botonIniciarSesion.addEventListener('click', function(evento){
    if(botonIniciarSesion.textContent === 'Iniciar Sesión'){
        botonIniciarSesion.textContent ='Cerrar Sesión';
    }
    else{
        botonIniciarSesion.textContent = 'Iniciar Sesión';
    }
});

let botonAgregar = document.querySelector('#btn-agregar');
// console.log(botonAgregar);
botonAgregar.addEventListener('click', function(evento){
    botonAgregar.remove();
});

let botonMeGusta = document.querySelectorAll('.btn-me-gusta');
// console.log(botonMeGusta);
for (let i = 0; i < botonMeGusta.length; i++) {
    botonMeGusta[i].addEventListener('click',function(evento){
        //Selecciona el texto del boton me gusta, lo convierte en un array y lo separa por espacios;
        //Ejemplo: '22 Me gusta' => ['22', 'Me', 'gusta']
        //Luego incrementa el primer elemento del array y lo vuelve a unir con el resto de los elementos.
        let textoBoton = botonMeGusta[i].textContent.split(' ');
        let num = textoBoton[0];
        num++;
        botonMeGusta[i].textContent = num + ' Me gusta';

        //Se mueve hacia arriba en el DOM hasta encontrar el contenedor de la mascota.
        //Luego busca el elemento con la clase 'pet-title' y obtiene su contenido de texto.
        //Finalmente muestra una alerta con el nombre de la mascota.
        let contenedorMascota = botonMeGusta[i].closest('.info-mascota');
        let nombreMascota = contenedorMascota.querySelector('.pet-title').textContent;
        alert(nombreMascota + ' was liked.');
    })};
