// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import renderToDom from '../utils/renderToDom';
import getJokes from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <button id="getjoke" type="button" class="btn btn-light">Get A Joke</button>
  <div id='jokespot'></div>
  <div id='jokespot2'></div>`;
  document
    .querySelector('#getjoke')
    .addEventListener('click', () => {
      getJokes().then((data) => {
        console.warn(data);
        renderToDom('#jokespot', data.setup);
        renderToDom('#jokespot2', data.delivery);
      });
    });
  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
