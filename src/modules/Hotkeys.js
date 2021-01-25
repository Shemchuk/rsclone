export default class Hotkeys {
  constructor() {
    this.currentItem = -1;
    this.buttons = document.querySelectorAll('.main-menu .menu-button ');
    console.log(this.buttons);
  }

  init() {
    this.currentItem = -1;
  }

  setMenuHandler() {
    this.menuHandler = document.addEventListener('keydown', this.menuEventHadler.bind(this));
  }

  menuEventHadler(e) {
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

    const buttonCode = e.code;
    console.log(buttonCode);
    // this.currentItem += 1;

    if (e.stopPropagation) e.stopPropagation();

    switch (buttonCode) {
      case 'Enter':
      case 'Space':
        break;

      case 'Escape':
        break;

      case 'ArrowUp':
        menuPressUpKey();
        break;

      case 'ArrowDown':
        menuPressDownKey();
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
}
