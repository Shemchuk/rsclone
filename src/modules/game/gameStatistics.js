// Statistics modal window after round
// import {arrConfirmed, arrSkiped}
// import game from './gameContainer';

const generateRoundStatisticsModal = () => {
  let template = '';
  const roundStatModal = document.createElement('div');
  roundStatModal.className = 'round-stat-modal hidden';
  template += `<div class="sign-wrap">`;
  template += `<div class="sign sign5">`;
  template += `<div class="round-stat-modal__container">`;

  template += `<div class="round-stat-confirmed round-stat__border">`;
  template += `<h2 class="round-stat-confirmed__title">Выполнено:`;
  template += `<span class="round-stat-confirmed__container"></span>`;
  template += `</h2></div>`;
  template += `<div class="round-stat-skiped round-stat__border">`;
  template += `<h2 class="round-stat-skiped__title">Пропущено:`;
  template += `<span class="round-stat-skiped__container"></span>`;
  template += `</div>`;
  template += `</div>`;
  template +=
    '<button class="button round-stat-modal__button btn btn-neon btn-purple btn-slow"><span></span><span></span><span></span><span></span>Следующий раунд</button>';
  template += `</div></div>`;

  roundStatModal.innerHTML = template;
  return roundStatModal;
};

// Confirmed statistics cell
const generateConfirmedStatisticsCell = (data) => {
  const confirmedCell = document.createElement('div');
  confirmedCell.className = 'round-stat-confirmed__cell';
  confirmedCell.innerHTML = `${data.nameRus}`;
  return confirmedCell;
};
// Ckiped statistics cell
const generateSkipedStatisticsCell = (data) => {
  const skipedCell = document.createElement('div');
  skipedCell.className = 'round-stat-skiped__cell';
  skipedCell.innerHTML = `${data.nameRus}`;
  return skipedCell;
};

export {
  generateConfirmedStatisticsCell,
  generateRoundStatisticsModal,
  generateSkipedStatisticsCell,
};
