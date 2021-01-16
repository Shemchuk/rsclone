/* eslint-disable no-console */
// import CONST from './modules/Constants';
import Commands from './modules/commands';
import CreateCommands from './modules/createCommands';

window.onload = () => {
  console.log('Project starts');
  const createCommands = new CreateCommands();
  createCommands.init();
  const commands = new Commands();
  commands.init();
};
