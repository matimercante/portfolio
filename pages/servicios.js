function componentServices (el){
  const contentServicesEl = document.createElement("section");
  contentServicesEl.innerHTML=`
  <div class="services__contenedor-principal">
  <div class="services__card-contenedor">
  </div>
</div>
  `
  el.appendChild(contentServicesEl)
}

function componentServicesWellcome (el,assets){
  const asset = assets.find(item => item.title === "traje-01")
  const contentServicesWellcomeEl = document.createElement ("section")
  contentServicesWellcomeEl.innerHTML = `
  <div class="wellcome__contenedor-principal">
    <div class="h1-contenedor">
      <h1 class="h1">Nuestros</h1>
      <h1 class="h1 text-changeColor">Servicios </h1>
    </div>
    <img src="${asset ? asset.file.url : ""}" alt="img-traje" class="wellcome__img" />
    
  </div>
  `
  el.appendChild(contentServicesWellcomeEl)
}

import { getData } from "../components/getData.js";

async function  main (){
  const allData = await getData()

  const body = document.querySelector ("body");
  componentMenu (body)
  
  const headerComponentEl = document.querySelector (".header")
  componentHeader  (headerComponentEl,allData.assets)

  const wellcomeComponentEl = document.querySelector (".services__wellcome");
  componentServicesWellcome (wellcomeComponentEl,allData.assets)

  const servicesComponentEl = document.querySelector (".services");
  componentServices (servicesComponentEl)

  
  const servicesCardComponentEl = document.querySelector (".services__card-contenedor");
  console.log(allData.services)
  allData.services.map(item => componentCard (servicesCardComponentEl,item,allData.assets))

  const footerComponentEl = document.querySelector(".footer");
  componentFooter (footerComponentEl,allData.assets)
}

main();

// (function (){
//   const openButtonEl = document.querySelector(".menu__button-open");
//   const closeButtonEl = document.querySelector(".menu__button-close")
//   const menuEl = document.querySelector(".menu")
  
//   openButtonEl.addEventListener("click",() => {
//     menuEl.style.display= "inherit";
//     console.log("abierto")
//   })
  
//   closeButtonEl.addEventListener("click",()=>{
//     menuEl.style.display= "";
//     console.log("cerrado")
//   })
// })();


{/* <h1 class="h1-pages">
Mis <span class="text-changeColor">Servicios</span>
</h1> */}