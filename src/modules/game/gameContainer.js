/* eslint-disable import/named */
import { generateCard, shuffleCards, buttonsClickHandler } from './card';
import cards from '../cards';
import countdown from './timer';
import { generateRoundStatisticsModal } from './gameStatistics';

export default function game() {
  // Game container
  const generateGameContainer = () => {
    let template = '';
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';
    template += `<div class="timer-container">`;
    template += `<div class="timer-container__display"></div>`;
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
  document.querySelector('.main').appendChild(generateGameContainer());
  document.querySelector('.main').appendChild(generateRoundStatisticsModal());
  buttonsClickHandler();
  shuffleCards(cards);
  generateCard();
  countdown();
}
