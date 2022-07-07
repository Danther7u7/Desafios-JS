class Camiseta {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre.toUpperCase();
        this.cantidad = cantidad;
        this.precio = precio;
    }
    precioTotal = () => this.cantidad * this.precio;
}

class Pantalon {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre.toUpperCase();
        this.cantidad = cantidad;
        this.precio = precio;
    }
    precioTotal = () => this.cantidad * this.precio;
}

class Gorro {
    constructor(nombre, cantidad, precio){
        this.nombre = nombre.toUpperCase();
        this.cantidad = cantidad;
        this.precio = precio;
    }
    precioTotal = () => this.cantidad * this.precio;
}

function mostrarProductos(productos) {
    for (const producto of productos) {
        console.log(producto);
        console.log(producto.nombre);
    }
}

function precioTotal(productos) {
    let sumatoriaCosto = 0;
    for (const producto of productos) {
        sumatoriaCosto += producto.precioTotal();
    }
    return sumatoriaCosto
}

function main() {
    console.log("El precio total de los productos es: " + "$" + precioTotal(listaProductos))
}

const listaProductos = [];

let op = parseInt(prompt("Indique que producto desea registrar: \n1. Camiseta \n2. Pantalon \n3. Gorro \n0. Para salir"))

while (op != 0){
    if (op == 1){
        let nombre = prompt("Ingrese el nombre:");
        let precio = parseInt(prompt("Ingrese el precio:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad:"));
        let productoARegistrar = new Camiseta(nombre,cantidad,precio);
        listaProductos.push(productoARegistrar)
        op = parseInt(prompt("Indique que producto desea registrar: \n1. Camiseta \n2. Pantalon \n3. Gorro \n0. Para salir"))

    }else if (op == 2){
        let nombre = prompt("Ingrese el nombre");
        let precio = parseInt(prompt("Ingrese el precio:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad"));
        let productoARegistrar = new Pantalon(nombre,cantidad,precio);
        listaProductos.push(productoARegistrar)
        op = parseInt(prompt("Indique que producto desea registrar: \n1. Camiseta \n2. Pantalon \n3. Gorro \n0. Para salir"))
        
    }else if (op == 3){
        let nombre = prompt("Ingrese el nombre");
        let precio = parseInt(prompt("Ingrese el precio:"));
        let cantidad = parseInt(prompt("Ingrese la cantidad"));
        let productoARegistrar = new Gorro(nombre,cantidad,precio);
        listaProductos.push(productoARegistrar)
        op = parseInt(prompt("Indique que producto desea registrar: \n1. Camiseta \n2. Pantalon \n3. Gorro \n0. Para salir"))
        
    }else{
        alert("Ingrese una opcion correcta")
        op = parseInt(prompt("Indique que producto desea registrar: \n1. Camiseta \n2. Pantalon \n3. Gorro \n0. Para salir"))
        continue
    }
}

const contenedorProductos = document.getElementById("contenedor-productos");

for (const producto of listaProductos) {
    let column = document.createElement("div");
    column.className = "col-md-4 mt-3 ";
    column.id = `columna-${producto.id}`;
    column.innerHTML = `
    <div class="card">
        <div class="card-body">
        <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
        <p class="card-text">Precio: <b>${producto.precio}</b></p>
        <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
        </div>
    </div>`;

    contenedorProductos.append(column);
}

main();

