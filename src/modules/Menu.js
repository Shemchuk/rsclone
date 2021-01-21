import * as CONST from './Constants';
import menuHTMLTemplate from './components/menuHTMLTemplate';
import Commands from './commands/commands';
import CreateCommands from './commands/createCommands';
import Language from './lang/Language';

// eslint-disable-next-line no-unused-vars
import { set as setValueToStorage, get as getValueFromStorage } from './utils/storage';

export default class Menu {
  constructor() {
    this.tmp = CONST.TMP;
    this.langObject = new Language();
    // this.lang = this.langObject.getCurrentLangObject().mainMenu;
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

    // const player = new Audio();
    // player.src = '/../src/assets/sounds/LAZER.wav';
    // player.play();

    switch (element.id) {
      case 'button-start':
        console.log('start');
        Menu.hideMenu('main-menu');
        Menu.showCommandMenu();

        // document.querySelector('.command-wrapper').style.display = 'block';
        // game();
        // this.showMenu('command-menu');

        break;

      case 'button-settings':
        console.log('settings');
        Menu.loadSettingsFromLocalStorage();
        Menu.hideMenu('main-menu');
        Menu.showMenu('settings-menu');

        break;

      case 'button-tutorial':
        console.log('tutorial');
        Menu.hideMenu('main-menu');
        Menu.showMenu('tutorial-menu');

        break;

      case 'button-back':
        console.log('back');
        Menu.showMenu('main-menu');
        Menu.hideMenu('settings-menu');
        // Menu.hideMenu('tutorial-menu');

        break;

      case 'tutorial__button-back':
        console.log('back');
        Menu.showMenu('main-menu');
        Menu.hideMenu('tutorial-menu');
        // Menu.hideMenu('tutorial-menu');

        break;

      case 'button-save':
        console.log('save');
        this.saveSettings();
        // Menu.showMenu('main-menu');
        // Menu.hideMenu('settings-menu');

        break;

      case 'button-statistics':
        console.log('statistics');
        // Menu.showMenu('main-menu');
        // Menu.hideMenu('settings-menu');

        break;
      default:
        break;
    }
  }

  static showCommandMenu() {
    const createCommands = new CreateCommands();
    createCommands.init();
    const commands = new Commands();
    commands.init();
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
