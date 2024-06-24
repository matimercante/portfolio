function componentFooter (el,assets){
const logo = assets.find (item => item.title ==="logo");

  const contentFooterEl = document.createElement ("footer")
  contentFooterEl.innerHTML = `
  <div class="footer__contenedor-principal">
  <div class="footer__contenedor-logo">
    <img src="${logo ? logo.file.url : ""}" alt="logo" class="logo" />
  </div>
  <div class="footer_contenedor-linkPages">
    <div class="footer__contenedor-page">
      <img src="./img/home.png" alt="home" class="footer__link-img" />
      <a href="./index.html" class="footer__link-pages">Home</a>
    </div>
    <div class="footer__contenedor-page">
      <img src="./img/user.png" alt="user-img" class="footer__link-img" />
      <a href="./servicios.html" class="footer__link-pages">Servicios</a>
    </div>
    <div class="footer__contenedor-page">
      <img src="./img/phone.png" alt="phone" class="footer__link-img" />
      <a href="./contact.html" class="footer__link-pages">Contacto</a>
    </div>
  </div>
  <div class="footer__contenedor-mediaLinks">
    <a
      target="_blank"
      href="https://www.linkedin.com/"
      class="footer__social-link"
      ><img src="./img/icons8-linkedin-50 (white).png" alt="linkedin"
    /></a>
    <a
      target="_blank"
      href="https://github.com/"
      class="footer__social-link"
      ><img src="./img/icons8-github-50 (white).png" alt="github"
    /></a>
    <a
      target="_blank"
      href="https://twitter.com/"
      class="footer__social-link"
      ><img src="./img/icons8-twitterx-50 (white).png" alt="twitter"
    /></a>
    </div>
  </div>
  `
  el.appendChild (contentFooterEl)
}