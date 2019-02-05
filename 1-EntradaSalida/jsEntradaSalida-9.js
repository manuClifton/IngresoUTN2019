/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var num1;
    var aumento;
    var resultado;

    num1=parseInt(document.getElementById("sueldo").value);
    aumento= num1*0.10;
    resultado=num1+aumento;

    document.getElementById("resultado").value=resultado;
    
}
