/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

// import CONST from './modules/Constants';

import { game } from './modules/game/gameContainer';
import { loadingBeforeMenu } from './modules/game/loadingBeforeMenu';
import Menu from './modules/Menu';
import generateFooter from './modules/footer';
import CreateBackgroundSound from './modules/backgroundSound/createBackgroundSound';
import BackgroundSound from './modules/backgroundSound/backgroundSound';
import CreatePause from './modules/pause/createPause';
import Pause from './modules/pause/pause';
// import swipe from './modules/game/swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { MDCRipple } from '@material/ripple/index';
// import { MDCSlider } from '@material/slider/index';

window.onload = () => {
  console.log('Project starts');
  // loadingBeforeMenu();
  // generateFooter();
  // const menu = new Menu();
  // menu.init();

  // const createBackgroundSound = new CreateBackgroundSound();
  // createBackgroundSound.init();
  // const backgroundSound = new BackgroundSound();
  // backgroundSound.init();

  const createPause = new CreatePause();
  createPause.init();
  const pause = new Pause();
  pause.init();

  // eslint-disable-next-line no-unused-vars
  // const ripple = new MDCRipple(document.querySelector('.mdc-button'));
  // const slider1 = new MDCSlider(document.querySelector('.slider__words__count'));
  // const slider2 = new MDCSlider(document.querySelector('.slider__round__time'));
};

// game();
