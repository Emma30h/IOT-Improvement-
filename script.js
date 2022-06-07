let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.addEventListener("click", ()=>{
    nav.classList.toggle("nav-translate"); 
});

window.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(nav.classList.contains("nav-translate") && e.target != nav && e.target != menu){
        nav.classList.toggle("nav-translate");
    }
});

window.addEventListener("load", ()=>{
    console.log("Entre");
    document.getElementById("loader").classList.toggle("loader2");
});

