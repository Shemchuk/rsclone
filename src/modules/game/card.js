/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';
// eslint-disable-next-line import/no-cycle
import { mainGamePlay } from './gameContainer';
import { teams } from './timer';
import Menu from '../Menu';

export let teamFlag = 0;
// import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
// Cash arrays for statistics
const arrConfirmed = [];
const arrSkiped = [];
let currentCardsStack;

// const arrAnException = [];
// Generate random cards
function shuffleCards() {
  return currentCardsStack.sort(() => Math.round(Math.random() * 100) - 50);
}

// Card
function generateCard() {
  document.querySelector('.card__word').innerHTML = currentCardsStack[0].nameRus;
}
// Next round function
function nextRound() {
  document.querySelector('.main').innerHTML = '';
  // arrAnException.push(arrConfirmed, arrSkiped);
  // console.log(arrAnException);
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
  console.log(rotationGradient);
}
let i = 1;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  const clickNextRound = e.target.closest('.round-stat-modal__button');
  const clickCardsForAdults = e.target.closest('.cards__for-adults');
  const clickCardsGeneral = e.target.closest('.cards__main');
  const clickBackToMainMenu = e.target.closest('.back-to-main-menu__button');
  if (clickReady) {
    rotationGradient -= 360;
    teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i].nameRus;
    arrConfirmed.push(currentCardsStack[0 + i]);
    document.querySelector('.second').innerHTML = teams[teamFlag].points;
    rotationGameContainer();
  } else if (clickSkip) {
    rotationGradient += 360;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i].nameRus;
    arrSkiped.push(currentCardsStack[0 + i]);
    rotationGameContainer();
  } else if (clickNextRound) {
    if (teamFlag < teams.length - 1) {
      teamFlag += 1;
    } else {
      teamFlag = 0;
    }
    gsap.to('.team-container__team-name', { duration: 1, ease: 'power1.out', y: -500 });
    gsap.to('.round-stat-modal', { duration: 1, ease: 'power1.out', y: 500 });
    rotationGradient = 0;
    setTimeout(function () {
      nextRound();
    }, 1000);
  } else if (clickCardsForAdults) {
    currentCardsStack = cards.forAdults;
    shuffleCards();
    gsap.to('.cards__for-adults', { duration: 1, ease: 'power1.out', x: -1000 });
    gsap.to('.cards__main', { duration: 1, ease: 'power1.out', x: 1000 });
    gsap.to('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
    setTimeout(function () {
      document.querySelector('.cards-selection-container').style.display = 'none';
      mainGamePlay();
    }, 1000);
  } else if (clickCardsGeneral) {
    currentCardsStack = cards.main;
    gsap.to('.cards__for-adults', { duration: 1, ease: 'power1.out', x: -1000 });
    gsap.to('.cards__main', { duration: 1, ease: 'power1.out', x: 1000 });
    gsap.to('.cards-selection-container__title', { duration: 1, ease: 'power1.out', y: -500 });
    shuffleCards();
    setTimeout(function () {
      document.querySelector('.cards-selection-container').style.display = 'none';
      mainGamePlay();
    }, 1000);
  } else if (clickBackToMainMenu) {
    // Menu.showMenu('main-menu');
    document.querySelector('.main').innerHTML = '';
    const menu = new Menu();
    menu.init();
  }
  i += 1;
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.main');
  buttonsContainer.addEventListener('click', clickContainerButtons);
}

export { generateCard, shuffleCards, buttonsClickHandler, arrConfirmed, arrSkiped };
