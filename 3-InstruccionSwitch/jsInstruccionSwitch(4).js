function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
var msj;
    
    switch(mesDelAño){
        case "Febrero":
            msj=mesDelAño+" tiene 28 dias.";
            break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            msj=mesDelAño+" tiene 30 dias.";
            break;
        default:
            msj=mesDelAño+" tiene 31 dias.";
            break;
    }
        alert(msj);
	



}//FIN DE LA FUNCIÓN