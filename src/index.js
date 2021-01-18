/* eslint-disable no-console */
// import CONST from './modules/Constants';
import Commands from './modules/commands';
import CreateCommands from './modules/createCommands';
import CreateBackgroundSound from './modules/createBackgroundSound';
import BackgroundSound from './modules/backgroundSound';

window.onload = () => {
  console.log('Project starts');
  const createCommands = new CreateCommands();
  createCommands.init();
  const commands = new Commands();
  commands.init();
  const createBackgroundSound = new CreateBackgroundSound();
  createBackgroundSound.init();
  const backgroundSound = new BackgroundSound();
  backgroundSound.init();
};
