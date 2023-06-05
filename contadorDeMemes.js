
//1 traer  o referenciar todos los elementos del HTML y los vamos a guardar en variables para poder utilizarlas despues.

//metodos de seleccion
let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#memeRandom");

//declarar una variable con un estado inicial

var valorContador =0;

//logica de negocio

function incrementar(){
    valorContador++;
numeroContador.innerHTML = valorContador;
if (valorContador ===10){
    mostrarImagen();
}
}
incrementar();


function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;
}



function resetear(){
    valorContador = 0;
    numeroContador.innerHTML =valorContador;
}

//function para mostrar imagen
function mostrarImagen(){
    var coleccionImagenes = ["./assets/meme1.png", "./assets/meme2.png", "./assets/meme3.png", "./assets/meme4.png"];
   //generar un indice aleatoerio
    let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);

    //49.9 rodondea a 50
    //obtner la URL o direccion de imagen
    let urlAleatoria = coleccionImagenes[indexRandom];

    memeRandom.src =urlAleatoria;
    memeRandom.style.display = "block";
}

//eventos en los botones
botonIncrementar.addEventListener("click", incrementar);
botonDecrementar.addEventListener("click", decrementar);
botonResetear.addEventListener("click", resetear);

