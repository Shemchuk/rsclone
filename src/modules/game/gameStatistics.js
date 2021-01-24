// Statistics modal window after round
// import {arrConfirmed, arrSkiped}
// import game from './gameContainer';
import Language from '../lang/Language';
import { currentWordsLang } from './card';

const langObject = new Language();
// const lang = langObject.getCurrentLangObject().game; // Object "game"
const langName = Language.getCurrentLangName(); // 'en' | 'ru'
// =========== LANG =============== //

const generateRoundStatisticsModal = () => {
  const lang = langObject.getCurrentLangObject().game;
  let template = '';
  const roundStatModal = document.createElement('div');
  roundStatModal.className = 'round-stat-modal hidden';
  template += `<div class="sign-wrap">`;
  template += `<div class="sign sign5">`;
  template += `<div class="round-stat-modal__container">`;
  template += `<div class="round-stat-confirmed round-stat__border">`;
  template += `<h2 class="round-stat-confirmed__title">${lang.roundStatisticsModalConfirmed}</h2>`;
  template += `<span class="round-stat__container round-stat-confirmed__container"></span>`;
  template += `</div>`;
  template += `<div class="round-stat-skiped round-stat__border">`;
  template += `<h2 class="round-stat-skiped__title">${lang.roundStatisticsModalSkiped}</h2>`;
  template += `<span class="round-stat__container round-stat-skiped__container"></span>`;
  template += `</div>`;
  template += `</div>`;
  template += `<button class="button round-stat-modal__button btn btn-neon btn-purple btn-slow"><span></span><span></span><span></span><span></span>${lang.roundStatisticsNextRound}</button>`;
  template += `</div></div>`;

  roundStatModal.innerHTML = template;
  return roundStatModal;
};

// Confirmed statistics cell
const generateConfirmedStatisticsCell = (data) => {
  const confirmedCell = document.createElement('div');
  confirmedCell.className = 'round-stat-confirmed__cell';
  confirmedCell.innerHTML = `${data[currentWordsLang]}`;
  return confirmedCell;
};
// Ckiped statistics cell
const generateSkipedStatisticsCell = (data) => {
  const skipedCell = document.createElement('div');
  skipedCell.className = 'round-stat-skiped__cell';
  skipedCell.innerHTML = `${data[currentWordsLang]}`;
  return skipedCell;
};

export {
  generateConfirmedStatisticsCell,
  generateRoundStatisticsModal,
  generateSkipedStatisticsCell,
};
