/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cantidad;
var precioDescuento;
var precioPorLampara;
var resultado;
var select;

var precio;
var descuento;
var precioConDescuento;
var importeFinal;
var mensaje = "Importe a pagar $ ";
var iibb;
var flag = false;

function CalcularPrecio() {
   cantidad = parseFloat(document.getElementById("Cantidad").value);
   select = document.getElementById("Marca").value;
   precio = 35;

   if(cantidad >= 6){
       descuento = precio * 50/100;
   }else if(cantidad == 5){
       if(select == "ArgentinaLuz"){
           descuento = precio * 40 /100;
       }else{
           descuento = precio * 30/100;
       }
   }else if(cantidad == 4){
       if(select == "ArgentinaLuz" || select == "FelipeLamparas"){
           descuento = precio * 25/100;
       }else{
           descuento = precio * 20/100;
       }
   }else if(cantidad == 3){
       if(select == "ArgentinaLuz"){
           descuento = precio * 15/100;
       }else if(select == "FelipeLamparas"){
           descuento = precio * 10/100;
       }else{
           descuento = precio * 5/100;
       }
   }else{
       descuento = 0;
   }

   // EN ESTE PUNTO YA SE CUAL ES EL DESCUENTO
   precioConDescuento = precio - descuento;

   importeFinal = cantidad * precioConDescuento;

   if(importeFinal > 120){
       iibb = importeFinal*10/100;
       importeFinal = importeFinal + iibb;
       flag=true;
   }else{
       flag = false;
   }
   document.getElementById("precioDescuento").value = precioConDescuento;

   mensaje = "Importe final $" + importeFinal;

   if(flag){
       mensaje = mensaje + " IIBB usted pago $"+iibb; 
   }
   
   alert(mensaje);
}




 /*cantidad = parseFloat(document.getElementById("Cantidad").value);
    select = document.getElementById("Marca").value;
    precioPorLampara = cantidad * 35;

    if (cantidad >= 6) {
        resultado = precioPorLampara - (precioPorLampara * 0.5);
        document.getElementById("precioDescuento").value = resultado;
        if (resultado > 120) {
            var impuesto = resultado * 10 / 100
            var res = resultado + (resultado * 10 / 100);
            document.getElementById("precioDescuento").value = res;
            alert("Usted pago " + res + " siendo " + impuesto + " el impuesto que se pago.")
        }
    } else if (cantidad == 5 && select == "ArgentinaLuz") {
        resultado = precioPorLampara - (precioPorLampara * 40/100);
        document.getElementById("precioDescuento").value = resultado;
    } else if ((cantidad == 5 && select != "ArgentinaLuz")) {
        resultado = precioPorLampara - (precioPorLampara * 30/100);
        document.getElementById("precioDescuento").value = resultado;
    } else if (cantidad == 4 && (select == "ArgentinaLuz" || select == "FelipeLamparas")) {
        resultado = precioPorLampara - (precioPorLampara * 25/100);
        document.getElementById("precioDescuento").value = resultado;
    } else if (cantidad == 4&& (select != "ArgentinaLuz" || select != "FelipeLamparas" )) {
        resultado = precioPorLampara - (precioPorLampara * 20/100);
        document.getElementById("precioDescuento").value = resultado;
    } else if (cantidad == 3 && select == "ArgentinaLuz") {
        resultado = precioPorLampara - (precioPorLampara * 15 / 100);
        document.getElementById("precioDescuento").value = resultado;
    } else if (cantidad == 3 && select == "FelipeLamparas") {
        resultado = precioPorLampara - (precioPorLampara * 10 / 100);
        document.getElementById("precioDescuento").value = resultado;
    } else if (cantidad == 3 && select != "ArgentinaLuz" || select != "FelipeLamparas") {
        resultado = precioPorLampara - (precioPorLampara * 5 / 100);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad > 0){

       document.getElementById("precioDescuento").value = precioPorLampara;
    }*/