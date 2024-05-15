/*Dado el siguiente arreglo: [4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable global y pasarlo a una función para determinar 
si el número es par o impar*/

let numero : number [] =[4,7,9,3,1,45,67,23,29,78,11,16]; //Se declara el arreglo.
let i : number;                                           //Se declara la variable para usar en el for.
let verificarNumMayor : number = numero[0];               //Se declara la variable con el primer numero del arreglo, y se
                                                          // toma a este como el mayor hasta el momento.
for (i=0; i<numero.length; i++){                          //Se inicia el bucle que va a iterar en cada elemento.
    if (numero[i]>verificarNumMayor){                     //Se verifica si el nuevo numero es mayor al almacenado.
        verificarNumMayor=numero[i];                      //Si es mayor, se lo almacena en la variable verificarNumMayor.
        }
    }
    console.log(`El numero mayor en la lista es el: ${verificarNumMayor}`);
    /*Aqui abajo se verifica que sea par o impar*/
    if (verificarNumMayor % 2 == 0){
        console.log(`El numero es par`);
        }else {
        console.log(`El numero es impar`);
    };

