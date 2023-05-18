// Se crea la función, es decir, la tarea a ejecutar
function saludo(){
// La función es que imprima dos mensajes en pantalla, uno después de otro
    alert("Bienvenido usuario");
    alert("A continuación encontrarás unos botones que ejecutan algoritmos realizados con JS puro");
}
// Se crea la función, es decir, la tarea a ejecutar
function suma(){
// Se declaran e inicializan las variables 
   let A =0;
   let B =0;
   let SUMA=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir
   A=parseInt(prompt("Por favor ingrese el primer valor a sumar"));
   B=parseInt(prompt("Por favor ingrese el segundo valor a sumar"));
// Se inicializa nuevamente la variable, indicando la operación que genera su valor
   SUMA=A+B;
// Se imprime en pantalla el resultado de la operación
   alert("La suma de "+A+"+"+B+" es "+SUMA+".");
}
// Se crea la función, es decir, la tarea a ejecutar
function ob(){
// Se declaran e inicializan las variables 
    let A =0;
    let B =0;
    let SUMA=0;
    let RESTA=0;
    let MUL=0;
    let DIV=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir
    A=parseInt(prompt("Por favor ingrese el primer valor a operar"));
    B=parseInt(prompt("Por favor ingrese el segundo valor a operar"));
// Se inicializan nuevamente algunas variables, indicando la operación que genera su valor
    SUMA=A+B;
    RESTA=A-B;
    MUL=A*B;
    DIV=A/B;
// Se imprime en pantalla el resultado de cada operación
    alert("La suma de "+A+"+"+B+" es "+SUMA+".");
    alert("La resta de "+A+"-"+B+" es "+RESTA+".");
    alert("La multiplicación de "+A+"*"+B+" es "+MUL+".");
    alert("La división de "+A+"/"+B+" es "+DIV+".");
 }
 // Se crea la función, es decir, la tarea a ejecutar
 function cn(){
// Se declaran e inicializan las variables 
    let A =0;
    let C =0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir
    A=parseInt(prompt("Por favor ingrese el primer valor a potenciar al cuadrado"));
// Se inicializa nuevamente la variable, indicando la operación que genera su valor   
    C=A*A;
// Se imprime en pantalla el resultado de la operación   
    alert("El cuadrado de "+A+ " es "+C+".");
 }
// Se crea la función, es decir, la tarea a ejecutar
 function at(){
// Se declaran e inicializan las variables    
    let h =0;
    let b =0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir    
    h=parseInt(prompt("Por favor ingrese la altura (h) del triángulo"));
    b=parseInt(prompt("Por favor ingrese la base (b) del triángulo"));
// Se inicializa nuevamente la variable, indicando la operación que genera su valor     
    a=(b*h)/2;
// Se imprime en pantalla el resultado de la operación 
    alert("El área de un triángulo de altura "+h+ " y base "+b+" es "+a+".");
 }
 // Se crea la función, es decir, la tarea a ejecutar
 function ic(){
// Se declaran e inicializan las variables 
    let años =0;
    let interes=0.017;
    let dinero =0;
    let ganancias=0;
    let total=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir   
    dinero=parseInt(prompt("Por favor, ingresa la cantidad de dinero que deseas invertir."));
    años=parseInt(prompt("Por favor, indica la cantidad de años en que deseas realizar la inversión."));
// Se inicializa nuevamente la variable, indicando la operación que genera su valor        
    ganancias=(dinero*interes)*(años*12);
    total=ganancias+dinero;
// Se imprime en pantalla el resultado de la operación     
    alert("Las ganancias que tendrías invirtiendo $"+dinero+ " durante "+años+" años es $"+ganancias+", es decir que el total sería de $"+total+".");
 }
// Se crea la función, es decir, la tarea a ejecutar
 function pn(){
// Se declaran e inicializan las variables 
    let alumno="";
    let materia="";
    let nota1 =0;
    let nota2 =0;
    let nota3 =0;
    let nota4 =0;
    let nota5 =0;
    let nota6 =0;
    let nota7 =0;
    let promedio=0;
    let estado="";
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir   
    alumno=(prompt("Por favor, ingresa el nombre del alumno a calificar."));
    materia=(prompt("Por favor, ingresa el nombre de la materia."));
    nota1=parseFloat(prompt("Por favor, ingresa la primera nota."));
    nota2=parseFloat(prompt("Por favor, ingresa la segunda nota."));
    nota3=parseFloat(prompt("Por favor, ingresa la tercera nota."));
    nota4=parseFloat(prompt("Por favor, ingresa la cuarta nota."));
    nota5=parseFloat(prompt("Por favor, ingresa la quinta nota."));
    nota6=parseFloat(prompt("Por favor, ingresa la sexta nota."));
    nota7=parseFloat(prompt("Por favor, ingresa la séptima nota."));
// Se inicializa nuevamente la variable, indicando la operación que genera su valor
    promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
// Se utiliza un condicional para determinar el valor de la variable "estado"
    if (promedio>=6.2){ 
        estado="aprobó";
    }
    else{
        estado="reprobó";
    }
// Se imprime en pantalla el resultado de la operación 
    alert("El estudiante "+alumno+" obtuvo un promedio de "+promedio+" en la materia "+materia+ ", es decir, "+estado+".");
 }
