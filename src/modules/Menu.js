import menuHTMLTemplate from './components/menuHTMLTemplate';
import Language from './lang/Language';

import { generateMenuPlayer } from './backgroundSound/createBackgroundSound';
import BackgroundSound from './backgroundSound/backgroundSound';

import Sound from './sound/sound';

// eslint-disable-next-line import/no-cycle
import Hotkeys from './Hotkeys';
import { set as setValueToStorage } from './utils/storage';
// eslint-disable-next-line import/no-cycle
import MenuUtils from './utils/MenuUtils';

export default class Menu {
  constructor() {
    this.langObject = new Language();
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
    this.backgroundSound = JSON.parse(localStorage.getItem('backgroundSound')) || [{}];
  }

  init() {
    this.createMenu();
    this.hotkeys = new Hotkeys();
    this.hotkeys.setMenuHandler();
  }

  createMenu() {
    const main = document.querySelector('.loading-block');
    // const main = document.querySelector('.main');
    const menu = document.querySelector('.menu');

    if (menu) {
      menu.remove();
    }

    this.lang = this.langObject.getCurrentLangObject().mainMenu;
    main.innerHTML += menuHTMLTemplate(this.lang);
    generateMenuPlayer();
    this.setEventHandlers();

    const backgroundSound = new BackgroundSound();
    backgroundSound.init();
  }

  setEventHandlers() {
    document.querySelector('.menu').addEventListener('click', this.menuEventHandler.bind(this));

    // sound on hover
    document
      .querySelectorAll('button')
      .forEach((el) => el.addEventListener('mouseenter', this.playHoverSound));

    // sound toggle
    document
      .querySelectorAll('[name=sounds]')
      .forEach((el) => el.addEventListener('click', this.toggleLang.bind(this)));

    document.querySelector('.main-menu').addEventListener('mouseenter', () => {
      this.hotkeys.disableActiveMenuButtons();
      this.hotkeys.init();
    });
  }

  toggleLang(e) {
    const el = e.target;
    this.aliasSettings.isSounds = el.value;
    localStorage.setItem('aliasSettings', JSON.stringify(this.aliasSettings));
  }

  // eslint-disable-next-line class-methods-use-this
  playHoverSound() {
    const sound = new Sound();
    sound.mainHover();
  }

  // eslint-disable-next-line class-methods-use-this
  menuEventHandler(e) {
    const element = e.target.closest('.menu-button');

    if (!element) {
      return;
    }

    const sound = new Sound();
    sound.mainClick();

    switch (element.id) {
      case 'button-start':
        this.hotkeys.removeMenuHandler();
        MenuUtils.pressButtonStart();
        break;

      case 'button-settings':
        MenuUtils.pressButtonSettings();
        break;

      case 'button-tutorial':
        MenuUtils.pressButtonTutorial();
        break;

      case 'button-back':
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.showMenu('main-menu');
          MenuUtils.hideMenu('settings-menu');
        }, 1000);
        break;

      case 'tutorial__button-back':
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.showMenu('main-menu');
          MenuUtils.hideMenu('tutorial-menu');
        }, 1000);
        break;

      case 'result__button-back':
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.showMenu('main-menu');
          MenuUtils.hideMenu('result-menu');
        }, 1000);
        break;

      case 'button-save':
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          this.saveSettings();
        }, 1000);
        break;

      case 'button-result':
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.pressButtonResult();
        }, 1000);
        break;

      default:
        break;
    }
  }

  saveSettings() {
    const settings = {};
    settings.wordsCount = document.querySelector('#inputWordsCount').value;
    settings.roundTime = document.querySelector('#inputRoundTime').value;
    settings.lang = document.querySelector('input[name="lang"]:checked').value;
    settings.isSounds = document.querySelector('input[name="sounds"]:checked').value;
    setValueToStorage('aliasSettings', settings);

    setTimeout(this.createMenu(), 50);

    const backgroundSound = new BackgroundSound();
    backgroundSound.init();
  }
}
