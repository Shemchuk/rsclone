// import soundLinks from './soundLinks';

// export default class Sound {
//   constructor() {
//     this.body = document.querySelector('body');

//     this.audio = null;
//     this.soundId = 'sound';
//     this.audioValue = 0.3;
//     this.datasound = '';
//   }

//   init(e) {
//     this.audio =
//       document.getElementById(this.soundId[soundLinks.dataset.sound]) === null
//         ? (this.audio = new Audio())
//         : document.getElementById(this.soundId[soundLinks.dataset.sound]);

//     this.audio.src = soundLinks.dataset.sound;
//     this.audio.id = this.soundId[soundLinks.dataset.sound];
//     this.audio.datasound = `data-${e}`;
//     this.audio.audioValue = this.audioValue;

//     eslint-disable-next-line no-unused-expressions
//     document.getElementById(this.currentId[soundLinks.dataset.sound]) === null
//       ? this.body.appendChild(this.audio)
//       : '';

//     this.audio.play();
//   }

//   function makeSomeNoise(){
//     let link = sounds[this.dataset.sound]
//     playSound(link)
//   }

//   function playSound(link) {
//     player.src = link
//     player.play()
//   }

// createSoundElements() {
//     let template = '';
//     const soundsContainer = document.createElement('div');
//     soundsContainer.className = 'sounds-wrapper';
//     template = `<audio id="sound-addTeam" data-sound="addTeam></audio>
//     <audio id="sound-deleteTeam" data-sound="deleteTeam"></audio>`;

//     soundsContainer.innerHTML = template;
//     this.body.appendChild(soundsContainer);
//     this.init();
//   }

// }

// export default class Sound {
//   constructor() {
//     this.volume = 0.4;
//     this.src = '';
//     this.sounds = [
//       '/../src/assets/sounds/119415__joedeshon__rocker-switch.wav',
//       '/../src/assets/sounds/171521__leszek-szary__button.wav',
//     ];
//   }

//   playSound(link) {
//     this.src = link;
//     this.play();
//   }

//   init() {
//     const link = this.sounds[0];
//     this.playSound(link);
//   }
// }
