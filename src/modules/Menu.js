import CONST from './Constants';

export default class Menu {
  constructor() {
    this.tmp = CONST.TMP;
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

    switch (element.id) {
      case 'button-start':
        console.log('start');
        Menu.hideMenu('main-menu');
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
      default:
        break;
    }
  }

  static saveSettings() {
    console.log('Settings saved!');
  }

  static hideMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.add('hide-menu');
  }

  static showMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.remove('hide-menu');
  }
}
