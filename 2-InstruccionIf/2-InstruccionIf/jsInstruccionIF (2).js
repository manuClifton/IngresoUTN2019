function Mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad >= 18){
    alert("Tiene "+edad+" es mayor de edad");
}else{
    alert("Tiene "+edad+" es menor de edad");
}

}//FIN DE LA FUNCIÓN