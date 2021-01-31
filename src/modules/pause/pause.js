import BackgroundSound from '../backgroundSound/backgroundSound';
import { generateLoardingOnlyMenu, loadingOnlyMenu } from '../game/loadingBeforeMenu';

// Open settings page from pause menu
// generateAndloadingOnlySettings,

export default class Pause {
  constructor() {
    this.backgroundSound = JSON.parse(localStorage.getItem('backgroundSound')) || [{}];

    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    // Open settings page from pause menu
    // this.settingsBtn = document.querySelector('.pause__btn_settings');

    this.playOnBackground = new BackgroundSound();
  }
  // Open settings page from pause menu
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
    this.playOnBackground.init();

    this.menuBtn.addEventListener('click', () => {
      return this.showMenu();
    });
    // Open settings page from pause menu
    // this.settingsBtn.addEventListener('click', () => {
    //   return this.showSettings();
    // });
  }
}
