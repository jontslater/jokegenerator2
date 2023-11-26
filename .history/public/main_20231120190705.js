// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <button id="get-joke' type="button" class="btn btn-light">Light</button>

  <button id="get-joke2" type="button" class="btn btn-light">Light</button>`;
  console.warn('YOU ARE UP AND RUNNING!');
  document
    .querySelector('#get-joke')
    .addEventListener('click', () => console.warn('You clicked that button!'));
  document    
    .querySelector('#get-joke2')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
