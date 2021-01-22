import { game } from '../game/gameContainer';
import { addTeamNamesToTeamsArr } from '../game/timer';
import Language from '../lang/Language';
import Menu from '../Menu';

export default class Commands {
  constructor() {
    this.addTeams = document.querySelector('.add-teams');
    this.teamsList = document.querySelector('.teams');
    // this.deleteTeam = document.querySelector('.delete-team');
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    this.backMenuButton = document.querySelector('.button-backmenu-menu');
    this.startGameButton = document.querySelector('.button-startgame-play');
    this.adjective = ['Ужасный', 'Злобный', 'Сопливый', 'Колючий', 'Опасный', 'Вонючий', 'Черный'];
    this.race = ['Огр', 'Гном', 'Гоблин', 'Орк', 'Зомби', 'Демон', 'Нежить'];
    this.langObject = new Language();
    this.lang = this.langObject.getCurrentLangObject().commandMenu;
  }

  init() {
    this.generateTeamName();
    this.populateList(this.items, this.teamsList);
    this.addTeams.addEventListener('submit', this.addItem.bind(this));
    this.teamsList.addEventListener('click', this.deleteItem.bind(this));
    this.startGameButton.addEventListener('click', function () {
      gsap.to('.menu', { duration: 1, ease: 'power1.out', y: 2000 });
      gsap.to('.sign', { duration: 1, ease: 'power1.out', y: -500 });
      setTimeout(function () {
        document.querySelector('.main').innerHTML = '';
        addTeamNamesToTeamsArr();
        game();
      }, 1000);
    });
    this.backMenuButton.addEventListener('click', function () {
      const menu = new Menu();
      menu.init();
    });
  }

  generateTeamName() {
    while (this.items.length < 2) {
      const text = `${this.random(this.adjective)} ${this.random(this.race)}`;

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

    // const player = new Audio();
    // player.src = '/../src/assets/sounds/LAZER.wav';
    // player.play();
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
        <li class="item${i} item"><p  class="third-child point-events-none text-small"><a>${el.text}</a></p>
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

    // const player = new Audio();
    // player.src = '/../src/assets/sounds/LAZER.wav';
    // player.play();

    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateList(this.items, this.teamsList);
  }
}
