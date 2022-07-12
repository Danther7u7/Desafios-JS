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

var precioTotal = 0

function main() {
    if (precioTotal > 0){
        alert("El precio total de los productos es: " + "$" + precioTotal)
        console.log("El precio total de los productos es: " + "$" + precioTotal)
    }
    else{alert("El precio total no se pudo calcular correctamente")}
}

const contenedorProductos = document.getElementById("contenedor-productos");

function agregarProducto() {

    if (document.getElementById("categoria").value == "camiseta"){
        const listaProductos = [];
        let nombre = document.getElementById("nombre").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;
        precioTotal += parseInt(precio)
        let productoARegistrar = new Camiseta(nombre,cantidad,precio);
        console.log(productoARegistrar)
        listaProductos.push(productoARegistrar)
        for (const producto of listaProductos) {
            let column = document.createElement("div");
            column.className = "col-md-4 mt-3 ";
            column.id = `columna-${producto.id}`;
            column.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                </div>
            </div>`;
            contenedorProductos.append(column);
        }

    }else if (document.getElementById("categoria").value == "pantalon"){
        const listaProductos = [];
        let nombre = document.getElementById("nombre").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;
        precioTotal += parseInt(precio)
        let productoARegistrar = new Pantalon(nombre,cantidad,precio);
        console.log(productoARegistrar)
        listaProductos.push(productoARegistrar)
        for (const producto of listaProductos) {
            let column = document.createElement("div");
            column.className = "col-md-4 mt-3 ";
            column.id = `columna-${producto.id}`;
            column.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                </div>
            </div>`;
            contenedorProductos.append(column);
        }

    }else if (document.getElementById("categoria").value == "gorro"){
        const listaProductos = [];
        let nombre = document.getElementById("nombre").value;
        let cantidad = document.getElementById("cantidad").value;
        let precio = document.getElementById("precio").value;
        precioTotal += parseInt(precio)
        let productoARegistrar = new Gorro(nombre,cantidad,precio);
        console.log(productoARegistrar)
        listaProductos.push(productoARegistrar)
        for (const producto of listaProductos) {
            let column = document.createElement("div");
            column.className = "col-md-4 mt-3 ";
            column.id = `columna-${producto.id}`;
            column.innerHTML = `
            <div class="card mb-3">
                <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio: <b>${producto.precio}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                </div>
            </div>`;
            contenedorProductos.append(column);
        }
    }
}

let boton1 = document.getElementById("agregar");
boton1.addEventListener("click", agregarProducto)

let boton2 = document.getElementById("boton");
boton2.addEventListener("click", main)

