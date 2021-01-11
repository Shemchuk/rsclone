import cards from '../cards';

// Card
function generateCard() {
  document.querySelector('.card__word').innerHTML = cards.main[0].nameRus;
}

console.log(cards);

export default generateCard;
