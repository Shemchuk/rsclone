import Menu from '../Menu';
import BackgroundSound from '../backgroundSound/backgroundSound';
import Language from '../lang/Language';
import { generateLoardingOnlyMenu, loadingOnlyMenu } from '../game/loadingBeforeMenu';

export default class Pause {
  constructor() {
    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    this.settingsBtn = document.querySelector('.pause__btn_settings');

    this.backgroundSound = new BackgroundSound();
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
    this.main.innerHTML = '';
    generateLoardingOnlyMenu();
    loadingOnlyMenu();
  }

  init() {
    this.backgroundSound.init();

    this.menuBtn.addEventListener('click', () => {
      return this.showMenu();
    });
    this.settingsBtn.addEventListener('click', () => {
      return this.showSettings();
    });
  }
}
