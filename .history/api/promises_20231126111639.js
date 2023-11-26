const endpoint = 'https://v2.jokeapi.dev/joke/Any?format=json&safe-mode&type=twopart';
const getJokes = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

export default getJokes;
