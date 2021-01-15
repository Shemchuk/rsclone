/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable no-use-before-define */
/* eslint-disable import/named */
import { generateCard, buttonsClickHandler, teamFlag } from './card';
import countdown, { teams } from './timer';
import { generateRoundStatisticsModal } from './gameStatistics';
// Cards selection container
export const generateCardsSeletionContainer = () => {
  let template = '';
  const cardsSelectionContainer = document.createElement('div');
  cardsSelectionContainer.className = 'cards-selection-container';
  template += `<div class="cards-selection-container__title">Выберите набор карт</div>`;
  template += `<div class="cards-container1"></div>`;
  template += `<div class="cards-container2"></div>`;
  template += `</div>`;
  cardsSelectionContainer.innerHTML = template;
  return cardsSelectionContainer;
};
export const generateCardsForSelection = () => {
  const cardsForSelection = document.querySelector('.cards-container1');
  let template = '';
  for (let i = 0; i < 25; i++) {
    template += `<div class="cards__for-adults cards-container__cards">Колода для взрослых</div>`;
  }
  cardsForSelection.innerHTML = template;
  return cardsForSelection;
};

export const generateCardsForSelection2 = () => {
  const cardsForSelection = document.querySelector('.cards-container2');
  let template = '';
  for (let i = 0; i < 25; i++) {
    template += `<div class="cards__main cards-container__cards2">Разное</div>`;
  }
  cardsForSelection.innerHTML = template;
  return cardsForSelection;
};
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
  let template = '';
  const gameContainer = document.createElement('div');
  gameContainer.className = 'game-container';
  template += `<div class="team-container">`;
  template += `<div class="team-container__team-name">${teams[teamFlag].name}</div>`;
  template += `<div class="team-container__team-points">${teams[teamFlag].points}</div>`;
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
export const generateFinishGameModal = () => {
  let template = '';
  const finishGameModal = document.createElement('div');
  finishGameModal.className = 'finish-game-modal';
  template += `<div class="finish-game-modal__title">Игра окончена!</div>`;
  template += `<div class="finish-game-modal__1st-place_name">Победила команда ${teams[0].name}</div>`;
  template += `<div class="finish-game-modal__1st-place_points">${teams[0].points} очков</div>`;
  template += `<button class="button finish-game-modal__button">Назад в меню</button>`;
  finishGameModal.innerHTML = template;
  return finishGameModal;
};
export function game() {
  document.querySelector('.main').appendChild(generateCardsSeletionContainer());
  generateCardsForSelection();
  generateCardsForSelection2();
  gsap.from('.cards-container__cards', {
    duration: 1.5,
    opacity: 1,
    y: -850,
    x: -1150,
    stagger: 0.1,
    ease: 'back.in',
  });
  gsap.from('.cards-container__cards2', {
    duration: 1.5,
    opacity: 1,
    y: -850,
    x: -1150,
    stagger: 0.1,
    ease: 'back.in',
  });

  buttonsClickHandler();
}

export function mainGamePlay() {
  document.querySelector('.main').appendChild(generateGameContainer());
  document.querySelector('.main').appendChild(generateRoundStatisticsModal());
  generateCard();
  countdown();
}
