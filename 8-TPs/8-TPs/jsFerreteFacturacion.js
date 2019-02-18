/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var num1;
var num2;
var num3;
var suma;
var promedio;
var precioConIva;

function Sumar () 
{
    num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    suma = (num1 + num2 + num3); 
    alert("La suma de los productos es: "+suma.toFixed(2));
}
function Promedio () 
{
	num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);

    promedio = (num1 + num2 + num3) / 3;
    alert("EL promedio de los numeros es: "+promedio.toFixed(2));
}
function PrecioFinal () 
{
	num1 = parseInt(document.getElementById("PrecioUno").value);
    num2 = parseInt(document.getElementById("PrecioDos").value);
    num3 = parseInt(document.getElementById("PrecioTres").value);
    var resultado = (num1+num2+num3)*0.21
    precioConIva = (num1+num2+num3) + resultado;
    alert("El precio de los prodictos mas impuestos es: "+precioConIva);
}