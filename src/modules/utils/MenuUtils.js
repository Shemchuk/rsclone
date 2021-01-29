// eslint-disable-next-line import/no-cycle
import Commands from '../commands/commands';
import CreateCommands from '../commands/createCommands';
import { get as getValueFromStorage } from './storage';
import { defaultSettings } from '../Constants';

export default class MenuUtils {
  static slideAnimationMethod() {
    gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
    setTimeout(() => {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 0 });
    }, 1000);
  }

  static showCommandMenu() {
    gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
    setTimeout(() => {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 0 });
      const createCommands = new CreateCommands();
      createCommands.init();
      const commands = new Commands();
      commands.init();
    }, 1000);
  }

  static loadSettingsFromLocalStorage() {
    const settings = getValueFromStorage('aliasSettings', defaultSettings);
    const wordsCount = document.querySelector('#inputWordsCount');
    const outputWordsNumber = document.querySelector('#outputWordsNumber');
    const roundTime = document.querySelector('#inputRoundTime');
    const outputRoundTime = document.querySelector('#outputRoundTime');

    wordsCount.value = settings.wordsCount;
    outputWordsNumber.value = settings.wordsCount;
    roundTime.value = settings.roundTime;
    outputRoundTime.value = settings.roundTime;
    console.log(settings);
    if (settings.lang === 'en') {
      document.querySelector('#set-lang__en').checked = true;
    } else {
      document.querySelector('#set-lang__ru').checked = true;
    }

    if (settings.isSounds === 'true') {
      document.querySelector('#set-sounds__on').checked = true;
    } else {
      document.querySelector('#set-sounds__off').checked = true;
    }
  }

  static hideMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.add('hide-menu');
  }

  static showMenu(menuClassName) {
    document.querySelector(`.${menuClassName}`).classList.remove('hide-menu');
  }

  static createStatisticMenu() {
    const statisticsData = getValueFromStorage('AliasStatistics');

    if (!statisticsData) {
      return;
    }

    const statistic = document.querySelector('.result-table__body');
    const data = [];
    statistic.innerHTML = '';

    // eslint-disable-next-line no-restricted-syntax
    for (const key in statisticsData) {
      if (Object.prototype.hasOwnProperty.call(statisticsData, key)) {
        data.push({ teamName: key, score: statisticsData[key] });
      }
    }
    data.sort((a, b) => b.score - a.score);

    data.forEach((item) => {
      statistic.innerHTML += `
      <tr class="result-table__body-row">
        <td class="result-table__body-row-cell"><p class="third-child point-events-none text-small"><a>${item.teamName}</a></p></td>
        <td class="result-table__body-row-cell menu-font"><p><a>${item.score}</a></p></td>
      </tr>
      `;
    });
  }

  static pressButtonStart() {
    MenuUtils.showCommandMenu();
    setTimeout(() => {
      MenuUtils.hideMenu('main-menu');
    }, 1000);
  }

  static pressButtonSettings() {
    console.log('settings');
    MenuUtils.loadSettingsFromLocalStorage();
    MenuUtils.slideAnimationMethod();
    setTimeout(() => {
      MenuUtils.hideMenu('main-menu');
      MenuUtils.showMenu('settings-menu');
    }, 1000);
  }

  static pressButtonTutorial() {
    MenuUtils.slideAnimationMethod();
    setTimeout(() => {
      MenuUtils.hideMenu('main-menu');
      MenuUtils.showMenu('tutorial-menu');
    }, 1000);
  }

  static pressButtonResult() {
    MenuUtils.slideAnimationMethod();
    setTimeout(function () {
      MenuUtils.showMenu('result-menu');
      MenuUtils.hideMenu('main-menu');
    }, 1000);
    console.log('result');

    MenuUtils.createStatisticMenu();
    MenuUtils.showMenu('result-menu');
    MenuUtils.hideMenu('main-menu');
  }
}
