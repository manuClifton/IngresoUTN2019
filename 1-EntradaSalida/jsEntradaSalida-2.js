/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/

/*
function Mostrar() {
    var nombre;
    nombre = prompt("Ingrese su nombre");
    alert(nombre);
}
*/

/*8- realizar el algoritmo que permita ingresar números positivos (validar que sea positivo) hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a) la cantidad de números pares.
b) el promedio de todos los números ingresados.
c) la suma de todos los números.
d) El número máximo y el mínimo
e) cantidad de impares.
*/

function Mostrar() {
    var num;
    var condicion;
    var cantidadPares=0;
    var cantidadImpares=0;
    var acumulador=0;
    var contador=0;
    var flag = 0;
    var promedio;
    var suma;
    var maximo;
    var minimo;



    do{
        num = parseInt(prompt("Ingrese numero positivo: "));
        while(num > 0 && isNaN(num)){
            num = parseInt(prompt("Valor incorrecto.Reingrese numero: "));
        }

        if(num % 2 == 0){
            cantidadPares++
        }else{
            cantidadImpares++
        }
        
        if(num > maximo || flag == 0){
            maximo = num;
        }
        if(num < minimo || flag == 0){
            minimo = num;
            flag = 1;
        }
        
            acumulador = acumulador+num;
            contador++;
        
        condicion= confirm("Desea continuar?");
    
    }while (condicion);
    

    promedio = acumulador/contador;
    
   document.write("1-cantidad  de pares: "+cantidadPares+"<br>");
   document.write("2-cantidad  de impares: "+cantidadImpares+"<br>");
   document.write("3-promedio de positivos: "+promedio.toFixed(2)+"<br>");
document.write("4-Suma de positivos: "+acumulador+"<br>");
document.write("5-numero maximo: "+maximo+"<br>");
document.write("5-numero minimo: "+minimo+"<br>");



   
}

