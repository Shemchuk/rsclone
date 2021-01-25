/* eslint-disable no-undef */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
// const gsap;
import { generateCard, buttonsClickHandler, teamFlag, arrConfirmed, arrSkiped } from './card';
import countdown, { teams } from './timer';
import { generateRoundStatisticsModal } from './gameStatistics';
import Language from '../lang/Language';

// Cards selection container
export const generateCardsSeletionContainer = () => {
  const langObject = new Language();
  const lang = langObject.getCurrentLangObject().game;
  const langName = Language.getCurrentLangName();
  let template = '';
  const cardsSelectionContainer = document.createElement('div');
  cardsSelectionContainer.className = 'cards-selection-container';
  if (langName === 'ru') {
    template += `<div class="cards-selection-container__title">`;
    template += `<div id="container"><div class="sign-wrap"><div class="sign">`;
    template += `<h1 class="h1-ru">Режим игры</h1>`;
    template += `</div></div></div>`;
    template += `</div>`;
  } else {
    template += `<div class="cards-selection-container__title">`;
    template += `<div id="container"><div class="sign-wrap"><div class="sign">`;
    template += `<h1 class="h1-eng">Game mode</h1>`;
    template += `</div></div></div>`;
    template += `</div>`;
  }
  template += `<div class="cards-selection-container__cards">`;
  template += `<div class="cards__for-adults cards-container__cards">`;
  template += `<div id="container"><div class="sign-wrap"><div class="sign sign1">`;
  template += `<p class="first-child"><a>18+</a></p>`;
  template += `</div></div></div>`;
  template += `</div>`;
  template += `<div class="cards__main cards-container__cards2">`;
  template += `<div id="container"><div class="sign-wrap"><div class="sign sign2">`;
  template += `<p class="second-child"><a>${lang.cardsSeletionContainerClassic}</a></p>`;
  template += `</div></div></div>`;
  template += `</div>`;
  template += `</div>`;
  cardsSelectionContainer.innerHTML = template;
  return cardsSelectionContainer;
};

// Game container
export const generateGameContainer = () => {
  document.querySelector('.main').innerHTML = '';
  const langObject = new Language();
  const lang = langObject.getCurrentLangObject().game;
  let template = '';
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  template += `<div class="team-container">`;
  template += `<div class="team-container__team-name">`;
  template += `<div class="sign-wrap"><div class="sign sign4">`;
  template += `<div class="team-container__timer"><div>`;
  template += `<h2>${lang.gameContainerTime} <span class="first"></span></h2>`;
  template += `</div></div>`;
  template += `<p class="third-child"><a>${teams[teamFlag].name}</a></p>`;
  template += `<div class="team-container__team-points"><div>`;
  template += `<h2>${lang.gameContainerPoints}`;
  template += `<span class="second">${teams[teamFlag].points}</span>`;
  template += `</h2>`;
  template += `</div></div>`;
  template += `</div></div>`;
  template += `</div></div>`;
  template += '<div class="card game-container__card">';
  template += `<div class="sign-wrap"><div class="sign sign5">`;
  template += `<button class="button game-container__button_ready btn btn-neon btn-slow">`;
  template += `<span></span><span></span><span></span><span></span>`;
  template += `${lang.gameContainerReady}</button>`;
  template += `<div class="neon"><div class="neon" id="section16">`;
  template += `<p class="card__word neon"></p>`;
  template += `</div></div>`;
  template += `<button class="button game-container__button_skip btn btn-neon btn-blue btn-slow">`;
  template += `<span></span><span></span><span></span><span></span>`;
  template += `${lang.gameContainerSkip}</button>`;
  template += `</div></div>`;
  gameContainer.innerHTML = template;
  return gameContainer;
};
export const generateFinishGameModal = () => {
  document.querySelector('.main').innerHTML = '';
  const langObject = new Language();
  const lang = langObject.getCurrentLangObject().game;
  const langName = Language.getCurrentLangName();
  let template = '';
  const finishGameModal = document.createElement('div');
  finishGameModal.className = 'finish-game-modal';
  if (langName === 'ru') {
    template += `<div class="finish-game-modal__title">`;
    template += `<div class="sign-wrap"><div class="sign">`;
    template += `<h1 class="h1-end-ru">Конец игры!</h1>`;
    template += `</div></div>`;
    template += `</div>`;
  } else {
    template += `<div class="finish-game-modal__title">`;
    template += `<div class="sign-wrap"><div class="sign">`;
    template += `<h1 class="h1-end-eng">Game over!</h1>`;
    template += `</div></div>`;
    template += `</div>`;
  }
  template += `<div class="sign-wrap finish-modal">`;
  template += `<div class="sign"><div class="finish-game-modal__1st-place">`;
  template += `<div><h2>${lang.finishGameModalWin}`;
  template += `<span class="second">${lang.finishGameModalTeam}</span>`;
  template += `</h2></div>`;
  template += `</div>`;
  template += `<div class="finish-game-modal__1st-place_name">`;
  template += `<p class="third-child"><a>${teams[0].name}</a></p></div>`;
  template += `<div class="finish-game-modal__1st-place_points"><div>`;
  template += `<h2>${lang.gameContainerPoints} <span class="second">${teams[0].points}</span></h2>`;
  template += `</div></div>`;
  template += `<button class="back-to-main-menu__button btn btn-neon btn-purple btn-slow">`;
  template += `<span></span><span></span><span></span><span></span>${lang.finishGameModalBackToMenu}</button>`;
  template += `</div>`;
  finishGameModal.innerHTML = template;
  return finishGameModal;
};
export function game() {
  document.querySelector('.main').appendChild(generateCardsSeletionContainer());
  gsap.from('.cards-container__cards2', { duration: 1, ease: 'power1.out', x: 1500 });
  gsap.from('.cards-container__cards', { duration: 1, ease: 'power1.out', x: -1500 });
  gsap.from('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
  buttonsClickHandler();
}

export function mainGamePlay() {
  document.querySelector('.main').appendChild(generateGameContainer());
  document.querySelector('.game-container').appendChild(generateRoundStatisticsModal());
  gsap.from('.team-container', { duration: 1, ease: 'power1.out', y: -500 });
  gsap.from('.game-container__card', { duration: 1, ease: 'power1.out', y: 500 });
  countdown();
  generateCard();
  document.querySelector('.round-stat-modal').style.display = 'none';
}
