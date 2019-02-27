function Mostrar() {
    //tomo la hora
    var laHora = parseInt(document.getElementById('hora').value);
    var msj;


    switch (laHora) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            msj = "Es de mañana.";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            msj = "Es de tarde.";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            msj = "Es de noche.";
            break;
        default:
            msj="La hora no existe.";
            break;
       
    }

    

    alert(msj);


}//FIN DE LA FUNCIÓN