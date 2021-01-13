/* eslint-disable no-console */
/* eslint-disable prefer-const */
// import generateRoundStatisticsModal from './gameStatistics';
import { arrConfirmed, arrSkiped } from './card';
import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';

let timer;
let time = 5;
function countdown() {
  document.querySelector('.team-container__timer').innerHTML = time;
  time--;
  if (time <= 0) {
    time = 5;
    clearTimeout(timer);
    document.querySelector('.round-stat-modal').style.display = 'block';
    document.querySelector('.team-container__timer').innerHTML = 'Время вышло!';
    console.log(arrConfirmed);
    arrConfirmed.forEach((el) =>
      document
        .querySelector('.round-stat-confirmed__container')
        .appendChild(generateConfirmedStatisticsCell(el))
    );
    arrSkiped.forEach((el) =>
      document
        .querySelector('.round-stat-skiped__container')
        .appendChild(generateSkipedStatisticsCell(el))
    );
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

export default countdown;
