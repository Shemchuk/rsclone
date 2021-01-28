import audioTracks from './audioTracks';

export default class BackgroundSound {
  constructor() {
    this.backgroundSoundWrapper = document.querySelector('.background-sound-wrapper');
    this.previousBtn = document.querySelector('.previous');
    this.playBtn = document.querySelector('.play');
    this.forwardBtn = document.querySelector('.forward');
    this.muteBtn = document.querySelector('.mute');
    this.option = document.querySelector('.option');
    this.volumeInput = document.getElementById('volume');

    this.currentAudio = 'music';
    this.currentId = 0;
    this.audio = null;
    this.isPlaying = false;
    this.isVolumeOptionOpen = false;
    this.isMute = false;
    this.audioValue = 0;
  }

  play() {
    if (this.isPlaying === false) {
      document.querySelector(
        '.play'
      ).innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 300.003 300.003" style="enable-background:new 0 0 300.003 300.003;" xml:space="preserve"><path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003
         C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46
         c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198
         c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z"/>`;

      this.isPlaying = true;
      document.querySelector('audio').play();
    } else {
      document.querySelector(
        '.play'
      ).innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
      M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
     c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
     c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/>`;

      document.querySelector('audio').pause();
      this.isPlaying = false;
    }
  }

  playPreviousTrack() {
    this.playBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 300.003 300.003" style="enable-background:new 0 0 300.003 300.003;" xml:space="preserve"><path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003
       C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46
       c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198
       c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z"/>`;

    this.isPlaying = true;

    this.currentId = this.currentId - 1 < 0 ? audioTracks.length : this.currentId - 1;
    this.init();
    document.getElementById(this.currentAudio).play();
  }

  playNextTrack() {
    this.playBtn.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 300.003 300.003" style="enable-background:new 0 0 300.003 300.003;" xml:space="preserve"><path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003
       C300.001,67.159,232.846,0,150.001,0z M134.41,194.538c0,9.498-7.7,17.198-17.198,17.198s-17.198-7.7-17.198-17.198V105.46
       c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z M198.955,194.538c0,9.498-7.701,17.198-17.198,17.198
       c-9.498,0-17.198-7.7-17.198-17.198V105.46c0-9.498,7.7-17.198,17.198-17.198s17.198,7.7,17.198,17.198V194.538z"/>`;

    this.isPlaying = true;

    this.currentId = this.currentId + 1 > audioTracks.length ? 0 : this.currentId + 1;
    this.init();
    document.getElementById(this.currentAudio).play();
  }

  mute() {
    if (this.isMute) {
      this.isMute = false;
      this.volumeInput.value = this.audioValue;
      document.getElementById(this.currentAudio).volume = this.volumeInput.value;
    } else {
      this.audioValue = this.volumeInput.value;
      this.isMute = true;
      this.volumeInput.value = 0;
      document.getElementById(this.currentAudio).volume = this.volumeInput.value;
    }
  }

  displayVolume() {
    if (this.option.style.display === 'none') {
      this.option.style.display = 'block';
    } else {
      this.option.style.display = 'none';
      // this.volumeBtn.src = '/./src/assets/icons/next.svg';
      // this.volumeBtn.alt = 'Return';
    }
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
    this.muteBtn.addEventListener('mousemove', () => {
      this.displayVolume();
    });
    this.volumeInput.addEventListener('input', () => {
      this.changeVolume();
    });
  }
}
