function componentPortfolioWorks (el){
  const contentPortfolioWorksEl = document.createElement("section");
  contentPortfolioWorksEl.innerHTML=`
  <div class="portfolio__works__contenedor-principal">
  <div class="portfolio__works__card-contenedor"></div>
</div>
  `
  el.appendChild(contentPortfolioWorksEl)
}

function componentPortfolioWellcome (el,assets){
  const asset = assets.find(item => item.title === "traje-01")
  console.log(asset)
  const contentServicesWellcomeEl = document.createElement ("section")
  contentServicesWellcomeEl.innerHTML = `
  <div class="wellcome__contenedor-principal">
  <div class="h1-contenedor">
  <h1 class="h1">Nuestros</h1>
  <h1 class="h1 text-changeColor">Trabajos </h1>
  </div>
  <img src="${asset ? asset.file.url : ""}" alt="img-traje" class="wellcome__img" />
  
  </div>
  `
  el.appendChild(contentServicesWellcomeEl)
}

import { getData } from "../components/getData.js";

async function main (){
  const allData = await getData()
  console.log(allData)
  
  const body = document.querySelector ("body");
  componentMenu (body)
 
  const headerComponentEl = document.querySelector (".header")
  componentHeader (headerComponentEl,allData.assets)


  const wellcomeComponentEl = document.querySelector (".portfolio__wellcome");
  componentPortfolioWellcome (wellcomeComponentEl,allData.assets)

  const portfolioWorksComponentEl = document.querySelector (".portfolio__works");
  componentPortfolioWorks (portfolioWorksComponentEl)

  const workCardComponentEl = document.querySelector(".portfolio__works__card-contenedor")
  allData.works.map(item => componentCard (workCardComponentEl,item,allData.assets))

  const footerComponentEl = document.querySelector(".footer");
  componentFooter (footerComponentEl,allData.assets)
}

main();
