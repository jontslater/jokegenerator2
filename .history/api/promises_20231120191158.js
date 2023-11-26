const jokeEndpoint = 'https://v2.jokeapi.dev/';

// const postEndpoint = 'https://in-class-promise-e-default-rtdb.firebaseio.com/';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