// Se crea la función, es decir, la tarea a ejecutar
 function m2n(){
// Se declaran e inicializan las variables 
    let A=0;
    let B=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir   
    A=parseInt(prompt("Por favor, ingresa el primer valor a comparar."));
    B=parseInt(prompt("Por favor, ingresa el segundo valor a comparar."));
// Se utiliza un condicional para comparar los valores de las variables
    if (A==B){
// Se imprime en pantalla un posible resultado de la comparación        
        alert("Los números son iguales ("+A+"="+B+").");
    }
    else{
        if (A>B){
// Se imprime en pantalla un posible resultado de la comparación             
            alert("El número mayor es "+A+" ("+A+">"+B+").");
        }
        else{
// Se imprime en pantalla un posible resultado de la comparación             
            alert("El número mayor es "+B+" ("+A+"<"+B+")."); 
        }
    }
 }
// Se crea la función, es decir, la tarea a ejecutar
 function m3n(){
// Se declaran e inicializan las variables 
    let A=0;
    let B=0;
    let C=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir    
    A=parseInt(prompt("Por favor, ingresa el primer valor a comparar."));
    B=parseInt(prompt("Por favor, ingresa el segundo valor a comparar."));
    C=parseInt(prompt("Por favor, ingresa el tercer valor a comparar."));
// Se utiliza un condicional para comparar los valores de las variables
    if ((A==B)&&(A==C)){
// Se imprime en pantalla un posible resultado de la comparación
        alert("Los números son iguales ("+A+"="+B+"="+C+").");
    }
    else{
        if ((A==B)&&(A<C)){
 // Se imprime en pantalla un posible resultado de la comparación           
            alert("El número menor es "+A+" ("+A+"="+B+" Y "+A+"<"+C+").");
        }
        else{
            if ((A==C)&&(A<B)){
// Se imprime en pantalla un posible resultado de la comparación                
                alert("El número menor es "+A+" ("+A+"="+C+" Y "+A+"<"+B+").");
            }
            else{
                if ((B==C)&&(B<A)){
// Se imprime en pantalla un posible resultado de la comparación                    
                alert("El número menor es "+B+" ("+B+"="+C+" Y "+B+"<"+A+").");
                }    
                else{
                    if ((A<B)&&(A<C)){
// Se imprime en pantalla un posible resultado de la comparación                       
                    alert("El número menor es "+A+" ("+A+"<"+B+" Y "+A+"<"+C+").");
                    }
                    else{
                        if ((B<A)&&(B<C)){
// Se imprime en pantalla un posible resultado de la comparación                            
                            alert("El número menor es "+B+" ("+B+"<"+A+" Y "+B+"<"+C+").");
                            }
                        else{
// Se imprime en pantalla un posible resultado de la comparación                            
                            alert("El número menor es "+C+" ("+C+"<"+A+" Y "+C+"<"+B+").");
                        }    
                    }    
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            }
        }
    }
 }
// Se crea la función, es decir, la tarea a ejecutar
 function kd(){
// Se declaran e inicializan las variables
    let kilos =0;
    let precio=4500;
    let descuento =0;
    let descontado=0;
    let totaldes=0;
    let total=0;
// Se solicitan los datos para operar, mostrando un mensaje en pantalla y un espacio para escribir
    kilos=parseInt(prompt("Por favor, ingresa la cantidad de kilos de manzanas que deseas comprar, teniendo en cuenta que 1 kilo cuesta $4500."));
// Se utiliza un condicional para determinar el valor de la variable "descuento"
  if(kilos<=2){
        descuento=0;
    }
    else{
        if(kilos<=5){
            descuento=10;
        }
        else{
            if(kilos<=8){
                descuento=16;
            }
            else{
                if(kilos>=9){
                    descuento=20;
                }
            }
        }
    } 

    /*switch (kilos) {
        case kilos<=2:
            descuento=0;
          break;
        case kilos<=5:
            descuento=0;
        break;
        case kilos<=8:
            descuento=0;
        break;
        case kilos>=9:
            descuento=0;
        break;
          
        default:
          text = "No value found";
      }*/

// Se inicializa nuevamente la variable, indicando la operación que genera su valor
    total=kilos*precio;
    descontado=total*(descuento/100);
    totaldes=total-descontado;
// Se imprime en pantalla el resultado de la operación
    alert("El valor total de "+kilos+ " kilo(s) de manzanas sin descuento es de $"+total+". El descuento que se le aplica es del "+descuento+"%, es decir que el valor final con descuento es de $"+totaldes+".");
 }



