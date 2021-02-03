// eslint-disable-next-line no-unused-vars
import { game } from './modules/game/gameContainer';
import { loadingBeforeMenu } from './modules/game/loadingBeforeMenu';
import generateFooter from './modules/footer';

window.onload = () => {
  loadingBeforeMenu();
  generateFooter();
};
