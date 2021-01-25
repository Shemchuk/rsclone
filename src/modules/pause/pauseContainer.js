import Language from '../lang/Language';

const langObject = new Language();
const lang = langObject.getCurrentLangObject().game;

export default class CreatePause {
  constructor() {
    this.sign = document.querySelector('.menu #container .sign-wrap .sign');
    this.langObject = new Language();
    this.lang = this.langObject.getCurrentLangObject().commandMenu;
  }

  init() {
    let template = '';
    const pauseContainer = document.createElement('div');
    pauseContainer.className = 'pause-wrapper';
    template = `<h2 class="pause__title">PAUSE MENU</h2>
    <div class="pause__selections">
    <button class="pause__resume">Resume</button>
    <button class="pause__menu">Menu</button>
    <button class="pause__settings">Settings</button>
    <div class="pause__player">Player</div>`;
    pauseContainer.innerHTML = template;
    this.sign.appendChild(pauseContainer);
    return this.sign;
  }
}
