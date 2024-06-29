const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('blog');
const $l = document.querySelector('location');

async function displayUser(username) {
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(response);
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);

/* 
    Intenté modificar la función, la hice asíncrona porque tenía
    el await, pero no logré comprender como se usan las variables
    de $n, $b y $1.
    De hecho le cambié lo que está en los parentesis de los "querySelector"
    porque ví que tenian que ver con la manera de acceder a los datos, 
    pero aún así no supe utilizarlas.

    Pero ya no marca errores y creo que sí accede a los datos de "stolinsky":D

*/