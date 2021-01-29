/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';
// eslint-disable-next-line import/no-cycle
import { mainGamePlay } from './gameContainer';
import { teams, time } from './timer';
import Menu from '../Menu';
import Language from '../lang/Language';
import { generateLoardingBeforeMenu } from './loadingBeforeMenu';
import soundLinks from '../sound/soundLinks';
import Hotkeys from '../Hotkeys';

export let teamFlag = 0;
// import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
// Cash arrays for statistics
const arrConfirmed = [];
const arrSkiped = [];
let currentCardsStack;
export let pauseFlag = false;

// For words lang
export let currentWordsLang;

// For audio
const aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
const gameHotkeys = new Hotkeys();

// =========== LANG =============== //
// const langObject = new Language();
// const lang = langObject.getCurrentLangObject().game; // Object "game"

// =========== LANG =============== //

// const arrAnException = [];
// Chose card words lang from langName
function choseCurrentCardsLang() {
  const langName = Language.getCurrentLangName(); // 'en' | 'ru'
  if (langName === 'en') {
    currentWordsLang = 'nameEng';
  } else if (langName === 'ru') {
    currentWordsLang = 'nameRus';
  }
}
// Generate random cards
function shuffleCards() {
  return currentCardsStack.sort(() => Math.round(Math.random() * 100) - 50);
}

// Card
function generateCard() {
  // choseCurrentCardsLang();
  document.querySelector('.card__word').innerHTML = currentCardsStack[i][currentWordsLang];
  i++;
  gameHotkeys.setGameHandler();
}

// Next round function
function nextRound() {
  document.querySelector('.main').innerHTML = '';
  addGlobalStatisticsTeam(teamFlag, arrConfirmed, arrSkiped);
  arrConfirmed.length = 0;
  arrSkiped.length = 0;
  mainGamePlay();
}
// Add statistics teams in global array-stat
function addGlobalStatisticsTeam(teamIndex, confirmedArr, skipedArr) {
  teams[teamIndex].answers.confirmed.push(...confirmedArr.slice());
  teams[teamIndex].answers.skiped.push(...skipedArr.slice());
}
// Buttons clickhandler
let rotationGradient = 0;

