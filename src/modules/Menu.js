import * as CONST from './Constants';
import menuHTMLTemplate from './components/menuHTMLTemplate';
import Commands from './commands/commands';
import CreateCommands from './commands/createCommands';
import Language from './lang/Language';
import soundsLinks from './sound/soundLinks';

// eslint-disable-next-line no-unused-vars
import { set as setValueToStorage, get as getValueFromStorage } from './utils/storage';

export default class Menu {
  constructor() {
    this.tmp = CONST.TMP;
    this.langObject = new Language();
    // this.lang = this.langObject.getCurrentLangObject().mainMenu;
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
  }

  init() {
    this.createMenu();
  }

  createMenu() {
    const main = document.querySelector('.loading-block');
    const menu = document.querySelector('.menu');

    if (menu) {
      menu.remove();
    }

    this.lang = this.langObject.getCurrentLangObject().mainMenu;
    main.innerHTML += menuHTMLTemplate(this.lang);
    this.setEventHandlers();
  }

  setEventHandlers() {
    document.querySelector('.menu').addEventListener('click', this.menuEventHandler.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  menuEventHandler(e) {
    const element = e.target.closest('.menu-button');
    console.log('event handler');

    if (!element) {
      return;
    }

    const menuClick = new Audio();
    menuClick.src = soundsLinks.startGameClick;
    menuClick.play();

    switch (element.id) {
      case 'button-start':
        console.log('start');
        Menu.showCommandMenu();
        setTimeout(function () {
          Menu.hideMenu('main-menu');
        }, 1000);

        // document.querySelector('.command-wrapper').style.display = 'block';
        // game();
        // this.showMenu('command-menu');

        break;

      case 'button-settings':
        console.log('settings');
        Menu.loadSettingsFromLocalStorage();
        Menu.slideAnimationMethod();
        setTimeout(function () {
          Menu.hideMenu('main-menu');
          Menu.showMenu('settings-menu');
        }, 1000);

        break;

      case 'button-tutorial':
        console.log('tutorial');
        Menu.slideAnimationMethod();
        setTimeout(function () {
          Menu.hideMenu('main-menu');
          Menu.showMenu('tutorial-menu');
        }, 1000);

        break;

      case 'button-back':
        console.log('back');
        Menu.slideAnimationMethod();
        setTimeout(function () {
          Menu.showMenu('main-menu');
          Menu.hideMenu('settings-menu');
        }, 1000);
        // Menu.hideMenu('tutorial-menu');

        break;

      case 'tutorial__button-back':
        console.log('back');
        Menu.slideAnimationMethod();
        setTimeout(function () {
          Menu.showMenu('main-menu');
          Menu.hideMenu('tutorial-menu');
        }, 1000);
        // Menu.hideMenu('tutorial-menu');

        break;

      case 'result__button-back':
        console.log('back from result');
        Menu.showMenu('main-menu');
        Menu.hideMenu('result-menu');
        // Menu.hideMenu('tutorial-menu');

        break;

      case 'button-save':
        console.log('save');
        // Menu.slideAnimationMethod();
        // setTimeout(function () {
        this.saveSettings();
        // }, 1000);
        // Menu.showMenu('main-menu');
        // Menu.hideMenu('settings-menu');

        break;

      case 'button-result':
        console.log('result');
        Menu.showMenu('result-menu');
        Menu.hideMenu('main-menu');

        break;
      default:
        break;
    }
  }

  static slideAnimationMethod() {
    gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
    setTimeout(function () {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 0 });
    }, 1000);
  }

  static showCommandMenu() {
    gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
    setTimeout(function () {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 0 });
      const createCommands = new CreateCommands();
      createCommands.init();
      const commands = new Commands();
      commands.init();
    }, 1000);
  }

  saveSettings() {
    const settings = {};
    settings.wordsCount = document.querySelector('#inputWordsCount').value;
    settings.roundTime = document.querySelector('#inputRoundTime').value;
    settings.lang = document.querySelector('input[name="lang"]:checked').value;
    setValueToStorage('aliasSettings', settings);

    setTimeout(this.createMenu(), 50);
    console.log(settings);
    console.log('Settings saved!');
  }

  static loadSettingsFromLocalStorage() {
    const settings = getValueFromStorage('aliasSettings', CONST.defaultSettings);
    const wordsCount = document.querySelector('#inputWordsCount');
    const outputWordsNumber = document.querySelector('#outputWordsNumber');
    const roundTime = document.querySelector('#inputRoundTime');
    const outputRoundTime = document.querySelector('#outputRoundTime');

    wordsCount.value = settings.wordsCount;
    outputWordsNumber.value = settings.wordsCount;
    roundTime.value = settings.roundTime;
    outputRoundTime.value = settings.roundTime;

    if (settings.lang === 'en') {
      document.querySelector('#set-lang__en').checked = true;
    } else {
      document.querySelector('#set-lang__ru').checked = true;
    }
  }

  static hideMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.add('hide-menu');
  }

  static showMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.remove('hide-menu');
  }
}
