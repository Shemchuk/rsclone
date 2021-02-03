// eslint-disable-next-line import/no-cycle
import MenuUtils from './utils/MenuUtils';

export default class Hotkeys {
  constructor() {
    this.currentItem = -1;
    this.buttons = document.querySelectorAll('.main-menu .menu-button ');
  }

  init() {
    this.currentItem = -1;
    const main = document.querySelector('.main');
    main.focus();
  }

  setMenuHandler() {
    this.bindedMenuEventHandler = this.menuEventHandler.bind(this);
    document.addEventListener('keydown', this.bindedMenuEventHandler, false);
  }

  removeMenuHandler() {
    document.removeEventListener('keydown', this.bindedMenuEventHandler, false);
  }

  setGameHandler() {
    this.bindedGameEventHandler = this.gameEventHandler.bind(this);
    document.addEventListener('keydown', this.bindedGameEventHandler);
  }

  removeGameHandler() {
    document.removeEventListener('keydown', this.bindedGameEventHandler);
  }

  menuEventHandler(e) {
    const menuPressUpKey = () => {
      this.currentItem -= 1;
      if (this.currentItem < 0) {
        this.currentItem = this.buttons.length - 1;
      }
      this.disableActiveMenuButtons();
      this.setActiveMenuButton();
    };

    const menuPressDownKey = () => {
      this.currentItem += 1;
      if (this.currentItem === this.buttons.length) {
        this.currentItem = 0;
      }
      this.disableActiveMenuButtons();
      this.setActiveMenuButton();
    };

    const openActiveMenu = () => {
      switch (this.currentItem) {
        case 0:
          this.removeMenuHandler();
          MenuUtils.pressButtonStart();
          break;

        case 1:
          MenuUtils.pressButtonSettings();
          break;

        case 2:
          MenuUtils.pressButtonTutorial();
          break;

        case 3:
          MenuUtils.pressButtonResult();
          break;

        default:
          break;
      }
    };

    const goToMainMenu = () => {
      document.querySelectorAll('.menu .section-menu').forEach((item) => {
        const section = item;
        section.classList.add('hide-menu');
      });
      document.querySelector('.main-menu').classList.remove('hide-menu');
    };

    const buttonCode = e.code;
    const mainMenu = document.querySelector('.main-menu.hide-menu');

    if (e.stopPropagation) e.stopPropagation();

    switch (buttonCode) {
      case 'Enter':
      case 'Space':
        if (!mainMenu) openActiveMenu();
        break;

      case 'Escape':
        goToMainMenu();
        break;

      case 'ArrowUp':
        if (!mainMenu) {
          menuPressUpKey();
        }
        break;

      case 'ArrowDown':
        if (!mainMenu) {
          menuPressDownKey();
        }
        break;

      default:
        break;
    }
  }

  disableActiveMenuButtons() {
    this.buttons.forEach((button) => {
      const currentButton = button;
      currentButton.dataset.activeMenuItem = false;
    });
  }

  setActiveMenuButton() {
    const button = this.buttons[this.currentItem];
    if (button) {
      button.dataset.activeMenuItem = true;
    }
  }

  setUpGameButton(func) {
    this.upGameButton = func;
  }

  setDownGameButton(func) {
    this.downGameButton = func;
  }

  setEscGameButton(func) {
    this.escGameButton = func;
  }

  gameEventHandler(e) {
    const buttonCode = e.code;

    if (e.stopPropagation) e.stopPropagation();

    switch (buttonCode) {
      case 'Enter':
      case 'Space':
      case 'ArrowUp':
        if (typeof this.upGameButton() === 'function') {
          this.upGameButton();
        }

        break;

      case 'ArrowDown':
        if (typeof this.downGameButton() === 'function') this.downGameButton();
        break;

      case 'Escape':
        if (typeof this.escGameButton() === 'function') this.escGameButton();

        break;

      default:
        break;
    }
  }
}
