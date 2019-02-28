function Mostrar()
{

	var num;
	var condicion;
	
	var positivos=0;
	var acumuladorPositivos=0;
	var contadorPositivos=0;
	var promPos=0;

	var negativo=0;
	var acumuladorNegativos=0;
	var contadorNegativos=0;
	var promNeg=0;

	var contadorCeros=0;
	var contadorPares=0;
	
	var diferencia;
	var contador=0;
	var flag=0;

do{
	num = parseInt(prompt(contador+1+") Ingrese numero:"));
		while (isNaN(num)) { // Si num no es un numero hace esto.
			num = parseInt(prompt("Eso no es un numero. Ingrese numero:"));
		}
		
		if(num>0){
			//positivo
			acumuladorPositivos=acumuladorPositivos+=num;
			contadorPositivos++;
		}else if(num==0){
			//cero
			contadorCeros++;
		}else{
			//negativo
			acumuladorNegativos=acumuladorNegativos+num;
			contadorNegativos++;
		}

		if(num % 2 == 0){
			//numeros pares
			contadorPares++;
		}
		contador++
		condicion = confirm("Desea seguir?"); // devuelve un booleano
		
}while (condicion);

if(contadorNegativos!=0){
	promNeg=acumuladorNegativos/contadorNegativos;
}

if(contadorPositivos!=0){
	promPos=acumuladorPositivos/contadorPositivos;
}

diferencia=contadorPositivos - contadorNegativos;

document.write("1-Suma de negativos: "+acumuladorNegativos+"<br>");
document.write("2-Suma de positivos: "+acumuladorPositivos+"<br>");
document.write("3-cantidad de negativos: "+contadorNegativos+"<br>");
document.write("4-cantidad de positivos: "+contadorPositivos+"<br>");
document.write("5-cantidad de ceros: "+contadorCeros+"<br>");
document.write("6-cantidad  de pares: "+contadorPares+"<br>");
document.write("7-promedio de negativos: "+promNeg+"<br>");
document.write("8-promedio de positivos: "+promPos+"<br>");
document.write("9-Diferencia entre negativos y positivos: "+diferencia+"<br>");

}//FIN DE LA FUNCIÓN