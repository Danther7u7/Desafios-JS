let precioEmpanada = 3

let cantidad = parseInt(prompt("Ricas empanadas a 3 Dolares!\nIndique la cantidad de empanadas que desea: "))

function total(cantidad){
    let total = cantidad * precioEmpanada
    return total
}

function descuento(monto){
    let descuento = (monto - (monto*0.1))
    return descuento
}

let pago = total(cantidad)
let pagoDescuento = descuento(pago)

alert("Usted debe pagar " + pago + " Dolares")

let metodoPago = parseInt(prompt("Indique su metodo de pago: \n1. Efectivo (10% descuento) \n2. Transferencia \n3. Debito o Credito"))

while (true){
    if (metodoPago == 1){
        alert("Pago realizado con exito, muchas gracias! \n10% de descuento aplicado \ntotal: $" + pagoDescuento)
        break
    
    }else if (metodoPago == 2){
        alert("Pago realizado con exito, muchas gracias! \ntotal: $" + pago)
        break
    
    }else if (metodoPago == 3){
        alert("Pago realizado con exito, muchas gracias! \ntotal: $" + pago)
        break
    
    }else{
        alert("Indique un metodo de pago valido porfavor")
        metodoPago = parseInt(prompt("Indique su metodo de pago: \n1. Efectivo (10% descuento) \n2. Transferencia \n3. Debito o Credito"))
        continue
    }
}