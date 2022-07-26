let productos = [];

let formulario;
let inputNombre;
let inputCantidad;
let inputPrecio;
let tabla;
let cantidadTotal = 0
let precioTotal = 0

class Productos {
    constructor(nombre, cantidad, precio) {
    this.nombre = nombre.toUpperCase();
    this.cantidad = cantidad;
    this.precio = precio;
    }
}

function inicializarElementos() {
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("inputNombreProducto");
    inputCantidad = document.getElementById("inputCantidad");
    inputPrecio = document.getElementById("inputPrecio");
    tabla = document.getElementById("tablaProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let precio = parseFloat(inputPrecio.value);
    let cantidad = parseInt(inputCantidad.value);
    let producto = new Productos(nombre, cantidad, precio);
    cantidadTotal += cantidad
    precioTotal += precio
    console.log(producto)
    productos.push(producto);
    formulario.reset();

    limpiarTabla();
    agregarProductosTabla();
    almacenarProductosLocalStorage();
}

function agregarProductosTabla() {
    productos.forEach((producto) => {
    let filaTabla = document.createElement("tr");
    filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio}</td>`;
    tabla.tBodies[0].append(filaTabla);
    });
}

function limpiarTabla() {
    while (tabla.rows.length > 1) {
    tabla.deleteRow(1);
    }
}

function almacenarProductosLocalStorage() {
    localStorage.setItem("listaProductos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
    let productosAlmacenados = localStorage.getItem("listaProductos");
    if (productosAlmacenados !== null) {
    productos = JSON.parse(productosAlmacenados);
    }
}

function getCantidadTotal(){
    cantidadTotal > 0 ? Swal.fire(`La cantidad de productos es de: ${cantidadTotal}`) : Swal.fire({
        icon: 'error',
        text: 'Todavia no se registran productos!',
    })
}

function getPrecioTotal(){
    precioTotal > 0 && Swal.fire(`El valor total de productos es: ${precioTotal}`)
}


function registro(){
    Swal.fire({
        icon: 'success',
        text: 'Producto registrado correctamente!',
    })
}

function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerProductosLocalStorage();
    agregarProductosTabla();
}

main();

let boton1 = document.getElementById("btnProductos");
boton1.addEventListener("click", getCantidadTotal)

let boton2 = document.getElementById("btnPrecio");
boton2.addEventListener("click", getPrecioTotal)

let boton3 = document.getElementById("registrar");
boton3.addEventListener("click", registro)
