import CONST from './Constants';
import menuHTML from './components/menu.html';
import Commands from './commands/commands';
import CreateCommands from './commands/createCommands';

// eslint-disable-next-line no-unused-vars
import { set as setValueToStorage, get as getValueFromStorage } from './utils/storage';
// import { game } from './modules/game/gameContainer';

export default class Menu {
  constructor() {
    this.tmp = CONST.TMP;
    const main = document.querySelector('.main');
    main.innerHTML = menuHTML + main.innerHTML;
  }

  init() {
    document.querySelector('.menu').addEventListener('click', this.menuEventHandler);
  }

  // eslint-disable-next-line class-methods-use-this
  menuEventHandler(e) {
    const element = e.target.closest('.menu-button') || e.target.closest('.mapboxgl-marker');

    if (!element) {
      return;
    }
    let createCommands;
    let commands;
    switch (element.id) {
      case 'button-start':
        console.log('start');
        Menu.hideMenu('main-menu');
        createCommands = new CreateCommands();
        createCommands.init();
        commands = new Commands();
        commands.init();
        // document.querySelector('.command-wrapper').style.display = 'block';
        // game();
        // this.showMenu('command-menu');

        break;

      case 'button-settings':
        console.log('settings');
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
        Menu.showMenu('main-menu');
        Menu.hideMenu('settings-menu');
        Menu.saveSettings();

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

  static saveSettings() {
    const settings = {};
    settings.wordsCount = document.querySelector('#inputWordsCount').value;
    settings.roundTime = document.querySelector('#inputRoundTime').value;
    settings.lang = document.querySelector('input[name="lang"]:checked').value;
    setValueToStorage('aliasSettings', settings);

    console.log(settings);
    console.log('Settings saved!');
  }

  static hideMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.add('hide-menu');
  }

  static showMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.remove('hide-menu');
  }
}
