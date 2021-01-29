import BackgroundSound from '../backgroundSound/backgroundSound';
import {
  generateLoardingOnlyMenu,
  loadingOnlyMenu,
  // generateAndloadingOnlySettings,
} from '../game/loadingBeforeMenu';

// Закомментирована загрузка страницы настроек
export default class Pause {
  constructor() {
    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    // this.settingsBtn = document.querySelector('.pause__btn_settings');

    this.backgroundSound = new BackgroundSound();
  }

  // showSettings() {
  //   this.main.innerHTML = '';
  //   generateAndloadingOnlySettings();
  // }

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
    // this.settingsBtn.addEventListener('click', () => {
    //   return this.showSettings();
    // });
  }
}