function rotationGameContainer() {
  gsap.to('.game-container__card', { duration: 0.9, rotationX: rotationGradient });
}
let i = 1;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  const clickNextRound = e.target.closest('.round-stat-modal__button');
  const clickCardsForAdults = e.target.closest('.cards__for-adults');
  const clickCardsGeneral = e.target.closest('.cards__main');
  const clickBackToMainMenu = e.target.closest('.back-to-main-menu__button');
  const clickHideFooterButton = e.target.closest('.hide-footer');
  const clickShowFooterButton = e.target.closest('.show-footer');
  const clickPauseMenu = e.target.closest('.pause-menu');
  const clickResume = e.target.closest('.pause__btn_resume');
  // if (aliasSettings.isSounds === 'true') {
  //   const gameAudio = new Audio();
  //   gameAudio.src = soundLinks.skipCardClick;
  //   gameAudio.play();
  // }

  if (clickReady) {
    rotationGradient -= 360;
    teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
    arrConfirmed.push(currentCardsStack[i - 1]);
    document.querySelector('.second').innerHTML = teams[teamFlag].points;
    rotationGameContainer();
    i += 1;
  } else if (clickSkip) {
    rotationGradient += 360;
    document.querySelector('.card__word').innerHTML =
      currentCardsStack[0 + i - 1][currentWordsLang];
    arrSkiped.push(currentCardsStack[i - 1]);
    rotationGameContainer();
    i += 1;
  } else if (clickNextRound) {
    if (teamFlag < teams.length - 1) {
      teamFlag += 1;
    } else {
      teamFlag = 0;
    }
    gsap.to('.team-container__team-name', { duration: 1, ease: 'power1.out', y: -500 });
    gsap.to('.round-stat-modal', { duration: 1, ease: 'power1.out', y: 1000 });
    rotationGradient = 0;
    setTimeout(() => {
      nextRound();
      generateSwiper();
    }, 1000);
  } else if (clickCardsForAdults) {
    currentCardsStack = cards.forAdults;
    choseCurrentCardsLang();
    shuffleCards();
    gsap.to('.cards__for-adults', { duration: 1, ease: 'power1.out', x: -1000 });
    gsap.to('.cards__main', { duration: 1, ease: 'power1.out', x: 1000 });
    gsap.to('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
    setTimeout(() => {
      document.querySelector('.main').innerHTML = '';
      mainGamePlay();
      generateSwiper();
    }, 1000);
  } else if (clickCardsGeneral) {
    currentCardsStack = cards.main;
    choseCurrentCardsLang();
    gsap.to('.cards__for-adults', { duration: 1, ease: 'power1.out', x: -1000 });
    gsap.to('.cards__main', { duration: 1, ease: 'power1.out', x: 1000 });
    gsap.to('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
    shuffleCards();
    setTimeout(() => {
      document.querySelector('.main').innerHTML = '';
      mainGamePlay();
      generateSwiper();
    }, 1000);
  } else if (clickBackToMainMenu) {
    gsap.to('.finish-game-modal__title', { duration: 1, ease: 'power1.out', y: -500 });
    gsap.to('.finish-modal', { duration: 1, ease: 'power1.out', y: 500 });
    setTimeout(() => {
      document.querySelector('.main').innerHTML = '';
      document.querySelector('.main').appendChild(generateLoardingBeforeMenu());
      document.querySelector('.loading-line').style.display = 'none';
      document.querySelector('#ready').classList.remove('off');
      document.querySelector('#sign').classList.remove('off');
      const menu = new Menu();
      menu.init();
      gsap.from('#sign', { duration: 1, ease: 'power1.out', y: -500 });
      gsap.from('.menu', { duration: 1, ease: 'power1.out', y: 700 });
      shuffleCards();
      teams.length = 0;
      rotationGradient = 0;
      i = 1;
      teamFlag = 0;
      arrConfirmed.length = 0;
      arrSkiped.length = 0;
    }, 1000);
  } else if (clickHideFooterButton) {
    gsap.to('.footer', { duration: 1, ease: 'power1.out', y: 85 });
    document.querySelector('.show-footer').classList.remove('hide');
    document.querySelector('.hide-footer').classList.add('hide');
  } else if (clickShowFooterButton) {
    gsap.to('.footer', { duration: 1, ease: 'power1.out', y: 0 });
    document.querySelector('.show-footer').classList.add('hide');
    document.querySelector('.hide-footer').classList.remove('hide');
  } else if (clickPauseMenu) {
    document.querySelector('.pause').style.visibility = 'visible';
    pauseFlag = true;
  } else if (clickResume) {
    document.querySelector('.pause').style.visibility = 'hidden';
    pauseFlag = false;
  }
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.main');
  const footerHandler = document.querySelector('.footer');
  buttonsContainer.addEventListener('click', clickContainerButtons);
  footerHandler.addEventListener('click', clickContainerButtons);
}
buttonsClickHandler();

// Swiper
function generateSwiper() {
  const hammertime = new Hammer(document.querySelector('.game-container__card'), {
    enable: true,
    recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]],
  });

  hammertime.on('swipeup', () => {
    rotationGradient -= 360;
    teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
    arrConfirmed.push(currentCardsStack[0 + i]);
    document.querySelector('.second').innerHTML = teams[teamFlag].points;
    rotationGameContainer();
    i += 1;
  });

  hammertime.on('swipedown', () => {
    rotationGradient += 360;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i][currentWordsLang];
    arrSkiped.push(currentCardsStack[0 + i]);
    rotationGameContainer();
    i += 1;
  });
}

function generateSwiperFooter() {
  const hammertime = new Hammer(document.querySelector('.footer'), {
    enable: true,
    recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]],
  });

  hammertime.on('swipedown', () => {
    gsap.to('.footer', { duration: 1, ease: 'power1.out', y: 65 });
    document.querySelector('.show-footer').classList.remove('hide');
    document.querySelector('.hide-footer').classList.add('hide');
  });

  hammertime.on('swipeup', () => {
    gsap.to('.footer', { duration: 1, ease: 'power1.out', y: 0 });
    document.querySelector('.show-footer').classList.add('hide');
    document.querySelector('.hide-footer').classList.remove('hide');
  });
}
generateSwiperFooter();

export { generateCard, shuffleCards, buttonsClickHandler, arrConfirmed, arrSkiped };
