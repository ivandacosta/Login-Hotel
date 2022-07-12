let productos;

const InsertarProductos = () =>{
    fetch("../json/kiosko.json")
    .then(respuesta => respuesta.json())
    .then(resultados => {
        producto=resultados;
        for(const producto of resultados){
            const ul = document.querySelector(".listado");
            const li = document.createElement("li");
        li.innerHTML =`<div class="imagenproductokiosko">
        <img src="${producto.img}" alt="">
        </div>
        <p>${producto.nombre}</p>
        <div class="pricebutton">
        <p>$${producto.precio}</p>
        <button type="button" class="btn btn-info" onClick=comprar(${producto.id})>agregar</button>
        </div>`

ul.append(li);
        }
        
        
    }).catch(error => {
        const ul = document.querySelector(".listado")
        ul.innerHTML = `<h1>No encontramos los productos, recargar la pagina</h1>`
    }).finally()
}

InsertarProductos()


let carrito = 0
function comprar (id) {
    const seleccion = document.querySelector(".carritoproductos")
    const li = document.createElement("li")
    let coincidencia = producto.find((element)=> element.id === id)
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

