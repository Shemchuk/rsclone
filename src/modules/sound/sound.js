import soundLinks from './soundLinks';

export default class Sound {
  constructor() {
    this.audioValue = 0;
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
  }

  init() {
    if (this.aliasSettings.isSounds === 'true') {
      const startGameClick = new Audio();
      startGameClick.src = soundLinks.startGameClick;
      this.audioValue = 0.3;
      startGameClick.play();
    }
  }
}
