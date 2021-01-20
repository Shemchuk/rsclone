import en from './en';
import ru from './ru';
import { defaultSettings } from '../Constants';
import { get as getValueFromStorage } from '../utils/storage';

/*
 * HOW TO USE
 * import Language from './lang/Language';
 * const langObject = new Language();
 * const lang = this.langObject.getCurrentLangObject().mainMenu;
 * or
 * const lang = this.langObject.getCurrentLangObject().commandMenu;
 * const lang = this.langObject.getCurrentLangObject().game;
 * and after that we can use object "lang" like this:
 * element.innerHTML = `<button id="button-start" class="menu-button">${lang.startButton}</button>`
 */

export default class Language {
  constructor() {
    return this;
  }

  getCurrentLangObject() {
    const settings = getValueFromStorage('aliasSettings', defaultSettings);
    this.lang = settings.lang;

    if (this.lang === 'en') {
      return en;
    }
    return ru;
  }

  static getCurrentLangName() {
    const settings = getValueFromStorage('aliasSettings', defaultSettings);
    return settings.lang;
  }
}
