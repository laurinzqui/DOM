//creacion de un objeto casa (atributos)
/*
const casa = {
    numHabitaciones : 3,
    numPisos : 2,
    numBaños : 1,
    color : "Rojo",
};
casa[3]; //Normalmente se hace con un array
console.log(casa.color);
*/


//plantilla para repetir 50 veces la misma casa (estandarizar esa producciono en cadena)

// arreglos (objeto
var casaArreglo = [3, 2, 1, 4, 2, "Verde", 6,  "Rojo"];

//objetos casa
const casa = { numHabitaciones:3, numBaños:1, numPisos:2, color:"Rojo"};

console.log("El color de mi casa es: ", casa.color);

//clasepara generar una plantilla 


class casaPlantilla {
//1- Definir mis propiedadescoomo varibles, para posteriormente agregarle valores
numHabitaciones = 0;
numBaños = 0;
numPisos = 0;
color = "";



//consteructor
constructor(numHabitaciones, numBaños, numPisos, color){
    this.numHabitaciones = numHabitaciones;
    this.numBaños = numBaños;
    this.numPisos = numPisos;
    this.color = color;
}

/*
En la clase definimos todo de forma "normal" (declaran las varibles como normalmennte las usamos
    = y ;, pero  cuando el objeto se crea (instancia), se visualiza con forma : y , enttre cada valor)

*/

encenderLuces(){
console.log("click, luces encendidas");
}

abrirVentanas(){
    console.log("iiiii, ventanas abiertas");

}

guardarmeDelFresnito(){
     console.log("Que agusticidad");

}
/*
imprimirInfoDeLaCasa(){
    console.log("El numero de habitaciones es de: ", this)
}
*/
}

//instanciar casad
//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)


/*Instanciar objetos

Para instanciar objets, usamos la siguiente sintaxis:


variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

let casaDeLaura = new casaPlantilla (6, 3, 3, "Azul");
console.log(casaDeLaura);
casaDeLaura.guardarmeDelFresnito();
casaDeLaura.encenderLuces();



//ejmplo de POO con gatitos

class gatitos {
    //1- propiedades
    nombre ="";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    color ="";
    raza = "";
    vacunas = false;

//constructor
constructor(nombre, edad, tamaño, caracter, numeroVidas, raza, vacunas) {
this.nombre = nombre;
this.edad = edad;
this.tamaño = tamaño;
this.caracter = caracter;
this.numeroVidas = numeroVidas;
this.raza = raza;
this.vacunas = vacunas;

}

//2 metodos
imprimirInfo(){
console.log("el nombre de mi mascota es: ", this.nombre);
console.log("la edad de mi gatito es: ", this.edad);
console.log("el tamaño de mi gatio es; ", this.tamaño);
console.log("el caracter de mi gatito es: ", this.caracter);
console.log("el numero de vidas de mi gatito es: ", this.numeroVidas);
console.log("la raza de mi gato es: ", this.raza);
console.log("mi gato esta vacunado: ", this.vacunas);


};

maullar(){
    console.log("miau");
};

comer(){
    console.log("nañ ñam");
}; 

jugar(){
    console.log("juega juega juegaaaaa");


};

cuidarGato(){
    if(this.numeroVidas < 3){
        console.log("cuida a tu gatoooo");
    }
}

}
//instanciar
let juanchoDelCampo = new gatitos ("Juancho del campo", 4, "grande", "loco", 7, "persa", true);
console.log(juanchoDelCampo);

let javier = new gatitos ("Javier", 5, "mediano", "tranquilo", 1, "callejero", false);
console.log(javier);

let lupito = new gatitos ("lupito", 4, "grande", "loco", 7, "persa", true);
console.log(lupito);

let nalgon= new gatitos ("nalgon", 4, "grande", "loco", 7, "persa", true);
console.log(nalgon);

let michi = new gatitos ("michi", 4, "grande", "loco", 7, "persa", true);
console.log(michi);

let ludi = new gatitos ("ludi", 4, "grande", "loco", 7, "persa", true);
console.log(ludi);





/*
JSON (JavaScript Object Notation)
 Es un formato estandar basado en texto para representar datos estructurados objetos, 
 basados en la sintaxis de javascript, {}: ,




*/

objeto = {
    nombre : "Laura",
    edad: 27,
}
console.log(objeto);

/*como nuestro servidor no interpreta objettos "puros", necesitamos convertirnosa cadenas de texto este proceso se le conoce como serializar
sintaxos para pasar de objeto normall ajs a json es
JSON.stringify(objetto que quiero serializar)


*/
console.log(JSON.stringify(objeto));

//podemos imprimir nuestri objeto serializado y lo vreremos como una cadena de texto
console.log("Este es un obeto serializado: ", objetoSerializado);
//si tratatamos de acceder a alguna de las propiedasdes de nuestrso objeto serializado, no odremos ya que nnos mostrrar undefined
console.log(objetoSerializado.nombre);
//para deserealizar un objeto JSON vamos a utilizar un metodo llamado JSON.parse(objeto que queremos deserealizar)
let objetoSerializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);
console.log(objetoDeserializado);