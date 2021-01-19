/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

// import CONST from './modules/Constants';

import { game } from './modules/game/gameContainer';

import Menu from './modules/Menu';

// eslint-disable-next-line import/no-extraneous-dependencies
// import { MDCRipple } from '@material/ripple/index';
// import { MDCSlider } from '@material/slider/index';

window.onload = () => {
  console.log('Project starts');
  // const menu = new Menu();
  // menu.init();

  // eslint-disable-next-line no-unused-vars
  // const ripple = new MDCRipple(document.querySelector('.mdc-button'));
  // const slider1 = new MDCSlider(document.querySelector('.slider__words__count'));
  // const slider2 = new MDCSlider(document.querySelector('.slider__round__time'));
};

game();
