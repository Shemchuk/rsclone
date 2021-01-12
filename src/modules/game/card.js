/* eslint-disable no-unreachable */
/* eslint-disable no-console */
import cards from '../cards';

// Generate random cards
function shuffleCards(arr) {
  return arr.main.sort(() => Math.round(Math.random() * 100) - 50);
}

// Card
function generateCard() {
  document.querySelector('.card__word').innerHTML = cards.main[0].nameRus;
}

// Buttons clickhandler
let i = 1;
function clickContainerButtons(e) {
  const clickReady = e.target.closest('.game-container__button_ready');
  const clickSkip = e.target.closest('.game-container__button_skip');
  if (clickReady) {
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
  } else if (clickSkip) {
    document.querySelector('.card__word').innerHTML = cards.main[0 + i].nameRus;
  }
  i += 1;
}
function buttonsClickHandler() {
  const buttonsContainer = document.querySelector('.game-container__buttons');
  buttonsContainer.addEventListener('click', clickContainerButtons);
}

export { generateCard, shuffleCards, buttonsClickHandler };
