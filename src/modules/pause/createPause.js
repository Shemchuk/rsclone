import { generatePausePlayer } from '../backgroundSound/createBackgroundSound';
import Language from '../lang/Language';

export default class CreatePause {
  constructor() {
    this.main = document.querySelector('.main');
  }

  init() {
    const langObject = new Language();
    const lang = langObject.getCurrentLangObject().pauseMenu;

    let template = '';
    const pauseContainer = document.createElement('div');
    pauseContainer.className = 'pause';
    template = `<div id="container">
    <div class="sign-wrap">
    <div class="sign">
    <div class="menu">
    <h2 class='menu-title menu-font'><p><a>${lang.gamePause}</a></p></h2>

    <div class='pause__content'>

    <div class='player pause__player'></div>
    <button class='pause__btn pause__btn_resume menu-button' id='pause__btn_resume'><p><a>${lang.gameResume}</a></p></button>
    <button class='pause__btn pause__btn_menu menu-button' id='pause__btn_menu'><p><a>${lang.toMainMenu}</a></p></button>

    </div>

    </div>
    </div>
    </div>
    </div>`;

    pauseContainer.innerHTML = template;
    this.main.appendChild(pauseContainer);
    generatePausePlayer();
    return this.main;
  }
}
