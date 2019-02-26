function Mostrar()
{
var num;
var contador=0;
var acumulador=0;

while (contador < 5) {
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
	acumulador=acumulador+num;
	contador++;
	
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN