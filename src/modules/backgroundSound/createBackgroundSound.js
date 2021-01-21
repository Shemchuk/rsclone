export default class CreateBackgroundSound {
  constructor() {
    this.main = document.querySelector('main');
  }

  init() {
    let template = '';
    const backgroundSoundContainer = document.createElement('div');
    backgroundSoundContainer.className = 'background-sound-wrapper';
    template = `
      <h2 class="music__author"></h2>
      <span>-</span>
      <h2 class="music__title"></h2>
      <div class="music-control">
        <div class="music-control__previous" id="previous">
          <img src="/./src/assets/icons/play.svg" alt="Previous" class="previous">
        </div>
        <div class="music-control__play" id="play">
          <img src="/./src/assets/icons/next.svg" alt="Play" class="play">
        </div>
        <div class="music-control__forward" id="forward">
          <img src="/./src/assets/icons/play.svg" alt="Forward" class="forward">
        </div>
        <div class="music-control__mute" id="mute">
          <img src="/./src/assets/icons/mute.svg" alt="Mute" class="mute">
        </div>
      </div>
      <div class="option">
        <label for="volume">Volume</label>
        <input type="range" min="0" max="1" step="0.1" name="volume" id="volume" value="0.1">
      </div>`;
    backgroundSoundContainer.innerHTML = template;
    this.main.appendChild(backgroundSoundContainer);
    return this.main;
  }
}
