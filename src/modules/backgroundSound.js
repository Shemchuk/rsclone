import audioTracks from './audioTracks';

export default class BackgroundSound {
  constructor() {
    this.backgroundSoundWrapper = document.querySelector('.background-sound-wrapper');
    this.title = document.querySelector('.music__title');
    this.author = document.querySelector('.music__author');
    this.playBtn = document.querySelector('.play');
    this.forwardBtn = document.querySelector('.forward');
    this.volumeInput = document.getElementById('volume');

    this.currentAudio = 'music';
    this.currentId = 0;
    this.audio = null;
    this.isPlaying = false;
  }

  play(e) {
    if (!this.isPlaying) {
      e.target.src = '/./src/assets/icons/pause.svg';
      e.target.alt = 'Pause';

      this.isPlaying = true;
      document.querySelector('audio').play();
    } else {
      e.target.src = '/./src/assets/icons/play.svg';
      e.target.alt = 'Play';

      document.querySelector('audio').pause();
      this.isPlaying = false;
    }
  }

  playNextTrack() {
    this.playBtn.src = '/./src/assets/icons/pause.svg';
    this.playBtn.alt = 'Pause';

    this.isPlaying = true;

    this.currentId = this.currentId + 1 > audioTracks.length ? 0 : this.currentId + 1;
    this.init();
    document.querySelector('audio').play();
  }

  init() {
    this.audio =
      document.getElementById(this.currentAudio) === null
        ? (this.audio = new Audio())
        : document.getElementById(this.currentAudio);

    this.audio.src = audioTracks[this.currentId].url;
    this.audio.id = this.currentAudio;

    // eslint-disable-next-line no-unused-expressions
    document.getElementById(this.currentAudio) === null
      ? this.backgroundSoundWrapper.appendChild(this.audio)
      : '';

    this.title.innerHTML = audioTracks[this.currentId].title;
    this.author.innerHTML = audioTracks[this.currentId].author;
    // this.audio.setVolume(this.volumeInput);

    this.playBtn.addEventListener('click', this.play);
    this.forwardBtn.addEventListener('click', () => {
      this.playNextTrack();
    });
  }
}
