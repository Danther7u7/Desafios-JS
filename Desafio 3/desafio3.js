let frutas = []

op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))

while (op != 0){
    if (op == 1){
        frutas.push("Manzana")
        alert("Su fruta ha sido seleccionada correctamente")
        op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))
        continue
    }else if (op == 2){
        frutas.push("Naranja")
        alert("Su fruta ha sido seleccionada correctamente")
        op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))
        continue
    }else if (op == 3){
        frutas.push("Platano")
        alert("Su fruta ha sido seleccionada correctamente")
        op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))
        continue
    }else if (op == 4){
        frutas.push("Kiwi")
        alert("Su fruta ha sido seleccionada correctamente")
        op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))
        continue
    }else{
        alert("Ingrese una opcion correcta")
        op = parseInt(prompt("Escoja la(s) fruta(s) que desee llevar: \n1. Manzana \n2. Naranja \n3. Platano \n4. Kiwi \nIngrese '0' para confirmar pedido"))
        continue
    }
}

if (frutas == ""){
    alert("Usted no lleva nada")
}else{
    alert(`Usted lleva ${frutas.length} frutas: \n${frutas} \nPorfavor dirijase a la caja para pagar, gracias!.`)
}

