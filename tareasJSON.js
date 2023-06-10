//.Creamos un arreglo de objeto para nuestras tareas estas tareas tendran id tittulo estatus completada o no
//Esto donde se ejecuta? del lado del cliente
let tareas = [
    {
        id : 1,
        titulo : "Bañar al perro",
        estatus : true,
    }
    ,
    {
        id : 2,
        titulo : "Preparar la comida",
        estatus : false,
    }
]
//enviar eses arreglo a lservidor
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);


//ejemplo de carrito de compras
//declaramos objeto vaacio
 let carritoDeCompras = []
//declaramos un prodcuto
 let producto = {
    id :1,
    nombre: "camisa de pokemon",
    precio: 299.9,
    cantidad: 1,
 };

 //mostrar info del carrito de compras
 console.log( "Tienes: ", carritoDeCompras.length , " produto(s) en tu carrito");
//agregar producto a mi carrito de compras
 carritoDeCompras.push(producto);
 //muestro la informacion actulizada de mi carrito.
 console.log("Tienes: " , carritoDeCompras.length , " produto(s) en tu carrito" );

 //actualizar la cantidad de productos en tu carrito
 let productID = 1; 
 let nuevaCantidad = 3;
 producto.cantidad = nuevaCantidad;
/*verifico si mi producto existe dentro de carrito de comprar para modificrlo 
 si e
*/
 let productoExiste = carritoDeCompras.find(producto === producto.id );
if (productoExiste){
    productoExiste.cantidad = nuevaCantidad;
}
 console.log("Tienes: " , carritoDeCompras.length , " produto(s) en tu carrito" );

/*
 //vaciar carrito completo
 
*/

//eliminar producto de carrito
let productoAEliminar = 1; 

let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoAEliminar;
}
)


/*
el metodo forEach es un metodo de arary de JS que nos va ayudar a  poder ejecutar 
una funcion en cada elemeto de nuestro array
sintaxis de un for each
array.forEach(function(elemento, indice, arreglo))
*/

   

