import BackgroundSound from '../backgroundSound/backgroundSound';

// Open settings page from pause menu
export default class Pause {
  constructor() {
    this.backgroundSound = JSON.parse(localStorage.getItem('backgroundSound')) || [{}];
    this.main = document.querySelector('.main');
    this.pause = document.querySelector('.pause');
    this.playOnBackground = new BackgroundSound();
  }

  init() {
    this.playOnBackground.init();
  }
}
