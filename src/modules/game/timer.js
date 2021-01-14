/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
// import generateRoundStatisticsModal from './gameStatistics';
import { teamFlag, arrConfirmed, arrSkiped } from './card';
import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
import { generateFinishGameModal } from './gameContainer';

// ___________________________________Temporary data______________________________________________
// export const teamNames = ['Team 1', 'Team 2'];
// export const teamPoints = [0,0];
export const teams = [
  { name: 'Team1', points: 0, answers: { confirmed: [], skiped: [] } },
  { name: 'Team2', points: 0, answers: { confirmed: [], skiped: [] } },
];

let timer;
let time = 5;
let finishGamePoints = 10;
function countdown() {
  document.querySelector('.team-container__timer').innerHTML = time;
  time--;
  if (time <= 0) {
    if (!teams.some((el) => el.points >= finishGamePoints) || !(teamFlag === teams.length - 1)) {
      time = 5;
      clearTimeout(timer);
      document.querySelector('.hidden').style.display = 'flex';
      document.querySelector('.team-container__timer').innerHTML = 'Время вышло!';
      // console.log(arrConfirmed);
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
      teams.sort((el1, el2) => el2.points - el1.points);
      document.querySelector('.main').appendChild(generateFinishGameModal());
    }
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

export default countdown;
