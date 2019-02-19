/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var largo;
var ancho;
var perimetro;
var alambreTotal;
var radio;
var superficie;
var cemento;
var cal;
function Rectangulo () 
{
    largo=parseFloat(document.getElementById("Largo").value);
    ancho=parseFloat(document.getElementById("Ancho").value);
    var perimetro = (largo+largo) + (ancho+ancho);
     var alambreTotal= perimetro*3;
    alert("La cantidad de alambre a comprar es: " +alambreTotal);
}
function Circulo () 
{
	radio=parseFloat(document.getElementById("Radio").value);
    var perimetro= 2*Math.PI*radio;
    var alambreTotal= perimetro*3;
    alert("Cantidad de alambre a compra: "+alambreTotal);

}
function Materiales () 
{
	largo=parseInt(document.getElementById("Largo").value);
    ancho=parseInt(document.getElementById("Ancho").value);
    superficie= largo*ancho;
    cemento= superficie*2;
    cal=superficie*3;

    alert("Usted necesita "+ cemento+" bolsas de cemento y "+cal+" bolsas de cal para "+superficie+" metros cuadrados");
}