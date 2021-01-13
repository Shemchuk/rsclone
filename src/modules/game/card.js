/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';
import game from './gameContainer';
// import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
// Cash arrays for statistics
const arrConfirmed = [];
const arrSkiped = [];
const arrAnException = [];
// Generate random cards
function shuffleCards(arr) {
  return arr.main.sort(() => Math.round(Math.random() * 100) - 50);
}
shuffleCards(cards);

// Card
function generateCard() {
  document.querySelector('.card__word').innerHTML = cards.main[0].nameRus;
}
// Next round function
function nextRound() {
  document.querySelector('.main').innerHTML = '';
  // arrAnException.push(arrConfirmed, arrSkiped);
  // console.log(arrAnException);
  arrConfirmed.length = 0;
  arrSkiped.length = 0;
  game();
}

// Buttons clickhandler
let i = 1;
let pointsIndex = 0;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  const clickNextRound = e.target.closest('.round-stat-modal__button');
  if (clickReady) {
    pointsIndex+=1
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
    arrConfirmed.push(cards.main[0 + i]);
    teamPoints.splice(TeamFlag,1,pointsIndex);
    document.querySelector('.team-container__team-points').innerHTML = teamPoints;
  } else if (clickSkip) {
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
    arrSkiped.push(cards.main[0 + i]);
  } else if (clickNextRound) {
    nextRound();
    pointsIndex = 0;
  }
  i += 1;
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.main');
  buttonsContainer.addEventListener('click', clickContainerButtons);
}

export { generateCard, shuffleCards, buttonsClickHandler, arrConfirmed, arrSkiped, teamPoints };
