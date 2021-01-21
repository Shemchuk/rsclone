/* eslint-disable no-undef */
/* eslint-disable no-implied-eval */
/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable prefer-const */
// import generateRoundStatisticsModal from './gameStatistics';
import { teamFlag, arrConfirmed, arrSkiped } from './card';
import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
import { generateFinishGameModal } from './gameContainer';
import { get, set } from '../utils/storage';
import Language from '../lang/Language';

// =========== LANG =============== //
const langObject = new Language();
// const lang = langObject.getCurrentLangObject().game; // Object "game"
const langName = Language.getCurrentLangName(); // 'en' | 'ru'
// =========== LANG =============== //

// ___________________________________Temporary data______________________________________________
// export const teamNames = ['Team 1', 'Team 2'];
// export const teamPoints = [0,0];
export const teams = [];

export function createCommandFromLS(teamItem) {
  return {
    name: teamItem.text,
    points: 0,
    answers: { confirmed: [], skiped: [] },
  };
}
export function addTeamNamesToTeamsArr() {
  let teamNamesFromCommandsList = JSON.parse(localStorage.getItem('items')) || [];
  teamNamesFromCommandsList.forEach((el) => teams.push(createCommandFromLS(el)));
  console.log(teams);
}

const setaliasSettings = { wordsCount: '1', roundTime: '5', lang: 'en' };
let timer;
let time = setaliasSettings.roundTime;
let finishGamePoints = setaliasSettings.wordsCount;
function countdown() {
  const lang = langObject.getCurrentLangObject().game;
  document.querySelector('.first').innerHTML = time;
  time--;
  if (time <= -1) {
    if (!teams.some((el) => el.points >= finishGamePoints) || !(teamFlag === teams.length - 1)) {
      time = setaliasSettings.roundTime;
      clearTimeout(timer);
      // gsap.to('.team-container', { duration: 1, ease: 'power1.out', y: -500 });
      gsap.to('.game-container__card', { duration: 1, ease: 'power1.out', x: -2000 });
      setTimeout(function () {
        gsap.to('.team-container', { duration: 1, ease: 'power1.out' });
        document.querySelector('.game-container__card').style.display = 'none';
        document.querySelector('.hidden').style.display = 'flex';

        gsap.from('.hidden', { duration: 1, ease: 'power1.out', x: 1000 });
      }, 500);
      // gsap.from('.hidden', { duration: 1, ease: 'power1.out', y: 500 });
      document.querySelector('.first').innerHTML = `${lang.gameContainertimeOut}`;
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
      gsap.to('.team-container__team-name', { duration: 1, ease: 'power1.out', y: -500 });
      gsap.to('.game-container__card', { duration: 1, ease: 'power1.out', y: 500 });
      setTimeout(function () {
        document.querySelector('.main').innerHTML = '';
        document.querySelector('.main').appendChild(generateFinishGameModal());
      }, 1000);
      let date = new Date();
      // set('AliasStatistics', { date, teams });

      console.log({ date, teams });
    }
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

export default countdown;
