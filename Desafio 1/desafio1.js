let op = parseInt(prompt("Calculadora Humilde \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \nIngrese una opcion del 1 al 4 o 0 para salir"))

while (op != 0){

    if (op == 1){
        let n1 = parseInt(prompt("Ingrese el primer numero: "))
        let n2 = parseInt(prompt("Ingrese el segundo numero: "))
        let resultado = n1+n2
        alert("Su resultado es: " + resultado)
    }
    else if (op == 2){
        let n1 = parseInt(prompt("Ingrese el primer numero: "))
        let n2 = parseInt(prompt("Ingrese el segundo numero: "))
        let resultado = n1-n2
        alert("Su resultado es: " + resultado)
    }
    else if (op == 3){
        let n1 = parseInt(prompt("Ingrese el primer numero: "))
        let n2 = parseInt(prompt("Ingrese el segundo numero: "))
        let resultado = n1*n2
        alert("Su resultado es: " + resultado)
    }
    else if (op == 4){
        let n1 = parseInt(prompt("Ingrese el primer numero: "))
        let n2 = parseInt(prompt("Ingrese el segundo numero: "))
        let resultado = n1/n2
        alert("Su resultado es: " + resultado)
    }
    op = parseInt(prompt("Calculadora Humilde \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir \nIngrese una opcion del 1 al 4 o 0 para salir"))

}