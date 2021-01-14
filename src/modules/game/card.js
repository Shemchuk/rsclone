/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';
// eslint-disable-next-line import/no-cycle
import { mainGamePlay } from './gameContainer';
import { teams } from './timer';

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

let i = 1;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  const clickNextRound = e.target.closest('.round-stat-modal__button');
  const clickCardsForAdults = e.target.closest('.cards__for-adults');
  const clickCardsGeneral = e.target.closest('.cards__general');
  if (clickReady) {
    teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i].nameRus;
    arrConfirmed.push(currentCardsStack[0 + i]);
    document.querySelector('.team-container__team-points').innerHTML = teams[teamFlag].points;
  } else if (clickSkip) {
    document.querySelector('.card__word').innerHTML = currentCardsStack[0 + i].nameRus;
    arrSkiped.push(currentCardsStack[0 + i]);
  } else if (clickNextRound) {
    teamFlag = teamFlag ? 0 : 1;
    nextRound();
  } else if (clickCardsForAdults) {
    currentCardsStack = cards.forAdults;
    shuffleCards();
    document.querySelector('.cards-selection-container').style.display = 'none';
    mainGamePlay();
  } else if (clickCardsGeneral) {
    currentCardsStack = cards.main;
    shuffleCards();
    document.querySelector('.cards-selection-container').style.display = 'none';
    mainGamePlay();
  }
  i += 1;
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.main');
  buttonsContainer.addEventListener('click', clickContainerButtons);
}

export { generateCard, shuffleCards, buttonsClickHandler, arrConfirmed, arrSkiped };
