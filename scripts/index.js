/* Saludo de bienvenida */

alert("¡Bienvenidxs a nuestra tienda de mascotas, M&T!");

/* Inicio del Simulador. Comprobando si el usuario está registrado o no. */

let usuario = prompt("Hola! ¿Tienes un usuario registrado?");
let nuevoUsuario = "";

if (usuario.toLowerCase() === "si") {  // Convertimos a minúsculas para hacer la comparación insensible a mayúsculas
    console.log("Ok!");

} else if (usuario.toLowerCase() === "no") {
    let registrarte = prompt("Ok, ¿quieres registrarte?");

    if (registrarte.toLowerCase() === "si") {  
        nuevoUsuario = prompt("Por favor, elige tu nombre de usuario. Debe tener al menos 8 caracteres");
        if (nuevoUsuario.length >= 8) {
            alert("Tu usuario ha sido registrado exitosamente como: " + nuevoUsuario);
        } else {
            alert("El nombre de usuario debe tener al menos 8 caracteres. Inténtalo de nuevo");
        }
    } else {
        alert("Entendido, no te registrarás por ahora.");
    }
}

/* Se pregunta al usuario si desea realizar una compra. 
Caso afirmativo, procedemos.. de lo contrario, fin del programa.
Entonces preguntamos qué tipo de compra y, por último el articulo que desea llevar. */

let compra = prompt("¿Te gustaría realizar una compra en nuestra tienda M&T? (si / no)");

function reIntentoDeCompra (){
if (compra.toLowerCase() === "si"){
    alert("Excelente!");
    
    let tipoDeCompra;

    for (let intentos = 3; intentos > 0; intentos--) {
        tipoDeCompra = prompt("¿Qué tipo de compra quisieras realizar: perros, gatos o nuevos productos?").toLowerCase();

    switch (tipoDeCompra){
        case "perros":
            alert("Ok, tu compra será de perros");
            intentos = 0;

            let accesorioP = prompt("¿Necesitas un collar o una cucha, para tu perro?");
        
            if (accesorioP === "collar") {
                 alert("Has elegido un collar.");
            } else if (accesorioP === "cucha") {
                 alert("Has elegido una cucha.");
            } else {
            alert("Opción inválida para accesorios.");
            }
            break;
            
        case "gatos":
            alert("Ok, tu compra será de gatos");
            intentos = 0;

            let accesorioG = prompt("¿Necesitas piedritas sanitarias o shampoo, para tu gato?");
        
            if (accesorioG === "piedritas sanitarias") {
                 alert("Has elegido piedritas sanitarias.");
            } else if (accesorioG === "shampoo") {
                 alert("Has elegido un shampoo.");
            } else {
            alert("Opción inválida para accesorios.");
            }
            break;

        case "nuevos productos":
            alert("Ok, tu compra será de nuevos productos");
            intentos = 0;

            let accesorioNP = prompt("¿Necesitas balanceado para perros, balanceados para gatos o juguetes?");
        
            if (accesorioNP === "balanceado para perros") {
                 alert("Has elegido balanceado para perros.");
            } else if (accesorioNP === "balanceados para gatos") {
                 alert("Has elegido un balanceados para gatos.");
            } else if (accesorioNP === "juguetes") {
                alert("Has elegido juguetes.");
            } else {
            alert("Opción inválida para accesorios.");
            }
            break;

        default:
            alert("Compra inválida. Vuelve a intentarlo");
            break;
        }
    } 

} else if (compra.toLowerCase() === "no"){
    alert("De acuerdo, te esperamos en tu próxima visita");

} else if (compra === ""){
    prompt("Inténtalo de nuevo. Dinos por favor: si o no");
    while (compra.toLowerCase() !== "si" && compra.toLowerCase() !== "no"){
        alert("Tu respuesta no es válida");
        compra = prompt("Repite tu respuesta, si o no");
    } if (compra === "si"){
        reIntentoDeCompra();
    }
} 
compra = prompt("¿Te gustaría realizar otra en nuestra tienda M&T? (si / no)");

    if (compra === "si") {
    reIntentoDeCompra ()
    } else {
    alert("De acuerdo, te esperamos en tu próxima visita");
}
}
reIntentoDeCompra ();

/* En base a las preferencias que nos dio el usuario, le vamos a hacer tres últimas peticiones:
1° conocer la cantidad de artículos que desea llevar,
2° preguntarle, si prefiere un envio a domicilio o retira en nuestros locales,
3° por último, conocer el medio pago de su preferencia. */

let numDeArticulos = +prompt("Cuantos artículos deseas llevar? Puedes elegir entre 1 y 5 unidades por compra");

if (numDeArticulos < 6 && numDeArticulos !== 0) {
    console.log("Has comprado " + numDeArticulos + " artículos. Gracias!");
} else {
    console.log("Operación inválida, vuelve a intentarlo.");
}

let retiroOenvio = prompt("Por favor, indicanos tu preferencia para recibir tu compra: Local / Envio ");
while (retiroOenvio.toLowerCase() !== "local" && retiroOenvio.toLowerCase() !== "envio"){
    alert("Tu respuesta no es válida");
    retiroOenvio = prompt("Por favor, reiterá tu respuesta: Local o Envio");
    console.log("Ok, tu elección es " + retiroOenvio);
}

let formaDePago = prompt("¿Cómo quisieras abonar tu compra? Puedes elegir entre: efectivo o tarjeta de crédito");

let tipoDePago;
for (let i = 3; i > 0; i--) {
    tipoDePago = prompt("¿Cómo quisieras abonar tu compra? Puedes elegir entre: efectivo o tarjeta de crédito").toLowerCase();
    
    switch (tipoDePago.toLowerCase()){
    case "efectivo":
        alert("Tu medio de pago elegido es: Efectivo");
        i = 0;
        break;
    case "tarjeta de credito":
        alert("Tu medio de pago elegido es: Tarjeta de credito");
        i = 0;
        break;
    default:
        alert("Ingresa nuevamente, tu medio de pago elegido");
        break;
}
}

alert("¡¡Muchas gracias por elegir nuestra tienda M&T, esperamos volver a verte pronto!!")