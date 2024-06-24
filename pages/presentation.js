function componentPresentation (el,assets){
  const asset = assets.find(item => item.title ==="presentation-02")
  const contentPresentationEl = document.createElement ("section")
  contentPresentationEl.innerHTML = `
    <div class="presentation__contenedor-principal">
      <div class="presentation__contenedor-texto">
        <h1 class="h1-pages">Nosotros</h1>
        <p class="text">Lorem ipsl quisquam doloribus veniam ipt quis explicabo modi eos quo minima earum distinctio impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, qui. Incidunt, vel quisquam doloribus veniam ipsam ipsa est 
        </p>
        </div>
        <div class="presentation__contenedor-img">  
          <img src="${asset ? asset.file.url : ""}" alt="me" class="presentation__img" />
        </div>
    </div>
  `

  el.appendChild (contentPresentationEl)
}