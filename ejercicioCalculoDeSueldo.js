
//Definir variables con informacion sobre el sueldo
let sueldoDiario = 156.78;
let sueldoQuincenalBruto = sueldoDiario * 15;
let sueldoMensualBruto = sueldoQuincenalBruto * 2;
//Definir los descuentos(bruto/neto/ISR) sueldo neto
let sueldoQuincenalNeto = sueldoQuincenalBruto * 0.31;
let sueldoMensualNeto = sueldoMensualBruto * 0.31;
console.log("Sueldo quincenal bruto es: ", sueldoQuincenalBruto);
console.log("Sueldo quincenal neto es: ", sueldoQuincenalNeto);
console.log("Sueldo mensual bruto es: ", sueldoMensualBruto);
console.log("Sueldo mensual neto es: ", sueldoMensualNeto);

//se crea la clase empleaddos
class empleados {
    //1- Se declaran los atributos
nombre = "";
edad = 0;
rfc = "";
diasTrabajados = 0;
sueldoPorDia = 0;

//Constructor
constructor(nombre, edad, rfc, diasTrabajados, sueldoPorDia){
this.nombre = nombre;
this.edad = edad;
this.rfc = rfc; 
this.diasTrabajados = diasTrabajados; 
this.sueldoPorDia =sueldoPorDia;
}

//2- se declaran los metodos.
 mostrarInfo(){
    console.log("Nombre del empleado: ", this.nombre);
    console.log("Edad del empleado: ", this.edad);
    console.log("RFC: ", this.rfc);
    console.log("Dias trabajados: ", this.diasTrabajados);
    console.log("Sueldo por dia: ", this.sueldoPorDia);
 }
 
diasTrabajados(){
    console.log("Dias trabajados: ", this.diasTrabajados);
 }

sueldoPorDia(){
    console.logg("Sueldo por día: ", this.sueldoPorDia);
}


}

//Instanciar

let empleado1 = new empleados("Juan", 43, "PEJU800315XXX", 5, 156.78)
console.log(empleado1, "El calculo de tu sueldo es: ", sueldoDiario * 5 * 0.31);

let empleado2 = new empleados("Maria", 27, "GOMM950710XXX", 4, 156.78)
console.log(empleado2, "El calculo de tu sueldo es: ", sueldoDiario * 4);

let empleado3 = new empleados("Alejandro", 36, "RAAL871122XXX", 3, 156.78)
console.log(empleado3, "El calculo de tu sueldo es: ", sueldoDiario * 3);

let empleado4 = new empleados("Laura", 55, "GALA780505XXX", 4, 156.78)
console.log(empleado4, "El calculo de tu sueldo es: ", sueldoDiario * 2);

let empleado5 = new empleados("Carlos", 33, "LOCC900112XXX", 5, 156.78)
console.log(empleado5, "El calculo de tu sueldo es: ", sueldoDiario * 1);








