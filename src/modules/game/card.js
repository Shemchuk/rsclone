/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';
// eslint-disable-next-line import/no-cycle
import { teams, game } from './gameContainer';

export let teamFlag = 0;
// import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
// Cash arrays for statistics
const arrConfirmed = [];
const arrSkiped = [];
// const arrAnException = [];
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
  addGlobalStatisticsTeam(teamFlag, arrConfirmed, arrSkiped);
  arrConfirmed.length = 0;
  arrSkiped.length = 0;
  game();
}
// Add statistics teams in global array-stat
function addGlobalStatisticsTeam(teamIndex, confirmedArr, skipedArr) {
  console.log(teams[teamIndex].answers.confirmed);
  teams[teamIndex].answers.confirmed.push(...confirmedArr.slice());
  teams[teamIndex].answers.skiped.push(...skipedArr.slice());
}
// Buttons clickhandler
let i = 1;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  const clickNextRound = e.target.closest('.round-stat-modal__button');
  if (clickReady) {
    teams[teamFlag].points += 1;
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
    arrConfirmed.push(cards.main[0 + i]);
    document.querySelector('.team-container__team-points').innerHTML = teams[teamFlag].points;
  } else if (clickSkip) {
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
    arrSkiped.push(cards.main[0 + i]);
  } else if (clickNextRound) {
    teamFlag = teamFlag ? 0 : 1;
    nextRound();
  }
  i += 1;
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.main');
  buttonsContainer.addEventListener('click', clickContainerButtons);
}

export { generateCard, shuffleCards, buttonsClickHandler, arrConfirmed, arrSkiped };
