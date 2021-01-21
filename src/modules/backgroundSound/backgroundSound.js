import audioTracks from './audioTracks';

export default class BackgroundSound {
  constructor() {
    this.backgroundSoundWrapper = document.querySelector('.background-sound-wrapper');
    this.title = document.querySelector('.music__title');
    this.author = document.querySelector('.music__author');
    this.previousBtn = document.querySelector('.previous');
    this.playBtn = document.querySelector('.play');
    this.forwardBtn = document.querySelector('.forward');
    this.muteBtn = document.querySelector('.mute');
    this.volumeInput = document.getElementById('volume');

    this.currentAudio = 'music';
    this.currentId = 0;
    this.audio = null;
    this.isPlaying = false;
    this.isMute = false;
    this.beforeMute = 0;
  }

  play(e) {
    if (!this.isPlaying) {
      e.target.src = '/./src/assets/icons/pause.svg';
      e.target.alt = 'Pause';

      this.isPlaying = true;
      document.querySelector('audio').play();
    } else {
      e.target.src = '/./src/assets/icons/next.svg';
      e.target.alt = 'Play';

      document.querySelector('audio').pause();
      this.isPlaying = false;
    }
  }

  playPreviousTrack() {
    this.playBtn.src = '/./src/assets/icons/pause.svg';
    this.playBtn.alt = 'Pause';

    this.isPlaying = true;

    this.currentId = this.currentId - 1 < 0 ? audioTracks.length : this.currentId - 1;
    this.init();
    document.getElementById(this.currentAudio).play();
  }

  playNextTrack() {
    this.playBtn.src = '/./src/assets/icons/pause.svg';
    this.playBtn.alt = 'Pause';

    this.isPlaying = true;

    this.currentId = this.currentId + 1 > audioTracks.length ? 0 : this.currentId + 1;
    this.init();
    document.getElementById(this.currentAudio).play();
  }

  mute() {
    // if (this.isMute) {
    this.beforeMute = this.volumeInput.value;
    this.volumeInput.value = 0;
    document.getElementById(this.currentAudio).volume = this.volumeInput.value;
    this.isMute = true;
    // } else {
    //   this.volumeInput.value = this.beforeMute;
    //   document.getElementById(this.currentAudio).volume = this.before;
    //   this.isMute = false;
    // }
  }

  changeVolume() {
    document.getElementById(this.currentAudio).volume = this.volumeInput.value;
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

    this.previousBtn.addEventListener('click', () => {
      this.playPreviousTrack();
    });
    this.playBtn.addEventListener('click', this.play);
    this.forwardBtn.addEventListener('click', () => {
      this.playNextTrack();
    });
    this.muteBtn.addEventListener('click', () => {
      this.mute();
    });
    this.volumeInput.addEventListener('input', () => {
      this.changeVolume();
    });
  }
}
