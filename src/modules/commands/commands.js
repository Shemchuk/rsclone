import { game } from '../game/gameContainer';
import { addTeamNamesToTeamsArr } from '../game/timer';

export default class Commands {
  constructor() {
    this.addTeams = document.querySelector('.add-teams');
    this.teamsList = document.querySelector('.teams');
    this.items = JSON.parse(localStorage.getItem('items')) || [];
    this.startGameButton = document.querySelector('.button-startgame-play');
  }

  init() {
    this.addTeams.addEventListener('submit', this.addItem.bind(this));
    this.teamsList.addEventListener('click', this.deleteItem.bind(this));
    this.populateList(this.items, this.teamsList);
    this.startGameButton.addEventListener('click', function () {
      document.querySelector('.main').innerHTML = '';
      addTeamNamesToTeamsArr();
      game();
    });
  }

  addItem(e) {
    e.preventDefault();

    const text = this.addTeams.querySelector('[name=item]').value;

    const item = {
      text,
      win: false,
    };

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
        <li class="item${i}" data-index=${i}>${el.text}
        </li>
      `;
      })
      .join('');
  }

  deleteItem(e) {
    const element = e.target;
    const { index } = element.dataset;

    this.items.splice(index, 1);

    localStorage.removeItem('items');
    localStorage.setItem('items', JSON.stringify(this.items));
    this.populateList(this.items, this.teamsList);
  }
}
