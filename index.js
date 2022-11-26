let btn_menu = document.querySelector(".btn-menu")
let menu_principal = document.querySelector(".nav-tlf-principal")
let equis =  document.querySelector("#equis")


btn_menu.addEventListener("click", () =>{
    menu_principal.style.display = "block"
    btn_menu.style.display = "none"
})

equis.addEventListener("click", () => {
    menu_principal.style.display = "none"
    btn_menu.style.display = "block"
})


 /*   if (menu_principal.style.display = "block") {
    btn_menu.style.display = "none"
} else {
    btn_menu.style.display = "block"
} */

 