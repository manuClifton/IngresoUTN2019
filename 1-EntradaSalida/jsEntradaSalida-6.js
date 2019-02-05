/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var n1;
    var n2;
    var resultado;

    
    n1=parseInt(document.getElementById("numeroUno").value);
    
    n2=parseInt(document.getElementById("numeroDos").value);
    
    resultado = n1+n2;

    alert("la suma es "+resultado);

}

