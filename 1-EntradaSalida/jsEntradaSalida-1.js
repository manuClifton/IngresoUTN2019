//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*function Mostrar()
{
    alert('"Esto funciona de maravilla"');
}*/

function Mostrar(){

    var nota;
    var sexo;
    var promedio;
    var notaBAja;
    var sexoNotaBaja;
    var contadorVaronesMAs5=0;
    var acumulador=0;
    var flag=0;
    var cantidad = 3;

    for(var i=0; i<cantidad; i++){
        nota= parseInt(prompt("Ingrese nota: "));
            while(nota < 0 || nota > 10 || isNaN(nota)){
                nota= parseInt(prompt("Error.Reingrese nota: "));
            }

         sexo= prompt("Ingrese el sexo: ").toLowerCase();
            while(sexo != "f" && sexo !="m"){
                nota= prompt("Error.Reingrese sexo: ");
            }    

         acumulador=acumulador+nota;

         if(sexo=="m" && nota >= 5){
             contadorVaronesMAs5++;
         }
         if(nota < notaBAja || flag == 0){
             notaBAja= nota;
             sexoNotaBaja = sexo;
             flag =1;
         }

    }

   promedio=acumulador/cantidad;

   alert("Promedio de las notas: "+promedio+"\n Varones con nota mayor: "+contadorVaronesMAs5+"\n NOta mas baja: "+notaBAja+"\n Sexo nota baja: "+sexoNotaBaja);

}//FIN

                                            