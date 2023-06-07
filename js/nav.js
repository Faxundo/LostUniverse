const boton = document.querySelector('#boton_expandir');
const menu = document.querySelector('#menu_navegacion');

boton.addEventListener('click', ()=> {
    menu.classList.toggle("menu_expandido");
    menu.classList.toggle("menu_colapsado");
    console.log("dea");

    document.querySelector('body').classList.toggle("body_expandido");
});