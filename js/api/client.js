const URL = "http://silabuz-api-project.herokuapp.com";

const CLIENT = {
  get: async (path, headers = {}) => {
    // 1. Hacer Peticion
    const response = await fetch(URL + path, {
      headers,
    });
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // Validar la respuesta
    if (!response.ok) throw Error(response.statusText);
    // Extraer la información
    const json = await response.json();
    return json;
  },
};

export default CLIENT;
