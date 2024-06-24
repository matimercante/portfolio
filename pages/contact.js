function componentContactPage (el) {
  const contentContactEl = document.createElement("section")
  contentContactEl.innerHTML = `
  <div class="contact__contenedor-principal">
  <div class="contact__contenedor-h1">
    <h1 class="h1-pages h1-footer">Escribinos</h1>
  </div>
  <div class="contact__contenedor-form"></div>
</div>
  `
  el.appendChild(contentContactEl)
}

import { getData } from "../components/getData.js"

async function main (){
  const allData = await getData()
  
  const body = document.querySelector ("body");
  componentMenu (body)

  const headerComponentEl = document.querySelector (".contact__header")
  componentHeader (headerComponentEl,allData.assets)

  const contactPagesComponentEl = document.querySelector(".contact");
  componentContactPage (contactPagesComponentEl)

  const contactFormComponentEl = document.querySelector(".contact__contenedor-form");
  componentContactForm (contactFormComponentEl)

  const footerComponentEl = document.querySelector(".footer");
  componentFooter (footerComponentEl,allData.assets)
}

main();


