function Mostrar()
{

	var num;
	var flag=0;
	var maximo;
	var minimo;
	var respuesta;

do{
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
		while (isNaN(num)) { // pide que sea un numero si o si el valor del prompt.
			num = parseInt(prompt("Eso no es un numero. Ingrese numero:"));
		}
		
		if(numero>maximo || flag==0){
			maximo=num;
		}else if(numero<minmo|| flag==0){
			minmo=num;
			flag=1;
		}
		
		respuesta = confirm("Desea seguir?"); // devuelve un booleano.

		

}while (respuesta);

document.getElementById('maximo').value=maximo;


document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN