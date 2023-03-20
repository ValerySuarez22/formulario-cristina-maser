// function validarCorreo(email) {
//     var expReg =
//       /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//       var esValido= expReg.test(email);
//       if(esValido==true){
//           alert("El email es valido")
//       }
//       else{
//           alert("El email NO es")
//       }
//   }

  
//   function init(ciudad) {
 
//     let select = document.createElement("select");
 
//     let option1 = document.createElement("option");
//     option1.setAttribute("value", "value1");
//     let option1Texto = document.createTextNode("opcion 1");
//     option1.appendChild(option1Texto);
 
//     let option2 = document.createElement("option");
//     option2.setAttribute("value", "value2");
//     let option2Texto = document.createTextNode("opcion 2");
//     option2.appendChild(option2Texto);
 
//     let option3 = document.createElement("option");
//     option3.setAttribute("value", "value3");
//     let option3Texto = document.createTextNode("opcion 3");
//     option3.appendChild(option3Texto);

//     let option4 = document.createElement("option");
//     option3.setAttribute("value", "value4");
//     let option3Texto = document.createTextNode("opcion 4");
//     option3.appendChild(option3Texto);
 
//     select.appendChild(option1);
//     select.appendChild(option2);
//     select.appendChild(option3);
 
//     document.body.appendChild(select);
     
// }
 
 
// window.onload = init;
 
 
 
//     let select = createSELECT(options);
 
//     document.body.appendChild(select);
 
// }
//  $(document).ready(function (telenofo) {

// var telefono = $("#campo_telefono")

// var expreg = /\d{9}/;

// if (expreg.test(telefono))
//     alert("El telefono es correcta");
// else
//     alert("El telefono NO es correcta"); 
// });

// // Variables
// const inputMarca = document.querySelector('#marca');
// const mensajeErrorMarcaCorto = "Muy corta. Dame un nombre con 4 o mas caracteres.";

// // Eventos
// inputMarca.addEventListener('input', () => {
//     // Quita el mensaje según escribes
//     inputMarca.setCustomValidity('');
//     // Comprueba si debe validarlo
//     inputMarca.checkValidity();
// });

// inputMarca.addEventListener('invalid', () => {
//     inputMarca.setCustomValidity(mensajeErrorMarcaCorto);
// });

const nombre = document.getElementById('nombre')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const enviar = document.getElementById('enviar')

function mivalidasion(){
    if (nombre.value ===''|| nombre.value == null) {
                    console.log('mensaje de prueba')
                    messages.push("el nombre es requerido")
                    alert('mensaje de prueba')
                } else{
                    messages.push("correcto")
                    console.log('mensaje correcto')
                }
    alert("se ha enviado el formulario") 
}
enviar.addEventListener("click", (e)=>{
    e.preventDefault()
    mivalidasion()
})


//     let messages = []
//     function funcionNombre (){
//         if (nombre.value ===''|| nombre.value == null) {
//         console.log('mensaje de prueba')
//         messages.push("el nombre es requerido")
//         alert('mensaje de prueba')
//     } else{
//         messages.push("correcto")
//         console.log('mensaje correcto')
//     }
// } 
// nombre.addEventListener('click', funcionNombre)

// if (messages.length > 0) {
// e.preventDefault()
// errorElement.innerText = messages.join(',')
// }
// });