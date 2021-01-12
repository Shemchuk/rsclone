/* eslint-disable import/named */
import { generateCard, shuffleCards, buttonsClickHandler } from './card';
import cards from '../cards';
import setTimer from './timer';

export default function game() {
  // Game container
  const generateGameContainer = () => {
    let template = '';
    const gameContainer = document.createElement('div');
    gameContainer.className = 'game-container';
    template += `<div class="timer-container">`;
    template += `<button class="button timer-container__button">start</button>`;
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
  buttonsClickHandler();
  shuffleCards(cards);
  generateCard();
  setTimer();
}
