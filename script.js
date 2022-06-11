//MENU-HAMBURGUESA
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.addEventListener("click", ()=>{
    nav.classList.toggle("nav-translate"); 
    if(nav.classList.contains("nav-translate")){
        menu.style.backgroundImage = "url('/img/icons/x.svg')";
    }
    else if(nav.classList.contains("nav")){
        menu.style.backgroundImage = "url('/img/icons/menu-hambuerguesa.svg')";
    }
});

window.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(nav.classList.contains("nav-translate") && e.target != nav && e.target != menu){
        nav.classList.toggle("nav-translate");
        if(nav.classList.contains("nav-translate")){
            menu.style.backgroundImage = "url('/img/icons/x.svg')";
        }
        else if(nav.classList.contains("nav")){
            menu.style.backgroundImage = "url('/img/icons/menu-hambuerguesa.svg')";
        }
    }
});

//LOADER
window.addEventListener("load", ()=>{
    console.log("Entre");
    document.getElementById("loader").classList.toggle("loader2");
});


