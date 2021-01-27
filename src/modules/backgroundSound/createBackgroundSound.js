export default class CreateBackgroundSound {
  constructor() {
    this.main = document.querySelector('main');
  }

  init() {
    let template = '';
    const backgroundSoundContainer = document.createElement('div');
    backgroundSoundContainer.className = 'background-sound-wrapper';
    template = `
      <div class="music-control">
        <div class="music-control__previous music-control__ico" id="previous">
<div class="previous"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><path d="M150,0C67.157,0,0,67.157,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.157,232.843,0,150,0z
M195.708,160.159c-0.731,0.731-1.533,1.349-2.368,1.886l-56.295,56.295c-2.734,2.736-6.318,4.103-9.902,4.103
s-7.166-1.367-9.902-4.103c-5.47-5.47-5.47-14.34,0-19.808l48.509-48.516l-48.265-48.265c-5.47-5.473-5.47-14.34,0-19.808
c5.47-5.47,14.338-5.467,19.808-0.003l56.046,56.043c0.835,0.537,1.637,1.154,2.365,1.886c2.796,2.796,4.145,6.479,4.082,10.146
C199.852,153.68,198.506,157.361,195.708,160.159z"/></div>

      </div>
        <div class="music-control__play music-control__ico" id="play">
          <div class="play"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><path d="M150,0C67.157,0,0,67.162,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.162,232.843,0,150,0z
          M205.846,158.266l-86.557,49.971c-1.32,0.765-2.799,1.144-4.272,1.144c-1.473,0-2.949-0.379-4.274-1.144
         c-2.64-1.525-4.269-4.347-4.269-7.402V100.89c0-3.053,1.631-5.88,4.269-7.402c2.648-1.528,5.906-1.528,8.551,0l86.557,49.974
         c2.645,1.53,4.274,4.352,4.269,7.402C210.12,153.916,208.494,156.741,205.846,158.266z"/></div>
        </div>
        <div class="music-control__forward music-control__ico" id="forward">
          <div class="forward"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><path d="M150,0C67.157,0,0,67.157,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.157,232.843,0,150,0z
          M195.708,160.159c-0.731,0.731-1.533,1.349-2.368,1.886l-56.295,56.295c-2.734,2.736-6.318,4.103-9.902,4.103
         s-7.166-1.367-9.902-4.103c-5.47-5.47-5.47-14.34,0-19.808l48.509-48.516l-48.265-48.265c-5.47-5.473-5.47-14.34,0-19.808
         c5.47-5.47,14.338-5.467,19.808-0.003l56.046,56.043c0.835,0.537,1.637,1.154,2.365,1.886c2.796,2.796,4.145,6.479,4.082,10.146
         C199.852,153.68,198.506,157.361,195.708,160.159z"/></div>
        </div>
        <div class="music-control__mute music-control__ico" id="mute">
          <div class="mute"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300.003 300.003" style="enable-background:new 0 0 300.003 300.003;" xml:space="preserve"><path d="M150.001,0c-82.838,0-150,67.159-150,150c0,82.838,67.162,150.003,150,150.003c82.843,0,150-67.165,150-150.003
          C300.001,67.159,232.843,0,150.001,0z M95.897,210.883c0,8.782-7.12,15.899-15.899,15.899s-15.896-7.117-15.896-15.899V93.368
          c0-8.782,7.117-15.899,15.896-15.899c8.779,0,15.899,7.117,15.899,15.899V210.883z M142.986,210.883
          c0,8.782-7.117,15.899-15.899,15.899c-8.779,0-15.896-7.117-15.896-15.899v-87.652c0-8.782,7.117-15.899,15.896-15.899
          c8.782,0,15.899,7.117,15.899,15.899V210.883z M188.929,210.883c0,8.782-7.12,15.899-15.899,15.899s-15.899-7.117-15.899-15.899
          V146.2c0-8.782,7.12-15.899,15.899-15.899s15.899,7.117,15.899,15.899V210.883z M234.869,210.883
          c0,8.782-7.117,15.899-15.899,15.899c-8.777,0-15.896-7.117-15.896-15.899v-44.009c0-8.779,7.12-15.899,15.896-15.899
          c8.782,0,15.899,7.12,15.899,15.899V210.883z"/></div>
        </div>
        <div class="music-control__volume-control music-control__ico" id="volume-control">
          <img src="/./src/assets/icons/next.svg" alt="Volume-hover" class="volume-control">
        </div>
      </div>
      <div class="option">
        <label for="volume"></label>
        <input type="range" min="0" max="1" step="0.1" name="volume" id="volume" value="0.1">
      </div>`;
    backgroundSoundContainer.innerHTML = template;
    this.main.appendChild(backgroundSoundContainer);
    return this.main;
  }
}
