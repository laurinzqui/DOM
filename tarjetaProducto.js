// 1.- Obtener los elementos de HTML para guardarlos en variables
//Almaceno el lugar de destino de mi tarjeta en una constante
const container = document.getElementById("product-container"); 
const botonAgregarProductos = document.getElementById("agregarProducto"); 
//almacenar elementos del formulario en variables de JS
let nombreProducto = document.getElementById("nombreProducto"); 
let descripcionDelProducto = document.getElementById("descripcionDelProducto"); 
let imagenProducto = document.getElementById("imagenProducto"); 

    //guardo los valores de mis inputs

function agregarProductos(){
        let valorInputProducto = nombreProducto.value;
        let valorInputDescripcion = descripcionDelProducto.value;
        let valorInputImagen = imagenProducto.value;

        console.log(valorInputDescripcion);
        console.log(descripcionDelProducto);

        //quiero que cada tarjeta tenga su propio div o  contenedor
        const productCard = document.createElement("div"); 
    //creo el elemento
    productCard.innerHTML = `
    <img src="./assets/maruchan.PNG" alt ="producto">
    <h3>Nombre del producto</h3>
    <p> precio: $9.99  </p>
    <button class="btn" > Agregar  al carrito </button>
    `;

    //agregar esa tarjeta al producto al container especificado

    container.appendChild(productCard);
 }
 

//Creamos el evento
botonAgregarProductos.addEventListener("click", agregarProductos);