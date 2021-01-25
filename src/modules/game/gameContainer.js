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
// import { defaultSettings } from '../Constants';

// =========== LANG =============== //
// const langObject = new Language();
// const lang = langObject.getCurrentLangObject().game; // Object "game"
// const langName = Language.getCurrentLangName(); // 'en' | 'ru'
// =========== LANG =============== //
// let setaliasSettings;
// export let time;
// export let finishGamePoints;

// Cards selection container
export const generateCardsSeletionContainer = () => {
  const langObject = new Language();
  const lang = langObject.getCurrentLangObject().game;
  const langName = Language.getCurrentLangName();
  let template = '';
  const cardsSelectionContainer = document.createElement('div');
  cardsSelectionContainer.className = 'cards-selection-container';
  if (langName == 'ru') {
    template += `<div class="cards-selection-container__title"><div id="container"><div class="sign-wrap">
    <div class="sign">
      <h1 class="h1-ru">Режим игры</h1>
    </div>
    </div></div></div>`;
  } else {
    template += `<div class="cards-selection-container__title"><div id="container"><div class="sign-wrap">
    <div class="sign">
      <h1 class="h1-eng">Game mode</h1>
    </div>
    </div></div></div>`;
  }

  template += `<div class="cards-selection-container__cards">`;
  template += `<div class="cards__for-adults cards-container__cards"><div id="container"><div class="sign-wrap">
  <div class="sign sign1"><p class="first-child"><a href="#">
  18+
</a></p></div></div></div></div>`;
  template += `<div class="cards__main cards-container__cards2"><div id="container"><div class="sign-wrap">
  <div class="sign sign2"><p class="second-child"><a href="#">
  ${lang.cardsSeletionContainerClassic}
</a></p></div></div></div></div>`;
  // template += `<div class="cards-container1"></div>`;
  // template += `<div class="cards-container2"></div>`;
  template += `</div>`;

  cardsSelectionContainer.innerHTML = template;
  return cardsSelectionContainer;
};
// export const generateCardsForSelection = () => {
//   const cardsForSelection = document.querySelector('.cards-container1');
//   let template = '';
//   for (let i = 0; i < 15; i++) {
//     template += `<div class="cards__for-adults cards-container__cards">Колода для взрослых</div>`;
//   }
//   cardsForSelection.innerHTML = template;
//   return cardsForSelection;
// };

// export const generateCardsForSelection2 = () => {
//   const cardsForSelection = document.querySelector('.cards-container2');
//   let template = '';
//   for (let i = 0; i < 15; i++) {
//     template += `<div class="cards__main cards-container__cards2">Разное</div>`;
//   }
//   cardsForSelection.innerHTML = template;
//   return cardsForSelection;
// };
// Cards cell for Cards container
// export const generateCardsContainerCell = () => {
//   let template = '';
//   const cardsContainerCell = document.createElement('div');
//   cardsContainerCell.className = 'cards-container__cell';
//   template += `<div class="cards-selection-container__title">${}</div>`;
//   template += `<div class="cards-container">`;
//   cardsContainerCell.innerHTML = template;
//   return cardsContainerCell;
// };

// Game container
export const generateGameContainer = () => {
  document.querySelector('.main').innerHTML = '';
  const langObject = new Language();
  const lang = langObject.getCurrentLangObject().game;
  let template = '';
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  template += `<div class="team-container">`;
  template += `<div class="team-container__team-name"><div class="sign-wrap">
  <div class="sign sign4"><div class="team-container__timer"><div><h2>
  ${lang.gameContainerTime} <span class="first"></span>
</h2>
</div></div><p class="third-child"><a href="#">
  ${teams[teamFlag].name}
</a></p><div class="team-container__team-points"><div><h2>
${lang.gameContainerPoints} <span class="second">${teams[teamFlag].points}</span>
</h2>
</div></div>
  </div></div></div>`;
  template += `</div>`;
  template += '<div class="card game-container__card">';
  template += `<div class="sign-wrap">
  <div class="sign sign5">`;
  template += `<button class="button game-container__button_ready btn btn-neon btn-slow"><span></span><span></span><span></span><span></span> ${lang.gameContainerReady}</button>`;

  template += `<div class="neon">
  <div class="neon" id="section16">
    <p class="card__word neon"></p>
  </div>
  </div>`;
  template += `<button class="button game-container__button_skip btn btn-neon btn-blue btn-slow"><span></span><span></span><span></span><span></span> ${lang.gameContainerSkip}</button>`;

  template += `</div>`;
  template += `</div>`;
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
  if (langName == 'ru') {
    template += `<div class="finish-game-modal__title"><div class="sign-wrap">
  <div class="sign">
    <h1 class="h1-end-ru">Конец игры!</h1>
  </div>
  </div></div>`;
  } else {
    template += `<div class="finish-game-modal__title"><div class="sign-wrap">
  <div class="sign">
    <h1 class="h1-end-eng">Game over!</h1>
  </div>
  </div></div>`;
  }
  template += `<div class="sign-wrap"><div class="sign"><div class="finish-game-modal__1st-place"><div><h2>
  ${lang.finishGameModalWin} <span class="second">${lang.finishGameModalTeam}</span>
  </h2></div></div>`;
  template += `<div class="finish-game-modal__1st-place_name"><p class="third-child"><a href="#">${teams[0].name}</a></p></div>`;
  template += `<div class="finish-game-modal__1st-place_points"><div><h2>
  ${lang.gameContainerPoints} <span class="second">${teams[0].points}</span>
  </h2></div></div>`;
  template += `<button class="back-to-main-menu__button btn btn-neon btn-purple btn-slow"><span></span><span></span><span></span><span></span>${lang.finishGameModalBackToMenu}</button></div>`;
  finishGameModal.innerHTML = template;
  return finishGameModal;
};
export function game() {
  document.querySelector('.main').appendChild(generateCardsSeletionContainer());
  gsap.from('.cards-container__cards2', { duration: 1, ease: 'power1.out', x: 1500 });
  gsap.from('.cards-container__cards', { duration: 1, ease: 'power1.out', x: -1500 });
  gsap.from('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
  // setaliasSettings = get('aliasSettings', defaultSettings);
  // time = setaliasSettings.roundTime;
  // finishGamePoints = setaliasSettings.wordsCount;
  // generateCardsForSelection();
  // generateCardsForSelection2();
  // gsap.from('.cards__for-adults', {
  //   duration: 1.5,
  //   opacity: 1,
  //   y: -500,
  //   x: -500,
  //   stagger: 0.1,
  //   ease: 'back.in',
  // });
  // gsap.from('.cards__main', {
  //   duration: 1.5,
  //   opacity: 1,
  //   y: -500,
  //   x: 500,
  //   stagger: 0.1,
  //   ease: 'back.in',
  // });
  buttonsClickHandler();
}

export function mainGamePlay() {
  document.querySelector('.main').innerHTML = '';
  document.querySelector('.main').appendChild(generateGameContainer());
  document.querySelector('.game-container').appendChild(generateRoundStatisticsModal());

  gsap.from('.team-container', { duration: 1, ease: 'power1.out', y: -500 });
  gsap.from('.game-container__card', { duration: 1, ease: 'power1.out', y: 500 });
  countdown();
  generateCard();

  document.querySelector('.round-stat-modal').style.display = 'none';
}
