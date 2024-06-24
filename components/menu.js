function componentMenu (el){
  const contentMenuEl = document.createElement ("div")
  contentMenuEl.innerHTML=`
  <div class="menu">
  <nav class="header__nav-mobile">
    <a href="./portfolio.html" class="header__link">Portfolio</a>
    <a href="./servicios.html" class="header__link">Servicios</a>
    <a href="./contact.html" class="header__link">Contacto</a>

  </nav>
  <button class="menu__button-close">X</button>
</div>
  `
  el.appendChild(contentMenuEl)
}