import { getData } from "../components/getData.js";

async function main (){
  const allData = await getData();
  
  const body = document.querySelector ("body");
  componentMenu (body)
  
  const headerComponentEl = document.querySelector (".header")
  componentHeader (headerComponentEl,allData.assets)

  const wellcomeComponentEl = document.querySelector (".wellcome");
  componentWellcome (wellcomeComponentEl,allData.assets)
  
  const presentationComponentEl = document.querySelector (".presentation");
  componentPresentation (presentationComponentEl,allData.assets)
  
  const indexServicesComponentEl = document.querySelector (".services");
  componentIndexServices (indexServicesComponentEl)
  
  const servicesCardComponentEl = document.querySelector (".services__card-contenedor");
  allData.services.map(item => componentCard (servicesCardComponentEl,item,allData.assets))  
  

  const contactPagesComponentEl = document.querySelector(".contact");
  componentContactPage (contactPagesComponentEl)
  
  const contactFormComponentEl = document.querySelector(".contact__contenedor-form");
  componentContactForm (contactFormComponentEl)
  
  const footerComponentEl = document.querySelector(".footer");
  componentFooter (footerComponentEl,allData.assets)
  
}

main();

