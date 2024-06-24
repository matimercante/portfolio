function componentCard (el,params,assets){
  const scrImg = assets.find(item => item.title === "servicesCardImg")
  const cardEl = document.createElement("div")
  cardEl.innerHTML = `
    <div class="contenedor-card">
      <img src="${scrImg ? scrImg.file.url : ""}" alt="" class="card__img" />
      <h2 class="card__h2">${params ? params.title : ""}</h2>
      <p class="card__text">${params ? params.descripcion.content[0].content[0].value : ""}</p>
    </div>`
el.appendChild(cardEl)}
