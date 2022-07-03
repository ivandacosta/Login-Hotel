let username1
let passdefined
let canastaResto = [""]
let canastaKiosko = [""]
const turno = ["N°001", "N°002", "N°003", "N°004", "N°005", "N°006", "N°007", "N°008", "N°009", "N°010"]
const turnoHorario = ["14HS", "15HS", "16HS", "17HS", "18HS", "19HS", "20HS", "21HS"]

class usuario {
    constructor(){
        this.usuario = function () {
            prompt("Ingrese su usuario:")
        }
        this.passdef = function (){
            prompt("Ingrese la contraseña:")
        }
    }
}


//REGISTRO DE USUARIO
const register = () => {
    for (let i = 2; i >= 0; i--) {
        username1 = prompt("Ingrese su usuario: ");
        passdefined = prompt("Ingrese su contraseña: ");
        if (username1 !== "" && passdefined !== "") {
            alert(`Creaste el usuario: ${username1}`);
            break;
        } else {
            alert(`No dejes espacios, Tienes ${i} intentos`);
        }
    }

}

//LOGIN
const login = () => {
    for (let i = 2; i >= 0; i--) {
        usuario = prompt("Ingrese su usuario:");
        password = prompt("Ingrese su contraseña");
        if (usuario === username1 && password === passdefined) {
            alert(`Bienvenido ${usuario}`);
            logueado();
        } else {
            alert(`Datos incorrectos, Tienes ${i} intentos`);
        }
    }


}

//GIMNASIO
const gimnasio = () => {
    asignado = Number(prompt(`
   1) Asignar turno
   2) Volver atras 
   `));
    switch(asignado){
        case 1:{
            AsignarTurno = Math.round(Math.random() * 9);
            AsignarHorario = Math.round(Math.random() * 7);
            alert(`Tienes el turno ${turno[AsignarTurno]} a las ${turnoHorario[AsignarHorario]}`)
            gimnasio();
        }
        case 2:{
            logueado();
        }
    }
}


//KIOSKO
const kiosko = () => {
    const menukiosko = [
        { producto: "LECHE", precio: "$150" },
        { producto: "YOGURT", precio: "$205" },
        { producto: "ALFAJOR", precio: "$200" },
        { producto: "CIGARRILLOS", precio: "$250" },
        { producto: "GILLETE", precio: "$160" },
        { producto: "PRESERVATIVOS", precio: "$305" },
    ]
    valorkiosko = prompt(`
    ##PRODUCTOS###
    (LECHE - YOGURT - ALFAJOR - CIGARRILOS - GILLETE - PRESERVATIVOS)

    ATENCION!!
    Escriba VOLVER para retroceder del menu o REVISAR para mirar el pedido.

    `);


    switch (valorkiosko) {
        
        case "VOLVER": {
            logueado();
        }
        case "REVISAR": {
            alert(`Tienes en la canasta ${canastaKiosko}`);
            kiosko();
        }
        case "LECHE": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Leche")
            kiosko();
        }
        case "YOGURT": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Yogurt")
            kiosko();
        }
        case "ALFAJOR": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Alfajor")
            kiosko();
        }
        case "CIGARRILLOS": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Cigarrillos")
            kiosko();
        }
        case "GILLETE": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Gillete")
            kiosko();
        }
        case "PRESERVATIVOS": {
            const elementoKiosko = menukiosko.find(fresto => fresto.producto === valorkiosko);
            alert(`Seleccionaste ${elementoKiosko.producto} Valor ${elementoKiosko.precio}`);
            canastaKiosko.push("Preservativos")
            kiosko();
        }
    }


}


//RESTAURANTE
const restaurante = () => {

     const resto = [
         { producto: "MILANESA", precio: "$600" },
         { producto: "PIZZA", precio: "$1000" },
         { producto: "ÑOQUIS", precio: "$660" },
         { producto: "CAFE", precio: "$300" },
         { producto: "MEDIALUNA", precio: "$50" },
         { producto: "TIRAMISU", precio: "$550" },
     ]
    valorResto = prompt(`
    ##Platos del dia###
    (MILANESA - PIZZA - ÑOQUIS - CAFE - MEDIALUNA - TIRAMISU)
    
    ATENCION!!
    Escriba VOLVER para retroceder del menu o REVISAR para mirar el pedido.

    `);


    switch (valorResto) {
        case "VOLVER": {
            logueado();
        }
        case "REVISAR": {
            alert(`Tienes en la canasta${canastaResto}`)
            restaurante();
            break;
        }
        case "MILANESA": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Milanesa")
            restaurante();
        }
        case "PIZZA": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Pizza")
            restaurante();
        }
        case "ÑOQUIS": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Ñoquis")
            restaurante();
        }
        case "CAFE": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Cafe")
            restaurante();
        }
        case "MEDIALUNA": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Medialuna")
            restaurante();
        }
        case "TIRAMISU": {
            const elementoResto = resto.find(fkiosko => fkiosko.producto === valorResto);
            alert(`Seleccionaste ${elementoResto.producto} Valor ${elementoResto.precio}`)
            canastaResto.push("Medialuna")
            restaurante();
        }
    }

}


//LOGUEO EXITOSO
const logueado = () => {
    
        menu = Number(prompt(`
        ##Bienvenido huesped ${username1}
    1)Kiosko
    2)Restaurante
    3)Turno Gimnasio (PISO 5)
    4) Salir
    `))
    // 3)Reserva gimnasio (PISO 5)
    switch (menu) {
        case 1: {
            kiosko();
        }
        case 2: {
            restaurante();
        }
        case 3:{
            gimnasio();
        }
        case 4:{
            break;
        }
    }
    
}


//MENU 
do {

    bienvenido = Number(prompt(`
    ##Hotel Coder##
    1)Registro
    2)Login
    3)Salir
    `));

    switch (bienvenido) {
        case 1: {
            register();
            break;
        }
        case 2: {
            login();
            break;
        }
        case 3: {
            break;
        }
    }
} while (bienvenido !== 3)