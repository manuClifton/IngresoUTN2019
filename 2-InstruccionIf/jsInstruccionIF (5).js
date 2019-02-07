function Mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if( edad < 13 || edad >= 18){
    alert("Tiene "+ edad + " usted no es un adolecente");
}

}//FIN DE LA FUNCIÓN