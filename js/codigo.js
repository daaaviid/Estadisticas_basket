//Esta es la zona de todas la variables
var nombre = [];
var canasta2 = [];
var canasta3 = [];
var tiempo = [];
var resultado = [];
var sumaa1 = 0;
var sumaa3 = 0;
var sumatiempo = 0;
var sumaresultado = 0;
var max = 0;
var pos = 0;

//Y aqui tengo mi funcion
function basket(nom, c2, c3, temp){
   for (let i = 0; i < c2.length; i++) {
       sumaa1 += c2[i];
       }
       sumaa1 = sumaa1 / c2.length;

   for (let i = 0; i < c3.length; i++) {
       sumaa3 += c3[i];
       }
       sumaa3 = sumaa3 / c3.length;

   for (let i = 0; i < temp.length; i++) {
       sumatiempo += temp[i];
       }
       sumatiempo = sumatiempo / temp.length;


   for (let i = 0; i < c2.length; i++) {
       sumaresultado = c2[i] + c3[i];
       resultado.push(sumaresultado)
       if (sumaresultado > max) {
           max = sumaresultado;
           pos = resultado.indexOf(max);
           //indexOf devuelve el valor en la posicion de la array
       }
   }
}
var i = 0;
while (i < 1) {
    var name = prompt("Cual es el nombre del jugador?");
    if (name!= "salir") {
        var canastaa2 = Number(prompt(`¿Cuántos dobles ha realizado ${name}?`));
        var canastaa3 = Number(prompt(`¿Cúantos triples ha realizado ${name}? `));
        var tiempo1 = Number(prompt(`¿Cuanto tiempo ha jugado ${name}?`));

        nombre.push(name);
        canasta2.push(canastaa2);
        canasta3.push(canastaa3);
        tiempo.push(tiempo1);
// El comando .push agrega un valor al final de la array

    }
    else{
     basket(nombre, canasta2, canasta3, tiempo);
        i++;
    }

}

console.log("La media de canastas dobles ha sido " + sumaa1);
console.log("La media de canastas triples ha sido de " + sumaa3);
console.log("El tiempo medio jugado ha sido de " + sumatiempo);
console.log("El jugador con mayor número de canastas ha sido " + nombre[pos]);
