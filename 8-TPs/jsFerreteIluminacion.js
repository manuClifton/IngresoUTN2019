/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio (minimo,maximo) 
{
    cantidad = parseFloat(document.getElementById("Cantidad").value);
    select = document.getElementById("Marca").value;
    precioPorLampara= cantidad*35;

    if(cantidad >= 6){
        resultado = precioPorLampara -(precioPorLampara*0.5);
        document.getElementById("precioDescuento").value = resultado;
        if(resultado > 120){
            var impuesto =resultado*10/100
          var res = resultado+(resultado*10/100);
          document.getElementById("precioDescuento").value = res;
          alert("Usted pago "+res+" siendo "+impuesto+" el impuesto que se pago.")
        }
    }else if(cantidad == 5 && select == "ArgentinaLuz"){
        resultado = precioPorLampara - (precioPorLampara*0.4);
        document.getElementById("precioDescuento").value = resultado;
    }else if((cantidad == 5 && select != "ArgentinaLuz")){
        resultado = precioPorLampara - (precioPorLampara*0.3);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad == 4 && (select == "ArgentinaLuz" || select == "FelipeLamparas" ) ){
        resultado = precioPor4Lampara -(precioPorLampara*0.25);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad == 4 ) {
        resultado = precioPorLampara -(precioPorLampara*0.2);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad == 3 && select == "ArgentinaLuz"){
        resultado = precioPorLampara -(precioPorLampara*15/100);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad == 3 && select == "FelipeLamparas"){
        resultado = precioPorLampara -(precioPorLampara*10/100);
        document.getElementById("precioDescuento").value = resultado;
    }else if(cantidad == 3 && select != "ArgentinaLuz" || select != "FelipeLamparas" ){
        resultado = precioPorLampara -(precioPorLampara*5/100);
        document.getElementById("precioDescuento").value = resultado;
    }


}   
