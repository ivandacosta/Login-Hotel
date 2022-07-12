class AgregarCarrito{
    constructor (el){
        this.nombre = el.nombre
        this.precio = el.precio
    }
}
let carrito = 0


// const productos = [
//     {
//         id: 1,
//         nombre: "Pizza grande",
//         img: "../img/pizza.jpg",
//         precio: 1400,
//     },
//     {
//         id: 2,
//         nombre: "Milanesa con guarnicion",
//         img: "../img/milanesa.jpg",
//         precio: 1300,
//     },
//     {
//         id: 3,
//         nombre: "Ensalada cesar",
//         img: "../img/ensalada.jpg",
//         precio: 1000,
//     },
//     {
//         id: 4,
//         nombre: "Tacos X3",
//         img: "../img/tacos.jpg",
//         precio: 1150,
//     },
//     {
//         id: 5,
//         nombre: "Asado con guarnicion",
//         img: "../img/asado.jpg",
//         precio: 1600,
//     },
//     {
//         id: 6,
//         nombre: "Helado",
//         img: "../img/helado.jpg",
//         precio: 700,
//     },
    
// ];
let productos;

const InsertarProductos = () =>{
    fetch("../json/restaurante.json")
    .then(respuesta => respuesta.json())
    .then(resultados => {
        productos=resultados;
        for(const producto of resultados){
            const ul = document.querySelector(".listado")
    const li = document.createElement("li")
    li.innerHTML = `<div class="imagenproductoresto">
    <img src="${producto.img}" alt="">
</div>
<p>${producto.nombre}</p>
<div class="pricebutton">
    <p>${producto.precio}</p>
    <button id="add1" onClick=comprar(${producto.id})>agregar</button>
</div>`
ul.append(li)
        }
        
        
    })
}

InsertarProductos();

// productos.forEach(producto =>{
//     const ul = document.querySelector(".listado")
//     const li = document.createElement("li")
//     li.innerHTML = `<div class="imagenproductoresto">
//     <img src="${producto.img}" alt="">
// </div>
// <p>${producto.nombre}</p>
// <div class="pricebutton">
//     <p>${producto.precio}</p>
//     <button id="add1" onClick=comprar(${producto.id})>agregar</button>
// </div>`
// ul.append(li)
// })

function comprar (id){
    const listado = document.querySelector(".carritoresto")
    const li = document.createElement("li");
    let coincidencia = productos.find((element)=> element.id === id)
    li.innerHTML = `<img src="${coincidencia.img}" alt="">
    <p>$${coincidencia.precio}</p>
    `
    carrito+=coincidencia.precio
    Swal.fire({
        position: 'center',
        icon: 'success',
        html: `<h1 class="swal">Agregado al carrito</h1>`,
        showConfirmButton: false,
        timer: 1000
        })
    listado.append(li)

    let rectcontent = document.querySelector(".rectcontent")
    
    rectcontent.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
    <h2>Total $${carrito}</h2>
    `
}

