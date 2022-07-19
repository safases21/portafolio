addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".btn-menu");
  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      const menuItens = document.querySelector(".menu-items");
      menuItens.classList.toggle("show");
    });
  }
});

addEventListener("DOMContentLoaded", () => {
  const inicio = document.querySelector(".Portafolio");
  const contacto = document.querySelector(".Contacto");
  const proyecto = document.querySelector(".Proyectos");
  if (inicio) {
    const sombraInicio = document.querySelector(".sombra-inicio");
    sombraInicio.classList.toggle("active");
  } else if (contacto) {
    const sombraContacto = document.querySelector(".sombra-contacto");
    sombraContacto.classList.toggle("active");
  } else if (proyecto) {
    const sombraProyecto = document.querySelector(".sombra-proyecto");
    sombraProyecto.classList.toggle("active");
  }
});
