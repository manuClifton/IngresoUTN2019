function Mostrar()
{
//tomo el mes 
var mesDelAno = document.getElementById('mes').value;

//alert (mesDelAño);

var msj;

switch(mesDelAno)
{
    case "Enero":
    case "Febrero":     
    case "Abril":    
    case "Mayo":   
    case "Junio":
        msj="Falta para el invierno"
        break;
    case "Julio":
    case "Agosto":
        msj="Abrigate que hace frio"
        break;
    default:
        msj="Ya pasamos el frio, ahora calor!!!"
    break;
}
    alert(msj);




}//FIN DE LA FUNCIÓN