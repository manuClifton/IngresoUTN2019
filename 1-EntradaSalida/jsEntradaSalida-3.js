/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
	var nombre;
    var mensaje
    
    mensaje = "tu nombre es: ";
   nombre =  document.getElementById("elNombre").value;
   alert(mensaje + nombre);

}


