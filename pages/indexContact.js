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
