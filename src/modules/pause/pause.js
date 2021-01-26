import Menu from '../Menu';
import CreateBackgroundSound from '../backgroundSound/createBackgroundSound';
import BackgroundSound from '../backgroundSound/backgroundSound';

export default class Pause {
  constructor() {
    this.resumeBtn = document.querySelector('.pause__btn_resume');
    this.menuBtn = document.querySelector('.pause__btn_menu');
    this.settingsBtn = document.querySelector('.pause__btn_settings');
    this.pausePlayerBtn = document.querySelector('.pause__btn_player');

    this.isPlayer = false;
  }

  showPlayer() {
    if (this.isPlayer === false) {
      const createBackgroundSound = new CreateBackgroundSound();
      createBackgroundSound.init();
      const backgroundSound = new BackgroundSound();
      backgroundSound.init();

      this.isPlayer = true;
    }

    this.isPlayer = false;
  }

  init() {
    this.resumeBtn.addEventListener('click', () => {
      return this.showPlayer();
    });
    this.menuBtn.addEventListener('click', () => {
      return this.showPlayer();
    });
    this.settingsBtn.addEventListener('click', () => {
      return this.showPlayer();
    });
    this.pausePlayerBtn.addEventListener('click', () => {
      return this.showPlayer();
    });
  }
}

// init() {
//   this.setEventHandlers();
// }

// setEventHandlers() {
//   document
//     .querySelector('.pause')
//     .addEventListener('click', () => this.menuEventHandler.bind(this));
// }

// eslint-disable-next-line class-methods-use-this
// menuEventHandler(e) {
//   const element = e.target.closest('.pause__btn');

//   if (!element) {
//     return;
//   }

//   switch (element.id) {
//     case 'pause__btn_resume':
//       Pause.showPlayer();

//       break;

//     case 'pause__btn_menu':
//       Pause.showPlayer();

//       break;

//     case 'pause__btn_settings':
//       Pause.showPlayer();

//       break;

//     case 'pause__btn_player':
//       this.showPlayer();

//       break;
//     default:
//       break;
//   }
// }
