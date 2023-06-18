const boton = document.querySelector('#boton_expandir');
const cerrar = document.querySelector('#boton_cerrar');
const menu = document.querySelector('#menu_navegacion');

boton.addEventListener('click', ()=> {
    menu.classList.toggle("menu_expandido");
    menu.classList.toggle("menu_colapsado");

    document.querySelector('body').classList.toggle("body_expandido");
});

cerrar.addEventListener('click', ()=> {
    menu.classList.toggle("menu_expandido");
    menu.classList.toggle("menu_colapsado");

    document.querySelector('body').classList.toggle("body_expandido");
});