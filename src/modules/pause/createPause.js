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
    template = `<div id="container">
    <div class="sign-wrap">
    <div class="sign">
    <div class="menu">
    <h2 class='menu-title menu-font'><p><a>PAUSE</a></p></h2>
    <div class='pause__content'>
    <div class='background-sound-wrapper'>
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
    </div>
    <button class='pause__btn pause__btn_resume menu-button' id='pause__btn_resume'><p><a>Resume</a></p></button>
    <button class='pause__btn pause__btn_settings menu-button' id='pause__btn_settings'><p><a>Settings</a></p></button>
    <button class='pause__btn pause__btn_menu menu-button' id='pause__btn_menu'><p><a>Main menu</a></p></button>
    </div>
    </div>
    </div>
    </div>`;

    pauseContainer.innerHTML = template;
    this.main.appendChild(pauseContainer);
    return this.main;
  }
}
