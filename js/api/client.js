import STORAGE from "../utils/storage.js";
const URL = "https://silabuz-api-project.herokuapp.com";
const generateHeaders = ()=>{
  return {
    "Content-Type": "application/json",
    Authorization: STORAGE.has("token")? "Token " + STORAGE.get("token"):'',
  }
}
const CLIENT = {
  get: async (path) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path,{
      method: "GET",
      headers: generateHeaders()});
    // Validar la respuesta
    if (!response.ok) throw Error(response.statusText);
    // Extraer la información
    const json = await response.json();
    return json;
  },
  post: async (path, data) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path, {
      method: "POST",
      headers:generateHeaders(),
      body: JSON.stringify(data),
    });
    // Validar la respuesta
    if (!response.ok) 
      return response.text().then(text => { throw new Error(text) })
   
    // Extraer la información
    const json = await response.json();
    return json;
  },
  request: async (method,path,data={}) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path, {
      method: method,
      headers:generateHeaders(),
      body: JSON.stringify(data),
    });
    // Validar la respuesta
    if (!response.ok) 
      return response.text().then(text => { throw new Error(text) })

    // El metodo delete no devuelve ningun valor
    if(method == 'DELETE') return;

    // Extraer la información
    const json = await response.json();
    return json;
  },
};

export default CLIENT;
