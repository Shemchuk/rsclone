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
    template = `<h2 class='pause__title'>PAUSE MENU</h2>
    <div class='pause__content'>
    <button class='pause__btn pause__btn_resume' id='pause__btn_resume'>Resume</button>
    <button class='pause__btn pause__btn_menu' id='pause__btn_menu'>Menu</button>
    <button class='pause__btn pause__btn_settings' id='pause__btn_settings'>Settings</button>
    <button class='pause__btn pause__btn_player' id='pause__btn_player'>Player</button>`;
    pauseContainer.innerHTML = template;
    this.main.appendChild(pauseContainer);
    return this.main;
  }
}
