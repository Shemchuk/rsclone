/* eslint-disable no-undef */
/* eslint-disable no-implied-eval */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-const */
import { gsap } from 'gsap';
import { teamFlag, arrConfirmed, arrSkiped, pauseFlag } from './card';
import { generateConfirmedStatisticsCell, generateSkipedStatisticsCell } from './gameStatistics';
import { generateFinishGameModal } from './gameContainer';
import { get, set } from '../utils/storage';
import Language from '../lang/Language';
import { defaultSettings } from '../Constants';
import Sound from '../sound/sound';

const langObject = new Language();
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
}

function saveResultToLS(teamList) {
  let statistics = get('AliasStatistics', {});

  teamList.forEach((team) => {
    let oldScore = 0;
    if (Object.prototype.hasOwnProperty.call(statistics, team.name)) {
      oldScore = statistics[team.name];
    } else {
      statistics[team.name] = 0;
    }
    const score = team.points + oldScore;
    statistics[team.name] = score;
  });

  set('AliasStatistics', statistics);
  return statistics;
}

let setaliasSettings = get('aliasSettings', defaultSettings);
let timer;
let time = setaliasSettings.roundTime;
let finishGamePoints = setaliasSettings.wordsCount;
let isFirstLaunch = true;

export function setNewTime() {
  clearTimeout(timer);
  isFirstLaunch = true;
}

function countdown() {
  if (isFirstLaunch) {
    isFirstLaunch = false;
    setaliasSettings = get('aliasSettings', defaultSettings);
    time = setaliasSettings.roundTime;
    finishGamePoints = setaliasSettings.wordsCount;
  }

  const lang = langObject.getCurrentLangObject().game;

  document.querySelector('.first').innerHTML = time;
  time--;
  if (pauseFlag) {
    setTimeout(() => {
      time += 1;
    }, 1000);
  }
  if (time <= -1) {
    if (
      !teams.some((el) => el.points >= finishGamePoints) ||
      !(teamFlag === teams.length - 1) ||
      teams[0].points === teams[1].points
    ) {
      time = setaliasSettings.roundTime;
      clearTimeout(timer);
      gsap.to('.game-container__card', { duration: 1, ease: 'power1.out', x: -2000 });
      setTimeout(() => {
        gsap.to('.team-container', { duration: 1, ease: 'power1.out' });
        document.querySelector('.game-container__card').style.display = 'none';
        document.querySelector('.round-stat-modal').style.display = 'flex';
        gsap.from('.hidden', { duration: 1, ease: 'power1.out', x: 1000 });
      }, 500);
      document.querySelector('.first').innerHTML = `${lang.gameContainertimeOut}`;
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
      setTimeout(() => {
        document.querySelector('.main').innerHTML = '';
        document.querySelector('.main').appendChild(generateFinishGameModal());
        gsap.from('.finish-game-modal__title', { duration: 1, ease: 'power1.out', y: -500 });
        gsap.from('.finish-modal', { duration: 1, ease: 'power1.out', y: 500 });
      }, 1000);
      time = setaliasSettings.roundTime;
      saveResultToLS(teams);
    }
  } else if (time === 4) {
    const sound = new Sound();
    sound.lastTimePopup();
    countdown();
  } else {
    timer = setTimeout(countdown, 1000);
  }
}

export default countdown;
