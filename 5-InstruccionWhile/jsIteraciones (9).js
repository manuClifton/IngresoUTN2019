function Mostrar()
{

	var num;
	var flag=0;
	var maximo;
	var minimo;
	var respuesta;
	var contador=0;

do{
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
		while (isNaN(num)) { // Si num no es un numero hace esto.
			num = parseInt(prompt("Eso no es un numero. Ingrese numero:"));
		}
		
		if(num>maximo || flag==0){
			maximo=num;
		}
		 if(num<minimo|| flag==0){
			minimo=num;
			flag=1;
		}
		contador++
		respuesta = confirm("Desea seguir?"); // devuelve un booleano.

		

}while (respuesta);

document.getElementById('maximo').value=maximo;


document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN