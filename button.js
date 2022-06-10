let botonMail = document.getElementById("button");
let inputNombre = document.querySelector(".form__input-nombre");
let inputMail = document.querySelector(".form__input-mail");
let inputTexto = document.querySelector(".form__input--message");

botonMail.addEventListener("click", ()=>{
    if (inputNombre.value == false && inputMail.value == false && inputTexto.value == false){
        alert("Escriba los campos requeridos");
    }
    else{
     botonMail.classList.toggle("button--loading");
    } 
});

