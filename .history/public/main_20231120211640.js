// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <button id="getjoke" type="button" class="btn btn-light">Get A Joke</button>
  <div id='jokespot'></div>
  <div id='jokespot2'></div>`;
  console.warn('YOU ARE UP AND RUNNING!');
  document
    .querySelector('#getjoke')
    .addEventListener('click', () => {
      getRequest().then((data) => {
        renderToDom('#jokespot', data.setup);
        renderToDom('#jokespot2', data.delivery);
        console.warn(data.delivery);
      });
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
