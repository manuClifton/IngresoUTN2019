function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
var msj;

switch(mesDelAño)
{
    case "Febrero":
        msj="Este mes no tiene más de 29 días."
        break;
    default:
        msj="Este mes tiene 30 o más días."
        break;
}
	alert(msj);


}//FIN DE LA FUNCIÓN