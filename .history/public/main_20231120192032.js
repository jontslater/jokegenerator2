// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getRequest from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
  <button id="getjoke" type="button" class="btn btn-light">Light</button>

  <button id="getjoke2" type="button" class="btn btn-light">Light</button>`;
  console.warn('YOU ARE UP AND RUNNING!');
  document
    .querySelector('#getjoke')
    .addEventListener('click', () => {
    const payload = { name: 'YOUR NICKNAME' };
    getRequest(payload).then
    console.warn('You clicked that button!')});
  document
    .querySelector('#getjoke2')
    .addEventListener('click', () => console.warn('You clicked that button!'));

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
