// import Language from '../lang/Language';
export default class CreatePause {
  constructor() {
    this.main = document.querySelector('.main');
    // this.langObject = new Language();
    // this.lang = this.langObject.getCurrentLangObject().commandMenu;
  }

  init() {
    let template = '';
    const pauseContainer = document.createElement('div');
    pauseContainer.className = 'pause';
    template = `<h2 class='pause__title'>PAUSE MENU</h2>
      <div class='pause__content'>
        <div class='background-sound-wrapper'
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
        <div class="music-control__volume-control" id="volume-control">
          <img src="/./src/assets/icons/next.svg" alt="Volume-hover" class="volume-control">
        </div>
      </div>
      <div class="option">
        <label for="volume"></label>
        <input type="range" min="0" max="1" step="0.1" name="volume" id="volume" value="0.1">
      </div>
      <button class='pause__btn pause__btn_resume' id='pause__btn_resume'>Resume</button>
      <button class='pause__btn pause__btn_settings' id='pause__btn_settings'>Settings</button>
      <button class='pause__btn pause__btn_menu' id='pause__btn_menu'>Menu</button>
    </div>`;
    pauseContainer.innerHTML = template;
    this.main.appendChild(pauseContainer);
    return this.main;
  }
}
