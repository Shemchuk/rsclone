import Menu from '../Menu';
import BackgroundSound from '../backgroundSound/backgroundSound';

export default class Pause {
  constructor() {
    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.resumeBtn = document.querySelector('.pause__btn_resume');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    this.settingsBtn = document.querySelector('.pause__btn_settings');

    this.backgroundSound = new BackgroundSound();
    this.menu = new Menu();
  }

  continueGame() {
    setTimeout(() => {
      this.pause.classList.add('hide-pause');
    }, 1000);
  }

  showSettings() {
    // this.main.innerHTML = '';
    this.menu.loadSettingsFromLocalStorage();
    this.menu.slideAnimationMethod();

    setTimeout(() => {
      this.menu.hideMenu('main-menu');
      this.menu.showMenu('settings-menu');
    }, 1000);
  }

  showMenu() {
    // this.main.innerHTML = '';
    setTimeout(() => {
      this.menu.init();
    }, 1000);
  }

  init() {
    this.backgroundSound.init();

    this.resumeBtn.addEventListener('click', () => {
      return this.continueGame();
    });
    this.menuBtn.addEventListener('click', () => {
      return this.showMenu();
    });
    this.settingsBtn.addEventListener('click', () => {
      return this.showSettings();
    });
  }
}
