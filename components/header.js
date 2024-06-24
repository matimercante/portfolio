function componentHeader(el,assets){

  const logo = assets.find(item => item.title === "logo");
  const contentHeaderEl = document.createElement ('header');
  contentHeaderEl.innerHTML = `
  <div class="contenedor-header">
    <div class="header__contenedor-logo">
      <a href="././index.html" class="link-logo">
        <img src="${logo ? logo.file.url : ''}" alt="logo" class="logo" />
      </a>
    </div>

    
    <button class="menu__button-open">
    <img src="./img/button-menu-01.png" alt="img-button" class="header__button-img">
    </button>
    <nav class="header__nav">
      <a href="./portfolio.html" class="header__link">Portfolio</a>
      <a href="./servicios.html" class="header__link">Servicios</a>
      <a href="./contact.html" class="header__link">Contacto</a>
    </nav>
  </div>`;
  el.appendChild(contentHeaderEl)

  const openButtonEl = document.querySelector(".menu__button-open");
  const closeButtonEl = document.querySelector(".menu__button-close");
  const menuEl = document.querySelector(".menu");
  
  if (openButtonEl && closeButtonEl && menuEl) {
    openButtonEl.addEventListener("click", () => {
      menuEl.style.display = "block";
      console.log("abierto");
      });
    closeButtonEl.addEventListener("click", () => {
      menuEl.style.display = "none";
      console.log("cerrado");
    });
  } else {
      console.error("One or more elements not found");
    };
}
