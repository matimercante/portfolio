export async function getData (){
  const SPACE_ID = "8zznlw8afc8o";
  const API_KEY = "jWZ1ZGn0fCBtwnsinvRpKVbKDvukhkLHMej9UBNIqB0";
  const ENVIRONMENT = "master";
  const linkData = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${API_KEY}`;
  const linkAssets = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/assets?access_token=${API_KEY}`;

  const responseData = await fetch(linkData);
  const data = await responseData.json();
  const responseAssets = await fetch(linkAssets);
  const assetsData = await responseAssets.json();

  const allData = createData(data,assetsData);
  
  return allData}
  
  function createData(data,assetsData) {
    const services = [];
    const works = [];
    const assets = []
    
    for (let k = 0; k < data.items.length; k++) {
      const item = data.items[k];
      if (item.sys.contentType.sys.id == "serviceCard") {
        services.push(item.fields)}
        else {
          works.push(item.fields);
        }
      }
      
      for (let j=0; j<assetsData.items.length ; j++){
        const item = assetsData.items[j]
        assets.push(item.fields)
      }
      
      const response = {
        services: services,
        works: works,
        assets: assets
      }
      
  return response;
}