import Language from '../lang/Language';

export default class CreateCommands {
  constructor() {
    this.sign = document.querySelector('.menu #container .sign-wrap .sign');
    this.langObject = new Language();
    this.lang = this.langObject.getCurrentLangObject().commandMenu;
  }

  init() {
    let template = '';
    const commandsContainer = document.createElement('div');
    commandsContainer.className = 'command-wrapper';
    template = `<h2 class="menu-title menu-font command__title"><p><a>${this.lang.allCommands}</a></p></h2>
    <ul class="teams">
      <li class="teams__cell"><p><a>${this.lang.loadingTeams}</a></p></li>
    </ul>
    <form class="add-teams">
      <input type="text" class="input-here" autocomplete="off" name="item" placeholder="${this.lang.teamName}">
      <input type="submit" class="menu-button input-button" value="${this.lang.addTeamButton}">
    </form>
    <button class="button-backmenu-menu">${this.lang.backMenuButton}</button>;
    <button class="button-startgame-play menu-button"><p><a>${this.lang.startGameButton}</a></p></button>`;

    commandsContainer.innerHTML = template;
    this.sign.appendChild(commandsContainer);
    return this.main;
  }
}
