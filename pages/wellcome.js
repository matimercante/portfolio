function componentWellcome (el,assets) {
  const asset = assets.find(item => item.title === "traje-01")
  const contentWellcomeEl = document.createElement ("section")
  contentWellcomeEl.innerHTML = `
  <div class="wellcome__contenedor-principal">
    <div class="h1-contenedor">
      <h1 class="h1">Hola,</h1>
      <h1 class="h1 text-changeColor">Somos Ryūjin </h1>
    </div>
    <img src="${asset ? asset.file.url : ""}" alt="img-traje" class="wellcome__img" />
    
  </div>
  `
  el.appendChild(contentWellcomeEl)
}
