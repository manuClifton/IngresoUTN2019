/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

    var num1;
    var num2;
    var resultado;

function sumar()
{	
    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    resultado=num1+num2;
    alert(resultado);

}

function restar()
{
	num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    resultado=num1-num2;
    alert(resultado);
}

function multiplicar()
{ 
	num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    resultado=num1*num2;
    alert(resultado);
}

function dividir()
{
	num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    resultado=num1/num2;
    alert(resultado);
}

