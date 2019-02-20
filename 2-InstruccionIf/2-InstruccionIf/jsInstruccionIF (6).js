function Mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad >= 18){
    alert("Tiene "+edad+" es mayor de edad");
}else{
    if(edad < 13){
        alert("Tiene "+edad+" usted es un niño");
    }else{
        alert("Tiene "+edad+" usted es un adolecente");
    }
}


}//FIN DE LA FUNCIÓN
