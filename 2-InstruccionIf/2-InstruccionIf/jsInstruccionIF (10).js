function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var num = Math.floor(Math.random()*10+1);
	var msj;

	if(num >= 9){
		msj="EXELENTE: "+num;
	}else if(num > 4){
		msj="Aprovado: " +num;
	}else{
		msj="Desaprobado: "+num;
	}

	alert(msj);
}//FIN DE LA FUNCIÓN