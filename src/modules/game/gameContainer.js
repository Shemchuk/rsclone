/* eslint-disable import/named */
import { generateCard, buttonsClickHandler } from './card';

import countdown from './timer';
import { generateRoundStatisticsModal } from './gameStatistics';
import { teamPoints } from './card';
// Game container
export const generateGameContainer = () => {
  let template = '';
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  template += `<div class="team-container">`;
  template += `<div class="team-container__team-name">${teamNames[TeamFlag]}</div>`;
  template += `<div class="team-container__team-points">${teamPoints[TeamFlag]}</div>`;
  template += `<div class="team-container__timer"></div>`;
  template += `</div>`;
  template += '<div class="card game-container__card">';
  template += `<div class="card__word"></div>`;
  template += `</div>`;
  template += `<div class="game-container__buttons">`;
  template += '<button class="button game-container__button_skip">Пропустить</button>';
  template += '<button class="button game-container__button_ready">Готово</button>';
  template += `</div>`;
  gameContainer.innerHTML = template;
  return gameContainer;
};

export default function game() {
  document.querySelector('.main').appendChild(generateGameContainer());
  document.querySelector('.main').appendChild(generateRoundStatisticsModal());
  buttonsClickHandler();
  generateCard();
  countdown();
}

// ___________________________________Temporary data______________________________________________
export const teamNames = ['Team 1', 'Team 2'];
export const teamPoints = ['0','0']

export let TeamFlag = 0;
