import { game } from '../game/gameContainer';
import { addTeamNamesToTeamsArr } from '../game/timer';
import Language from '../lang/Language';
import Menu from '../Menu';
import Sound from '../sound/sound';

export default class Commands {
  constructor() {
    this.addTeams = document.querySelector('.add-teams');
    this.teamsList = document.querySelector('.teams');
    // this.deleteTeam = document.querySelector('.delete-team');
    this.aliasSettings = JSON.parse(localStorage.getItem('aliasSettings')) || [];
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    this.backMenuButton = document.querySelector('.button-backmenu-menu');
    this.startGameButton = document.querySelector('.button-startgame-play');
    this.adjective = [
      'Космические',
      'Всезнающие',
      'Веселые',
      'Крутые',
      'Плохие',
      'Летающие',
      'Злобные',
      'Колючие',
      'Опасные',
      'Черные',
      'Белые',
    ];
    this.engAdjective = [
      'Cosmic',
      'Wisdom',
      'Funny',
      'Cool',
      'Bad',
      'Flying',
      'Spiteful',
      'Thorny',
      'Dangerous',
      'Black',
      'White',
    ];
    this.race = [
      'Помидоры',
      'Бакланы',
      'Медведи',
      'Котики',
      'Барсуки',
      'Покемоны',
      'Кенгуру',
      'Ламы',
      'Гномы',
      'Зомби',
      'Демоны',
    ];
    this.engRace = [
      'Tomatos',
      'Cormorants',
      'Bears',
      'Kitten',
      'Badgers',
      'Pockemons',
      'Kangaroo',
      'Lamas',
      'Gnomes',
      'Zombies',
      'Demons',
    ];
    this.langObject = new Language();
    this.lang = this.langObject.getCurrentLangObject().commandMenu;
    // this.sound = new Sound();
  }

  init() {
    this.generateTeamName();
    this.populateList(this.items, this.teamsList);
    this.addTeams.addEventListener('submit', this.addItem.bind(this));
    this.teamsList.addEventListener('click', this.deleteItem.bind(this));

    this.startGameButton.addEventListener('click', () => {
      while (this.items.length < 2) {
        return;
      }

      // this.sound.mainClick();

      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 800 });
      gsap.to('#sign', { duration: 1, ease: 'power1.out', y: -500 });

      setTimeout(() => {
        document.querySelector('.main').innerHTML = '';
        addTeamNamesToTeamsArr();
        game();
      }, 1000);
    });

    this.backMenuButton.addEventListener('click', () => {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
      setTimeout(() => {
        const menu = new Menu();
        menu.init();
        gsap.from('.menu', { duration: 1, ease: 'power1.out', y: 1000 });
      }, 1000);
      // const menu = new Menu();
      // menu.init();
    });
  }

  generateTeamName() {
    while (this.items.length < 2) {
      const text =
        this.aliasSettings.lang === 'en'
          ? `${this.random(this.engAdjective)} ${this.random(this.engRace)}`
          : `${this.random(this.adjective)} ${this.random(this.race)}`;

      const item = {
        text,
      };

      this.items.push(item);
      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  random(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  addItem(e) {
    e.preventDefault();

    const text = this.addTeams.querySelector('[name=item]').value;

    const item = {
      text,
    };

    let temp = '';
    this.items.forEach((el) => {
      temp = el.text;
    });

    if (item.text === temp || item.text === '') {
      return;
    }

    // this.sound.mainClick();

    this.items.push(item);
    this.populateList(this.items, this.teamsList);
    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(this.items));
    this.addTeams.reset();
  }

  populateList() {
    this.teamsList.innerHTML = this.items
      .map((el, i) => {
        return `
        <li class="item${i} item"><p  class="third-childd point-events-none text-small"><a>${el.text}</a></p>
          <button id="menu-button__del" class="delete-team${i} menu-button menu-button__small" data-index=${i}><p><a>${this.lang.deleteTeamButton}</a></p></button>
        </li>
      `;
      })
      .join('');
  }

  deleteItem(e) {
    const button = e.target.closest('button');

    if (!button) return;

    const { index } = button.dataset;
    this.items.splice(index, 1);

    // this.sound.mainClick();

    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateList(this.items, this.teamsList);
  }
}
