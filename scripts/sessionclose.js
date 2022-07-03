//cerrar sesion
let nombreUsuario = localStorage.getItem("usuario")
let ContraUsuario = localStorage.getItem("password")

let cerrarss = document.querySelector(".cerrarss")
cerrarss.addEventListener("click", ()=>{
    if(!!nombreUsuario && !!ContraUsuario){
        localStorage.removeItem("usuario")
        localStorage.removeItem("password")
        window.location.replace("../index.html")
    }
})
