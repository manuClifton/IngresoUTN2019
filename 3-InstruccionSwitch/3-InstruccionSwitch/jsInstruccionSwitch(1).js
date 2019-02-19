function Mostrar()
{
//tomo el mes
var mesDelAno = document.getElementById('mes').value;
var msj;

switch(mesDelAno)
{
    case "Enero":
        msj="que comiences bien el año!!!"
        break;
    case "Marzo":
        msj="A clases"
        break;
    case "Julio":
        msj="se vienen las vacaciones!!!"
        break;
    case "Diciembre":
        msj="Felices fiesta!!!"
        break;
}
        alert(msj);

}//FIN DE LA FUNCIÓN