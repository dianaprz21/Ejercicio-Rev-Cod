const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
// Corregí la manera de seleccionar la información que buscaba

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se necesitaba convertir la respuesta a json
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`; //Aquí se estaban usando comillas simples y las cambié a template literals
  }catch(err){
    handleError(err);
  }
//Agregué el try catch, así se evita querer llamarla en la línea 29

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Estaba mal escrita la variable $n
}

displayUser('stolinski');