function Mostrar()
{
//tomo el mes 
var mesDelAno = document.getElementById('mes').value;

//alert (mesDelAño);
var msj;

switch(mesDelAno)
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