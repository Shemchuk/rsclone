import soundLinks from './soundLinks';

export default class Sound {
  constructor() {
    this.audioValue = 0;
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
  }

  mainClick() {
    if (this.aliasSettings.isSounds === 'true') {
      const mainClick = new Audio();
      mainClick.src = soundLinks.mainClick;
      this.audioValue = 0.3;
      mainClick.play();
    }
  }

  cardClick() {
    if (this.aliasSettings.isSounds === 'true') {
      const cardClick = new Audio();
      cardClick.src = soundLinks.cardClick;
      this.audioValue = 0.3;
      cardClick.play();
    }
  }

  nextRoundClick() {
    if (this.aliasSettings.isSounds === 'true') {
      const nextRoundClick = new Audio();
      nextRoundClick.src = soundLinks.nextRoundClick;
      this.audioValue = 0.3;
      nextRoundClick.play();
    }
  }

  victoryClick() {
    if (this.aliasSettings.isSounds === 'true') {
      const victoryClick = new Audio();
      victoryClick.src = soundLinks.victoryClick;
      this.audioValue = 0.3;
      victoryClick.play();
    }
  }

  statisticPopup() {
    if (this.aliasSettings.isSounds === 'true') {
      const statisticPopup = new Audio();
      statisticPopup.src = soundLinks.statisticPopup;
      this.audioValue = 0.3;
      statisticPopup.play();
    }
  }

  lastTimePopup() {
    if (this.aliasSettings.isSounds === 'true') {
      const lastTimePopup = new Audio();
      lastTimePopup.src = soundLinks.lastTimePopup;
      this.audioValue = 0.3;
      lastTimePopup.play();
    }
  }

  mainHover() {
    if (this.aliasSettings.isSounds === 'true') {
      const mainHover = new Audio();
      mainHover.src = soundLinks.mainHover;
      this.audioValue = 0.3;
      mainHover.play();
    }
  }
}
