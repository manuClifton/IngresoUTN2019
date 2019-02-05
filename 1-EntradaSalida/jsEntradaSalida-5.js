/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{	
	var nombre;
    var edad;
    var msj1= "Usted se llama ";
    var msj2=" y tiene ";

    nombre = document.getElementById("elNombre").value;
    edad = document.getElementById("laEdad").value;
    alert(msj1+nombre+msj2+edad);
    
}

