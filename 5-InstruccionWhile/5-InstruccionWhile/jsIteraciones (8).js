function Mostrar()
{
	var num;
	var contadorNegativos=0;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var flag = 0; // variable bandera: para saver si paso por alguna condicion.


do{
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
		while (isNaN(num)) { // pide que sea un numero si o si el valor del prompt.
			num = parseInt(prompt("Eso no es un numero. Ingrese numero:"));
		}
		if(num >= 0){
				positivo += num;
			}else{
				flag=1
				negativo *= num;
			}
		
		respuesta = confirm("Desea seguir?"); // devuelve un booleano.

		contador++;

}while (respuesta);


document.getElementById('suma').value=positivo;
if(flag==0){
	negativo=0;
}
/*if(contadorNegativos == 0){ //una opcion para modificar el valor de negativo si no se ingresa numeros negativos.
	negativo = 0;
}*/
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN