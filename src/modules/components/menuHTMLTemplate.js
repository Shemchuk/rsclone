const menuHTMLTemplate = (lang) => `
<div class="menu">
  <div class="main-menu">
    <h2 class="menu-title">${lang.mainMenuTitle}</h2>
    <button id="button-continue" class="menu-button" disabled>${lang.continueButton}</button>
    <button id="button-start" class="menu-button">${lang.startButton}</button>
    <button id="button-settings" class="menu-button">${lang.settingsButton}</button>
    <button id="button-tutorial" class="menu-button">${lang.tutorialButton}</button>
    <button id="button-statistics" class="menu-button">${lang.statisticsButton}</button>
  </div>

  <div class="settings-menu hide-menu">
    <h2 class="menu-title">${lang.settingsMenuTitle}</h2>

    <div class="settings-menu__item set__words-number">
      <p class="setting-paragraph">${lang.labelCountOfWords}</p>
      <div class="setting-slider__container slider__words-count">
        <input
          id="inputWordsCount"
          class="slider-input"
          type="range"
          min="5"
          max="200"
          value="50"
          name="words"
          step="5"
          aria-label="Count of words"
          oninput="outputWordsNumber.value=inputWordsCount.value;"
        />
        <output
          id="outputWordsNumber"
          class="slider__value-indicator"
          name="output__words-number"
          for="inputWordsCount"
          >60</output
        >
      </div>
    </div>

    <div class="settings-menu__item set__round-time">
      <p class="setting-paragraph">${lang.labelRoundTime}</p>
      <div class="setting-slider__container slider__round-time">
        <input
          id="inputRoundTime"
          class="slider-input"
          type="range"
          min="5"
          max="120"
          value="60"
          name="round-time"
          step="1"
          aria-label="Round time"
          oninput="outputRoundTime.value=inputRoundTime.value;"
        />
        <output
          id="outputRoundTime"
          class="slider__value-indicator"
          name="output__words-number"
          for="inputWordsCount"
          >60</output
        >
      </div>
    </div>

    <div class="settings-menu__item set__lang">
      <div class="item__row-container">
        <p class="setting-paragraph">${lang.labelLanguage}</p>
        <div class="input__container">
          <input type="radio" id="set-lang__en" name="lang" value="en" checked />
          <label for="set-lang__en">ENG</label>
          <input type="radio" id="set-lang__ru" name="lang" value="ru" />
          <label for="set-lang__ru">RUS</label>
        </div>
      </div>
    </div>

    <div class="settings__button-block">
      <button id="button-save" class="menu-button">${lang.saveButton}</button>
      <button id="button-back" class="menu-button">${lang.backButton}</button>
    </div>
  </div>

  <div class="tutorial-menu hide-menu">
    <h2 class="menu-title">Tutorial</h2>

    <div class="tutorial-text">
      <h3>${lang.TutorialMenuTitle}</h3>
      <p>
        Cillum dolor esse sit incididunt velit eiusmod magna ad nostrud officia aute dolor dolor.
        Magna esse ullamco pariatur adipisicing consectetur eu commodo officia. Ex cillum consequat
        mollit minim elit est deserunt occaecat nisi amet. Quis aliqua nostrud Lorem occaecat sunt.
        Eiusmod quis amet ullamco aliquip dolore ut incididunt duis adipisicing. Elit consequat nisi
        eiusmod aute ipsum sunt veniam do est. Occaecat mollit aliquip ut proident consectetur amet
        ex dolore consectetur aliqua elit.
      </p>
      <p>
        Commodo nisi non consectetur voluptate incididunt mollit duis dolore amet amet tempor
        exercitation. Qui amet aute ea aute id ad aliquip proident. Irure duis qui labore deserunt
        enim in quis nisi sint consequat aliqua. Ex proident labore et laborum tempor fugiat sint
        magna veniam minim. Nulla dolor labore adipisicing in enim mollit laboris fugiat eu. Aliquip
        minim cillum ullamco voluptate non dolore non ex duis fugiat duis ad. Deserunt cillum ad et
        nisi amet non voluptate culpa qui do. Labore ullamco et minim proident est laborum mollit ad
        labore deserunt ut irure dolore. Reprehenderit ad ad irure ut irure qui est eu velit eu
        excepteur adipisicing culpa. Laborum cupidatat ullamco eu duis anim reprehenderit proident
        aute ad consectetur eiusmod.
      </p>
      <p>
        Tempor tempor aliqua in commodo cillum Lorem magna dolore proident Lorem. Esse ad consequat
        est excepteur irure eu irure quis aliqua qui. Do mollit esse veniam excepteur ut veniam anim
        minim dolore sit commodo consequat duis commodo. Sunt dolor reprehenderit ipsum minim
        eiusmod eu consectetur anim excepteur eiusmod. Duis excepteur anim dolor sit enim veniam
        deserunt anim adipisicing Lorem elit. Cillum sunt do consequat elit laboris nisi
        consectetur.
      </p>
    </div>

    <div class="tutorial__button-block">
      <button id="tutorial__button-back" class="menu-button">Back</button>
    </div>
  </div>
</div>
`;

export default menuHTMLTemplate;
