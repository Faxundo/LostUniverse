const boton = document.querySelector("#boton_expandir");
const menu = document.querySelector("#menu_navegacion");
const logo = document.querySelector("#lost_world");

const dropdown_boton = document.querySelectorAll(".dropdown_open");
const dropdown = document.querySelectorAll(".dropdown");

boton.addEventListener("click", () => {
  abrirNav();
});

lost_world.addEventListener("click", () => {
  menu.classList.toggle("menu_expandido");
  menu.classList.toggle("menu_colapsado");
  document.querySelector("body").classList.toggle("body_expandido");
});

for (let i = 0; i < dropdown_boton.length; i++) {
  dropdown_boton[i].addEventListener("click", () => {
    if (menu.classList.contains('menu_colapsado')) {
      abrirNav();
    }
    var dropdown_boton_actual = dropdown_boton[i];
    dropdown_boton_actual.classList.toggle("activo_boton");
    var dropdown_actual = dropdown[i];
    dropdown_actual.classList.toggle("activo");

  });
}

function abrirNav () {
    menu.classList.toggle("menu_expandido");
    menu.classList.toggle("menu_colapsado");
    document.querySelector("body").classList.toggle("body_expandido");
}
