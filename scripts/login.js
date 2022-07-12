
const $btnSignIn = document.querySelector(".sign-in-btn"),
      $btnSignUp = document.querySelector(".sign-up-btn"),
      $signUp = document.querySelector(".sign-up"),
      $signIn = document.querySelector(".sign-in");


      document.addEventListener("click", e => {
        if(e.target === $btnSignIn || e.target === $btnSignUp){
            $signIn.classList.toggle("active");
            $signUp.classList.toggle("active")
        }
      })

      
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

class Usuario{
    constructor(user, pass){
        this.user = user
        this.pass = pass
    }
}


let newUsuario = document.getElementById("rusername")
let newPassword = document.getElementById("rpassword")
let enviarDatos = document.getElementById("rsend")
let avisoUsuario = document.querySelector(".cuenta-gratis")
let userpass;



enviarDatos.addEventListener("click", (e) => {
    e.preventDefault
    if(newUsuario.value !== "" && newPassword.value !== ""){
        userpass = new Usuario(newUsuario, newPassword)
        Toast.fire({
            icon: 'success',
            html: '<h1 class="toast">Registro exitoso</h1>'
          })
        avisoUsuario.innerHTML = `⚠️Ahora debes iniciar sesion⚠️` //Crear un efecto
    }else{
        Toast.fire({
            icon: 'warning',
            html: '<h1 class="toast">No dejes espacios!</h1>'
          })
        avisoUsuario.innerHTML = `❎No debes dejar espacios❎`
    }
})



let elUsername = document.getElementById("username")
let elPassword = document.getElementById("password")
let ingresar = document.getElementById("send")
let avisoError = document.querySelector(".avisoerror")

let nombreUsuario = localStorage.getItem("usuario")
let ContraUsuario = localStorage.getItem("password")

ingresar.onclick = () =>{
    if(newUsuario.value === elUsername.value && newPassword.value === elPassword.value){
        nombreUsuario = elUsername.value
        ContraUsuario = elPassword.value
        Toast.fire({
            icon: 'success',
            html: '<h1 class="toast">Login exitoso</h1>'
          })
        localStorage.setItem("usuario", elUsername.value)
        localStorage.setItem("password", elPassword.value)
        setInterval(() => {
            window.location.replace("./pages/menu.html")   
        }, 3000);
         
    }else{
        Toast.fire({
            icon: 'warning',
            html: '<h1 class="toast">Datos incorrectos</h1>'
          })
        avisoError.innerHTML = `⚠️DATOS INCORRECTOS⚠️`
    }
}

const redireccionar = () =>{
    if(!!nombreUsuario && !!ContraUsuario){
            window.location.replace("./pages/menu.html")   
    }
}



redireccionar();
