import BackgroundSound from '../backgroundSound/backgroundSound';
import { generateLoardingOnlyMenu, loadingOnlyMenu } from '../game/loadingBeforeMenu';

// Закомментирована загрузка страницы настроек
// generateAndloadingOnlySettings,

export default class Pause {
  constructor() {
    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    // Закомментирована загрузка страницы настроек
    // this.settingsBtn = document.querySelector('.pause__btn_settings');

    this.backgroundSound = new BackgroundSound();
  }
  // Закомментирована загрузка страницы настроек
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
    // Закомментирована загрузка страницы настроек
    // this.settingsBtn.addEventListener('click', () => {
    //   return this.showSettings();
    // });
  }
}
