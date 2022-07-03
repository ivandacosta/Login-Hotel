const productos = [
    {
        id: 1,
        nombre: "Alfajor X2",
        img: "../img/alfajor.jpg",
        precio: 500,
    },
    {
        id: 2,
        nombre: "Cigarrillos",
        img: "../img/cigarrillos.jpg",
        precio: 305,
    },
    {
        id: 3,
        nombre: "Golosinas 200g",
        img: "../img/golosinas.jpg",
        precio: 400,
    },
    {
        id: 4,
        nombre: "Yogurt crema",
        img: "../img/yogurt.jpg",
        precio: 335,
    },
    {
        id: 5,
        nombre: "Cocacola",
        img: "../img/coca.jpg",
        precio: 250,
    },
    {
        id: 6,
        nombre: "Agua mineral",
        img: "../img/agua.jpg",
        precio: 230,
    },
]

productos.forEach(productos =>{
    const ul = document.querySelector(".listado");
    const li = document.createElement("li");
    li.innerHTML =`<div class="imagenproductokiosko">
    <img src="${productos.img}" alt="">
</div>
<p>${productos.nombre}</p>
<div class="pricebutton">
    <p>$${productos.precio}</p>
    <button type="button" class="btn btn-info" onClick=comprar(${productos.id})>agregar</button>
</div>`

ul.append(li);

});

let carrito = 0
function comprar (id) {
    const seleccion = document.querySelector(".carritoproductos")
    const li = document.createElement("li")
    let coincidencia = productos.find((element)=> element.id === id)
    li.innerHTML = `<img src="${coincidencia.img}" alt="">
    <p>$${coincidencia.precio}</p>`
    Swal.fire({
        position: 'center',
        icon: 'success',
        html: `<h1 class="swal">Agregado al carrito</h1>`,
        showConfirmButton: false,
        timer: 1000
    })
    seleccion.append(li)
    
    let rectcontent = document.querySelector(".rectcontent")
    
    carrito+=coincidencia.precio
    rectcontent.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>
    <h2>Total $${carrito}</h2>
    `
}

