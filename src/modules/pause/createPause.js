// import Language from '../lang/Language';

export default class CreatePause {
  constructor() {
    this.main = document.querySelector('.main');
    // this.langObject = new Language();
    // this.lang = this.langObject.getCurrentLangObject().commandMenu;
  }

  init() {
    let template = '';
    const pauseContainer = document.createElement('div');
    pauseContainer.className = 'pause';
    template = `<div id="container">
    <div class="sign-wrap">
    <div class="sign">
    <div class="menu">
    <h2 class='menu-title menu-font'><p><a>PAUSE</a></p></h2>
    <div class='pause__content'>
    <button class='pause__btn pause__btn_player' id='pause__btn_player'>Player</button>
    <button class='pause__btn pause__btn_resume menu-button' id='pause__btn_resume'><p><a>Resume</a></p></button>
    <button class='pause__btn pause__btn_settings menu-button' id='pause__btn_settings'><p><a>Settings</a></p></button>
    <button class='pause__btn pause__btn_menu menu-button' id='pause__btn_menu'><p><a>Main menuenu</a></p></button>
    </div>
    </div>
    </div>
    </div>`;

    pauseContainer.innerHTML = template;
    this.main.appendChild(pauseContainer);
    return this.main;
  }
}
