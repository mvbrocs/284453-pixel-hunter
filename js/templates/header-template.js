import backBtnTemplate from "./back-btn-template";

const headerTemplate = (state) => `
  <header class="header">
    ${backBtnTemplate}
    <div class="game__timer">${state.GAME_SETUP.time}</div>
    <div class="game__lives">
      ${new Array(3 - state.GAME_SETUP.lives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
        .join(``)}
       ${new Array(state.GAME_SETUP.lives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
        .join(``)}
    </div>
  </header>`;

export default headerTemplate;
