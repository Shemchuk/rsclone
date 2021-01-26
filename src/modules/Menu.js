import menuHTMLTemplate from './components/menuHTMLTemplate';
// import Commands from './commands/commands';
// import CreateCommands from './commands/createCommands';
import Language from './lang/Language';
import soundsLinks from './sound/soundLinks';
import Hotkeys from './Hotkeys';
import { set as setValueToStorage } from './utils/storage';
// eslint-disable-next-line import/no-cycle
import MenuUtils from './utils/MenuUtils';

export default class Menu {
  constructor() {
    this.langObject = new Language();
    // this.lang = this.langObject.getCurrentLangObject().mainMenu;
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
  }

  init() {
    this.createMenu();
    this.hotkeys = new Hotkeys();
    this.hotkeys.setMenuHandler();
  }

  createMenu() {
    // const main = document.querySelector('.loading-block');
    const main = document.querySelector('.main');
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
    document.querySelector('.main-menu').addEventListener('mouseenter', () => {
      this.hotkeys.disableActiveMenuButtons();
      this.hotkeys.init();
      console.log('on mouse enter');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  menuEventHandler(e) {
    const element = e.target.closest('.menu-button');
    console.log('event handler');

    if (!element) {
      return;
    }

    const startGameClick = new Audio();

    switch (element.id) {
      case 'button-start':
        if (this.aliasSettings.isSounds === 'true') {
          startGameClick.src = soundLinks.startGameClick;
          startGameClick.play();
        }
        console.log('start');
        this.hotkeys.removeMenuHandler();
        MenuUtils.pressButtonStart();

        // document.querySelector('.command-wrapper').style.display = 'block';
        // game();
        // this.showMenu('command-menu');

        break;

      case 'button-settings':
        MenuUtils.pressButtonSettings();
        break;

      case 'button-tutorial':
        // if (this.aliasSettings.isSounds === 'true') {
        //   startGameClick.src = soundLinks.startGameClick;
        //   startGameClick.play();
        // }
        console.log('tutorial');
        MenuUtils.pressButtonTutorial();
        break;

      case 'button-back':
        // if (this.aliasSettings.isSounds === 'true') {
        //   startGameClick.src = soundLinks.startGameClick;
        //   startGameClick.play();
        // }
        console.log('back');
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.showMenu('main-menu');
          MenuUtils.hideMenu('settings-menu');
        }, 1000);
        break;

      case 'tutorial__button-back':
        // if (this.aliasSettings.isSounds === 'true') {
        //   startGameClick.src = soundLinks.startGameClick;
        //   startGameClick.play();
        // }
        console.log('back');
        MenuUtils.slideAnimationMethod();
        setTimeout(() => {
          MenuUtils.showMenu('main-menu');
          MenuUtils.hideMenu('tutorial-menu');
        }, 1000);
        break;

      case 'result__button-back':
        // if (this.aliasSettings.isSounds === 'true') {
        //   startGameClick.src = soundLinks.startGameClick;
        //   startGameClick.play();
        // }
        console.log('back from result');
        MenuUtils.showMenu('main-menu');
        MenuUtils.hideMenu('result-menu');
        break;

      case 'button-save':
        // if (this.aliasSettings.isSounds === 'true') {
        //   startGameClick.src = soundLinks.startGameClick;
        //   startGameClick.play();
        // }
        console.log('save');
        // Menu.slideAnimationMethod();
        this.saveSettings();
        break;

      case 'button-result':
        MenuUtils.pressButtonResult();
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
    console.log(settings);
    console.log('Settings saved!');
  }
}
