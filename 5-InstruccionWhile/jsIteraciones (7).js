function Mostrar()
{

	var num;
	var contador=0;
	var acumulador=0;
	var respuesta;


do{
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
		while (isNaN(num)) { // pide que sea un numero si o si el valor del prompt.
			num = parseInt(prompt("Eso no es un numero. Ingrese numero:"));
		}
		respuesta = confirm("Desea seguir?"); // devuelve un booleano.

		acumulador=acumulador+num;
		contador++;

}while (respuesta);
alert("Fin de funcion.")


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;



	
/*	var num;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	while (respuesta == "si") {
		
		num = parseInt(prompt(contador+1+") Ingrese numero:"));
		respuesta = prompt("Desea seguir?").toLocaleLowerCase();
		acumulador=acumulador+num;
		contador++;
	}
	alert("Fin de la funcion");
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/

}//FIN DE LA FUNCIÓN