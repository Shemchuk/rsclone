// Statistics modal window after round
// import {arrConfirmed, arrSkiped}
// import game from './gameContainer';

const generateRoundStatisticsModal = () => {
  let template = '';
  const roundStatModal = document.createElement('div');
  roundStatModal.className = 'round-stat-modal hidden';
  template += `<div class="round-stat-modal__title">Имя команды</div>`;
  template += `<div class="round-stat-modal__container">`;
  template += `<div class="round-stat-confirmed">`;
  template += `<div class="round-stat-confirmed__title">Выполнено</div>`;
  template += `<div class="round-stat-confirmed__container"></div>`;
  template += `</div>`;
  template += `<div class="round-stat-skiped">`;
  template += `<div class="round-stat-skiped__title">Пропущено</div>`;
  template += `<div class="round-stat-skiped__container"></div>`;
  template += `</div>`;
  template += `</div>`;
  template += '<button class="button round-stat-modal__button">Следующий раунд</button>';
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
