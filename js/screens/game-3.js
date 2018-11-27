import {
  makeElement,
  showScreen,
} from "../utils";
import greeting from "./greeting";
import statsTemplate from '../templates/stats-template';
import headerTemplate from "../templates/header-template";
import renderScreen from "../render-screen";
import {
  answers
} from "../data/game-data";

const game3 = (state) => {
  const gameTask = `<p class="game__task">${state.GAME_TASKS.threePic}</p>`;

  const game3Html = `
  ${headerTemplate(state)}
  <section class="game">
    ${gameTask}
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${state.images.paintings[2]}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${state.images.photos[1]}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${state.images.photos[2]}" alt="Option 3" width="304" height="455">
      </div>
    </form>
    ${statsTemplate}
  </section>
`;

  const game3El = makeElement(game3Html);
  const gameOptions = [...game3El.querySelectorAll(`.game__option`)];
  const backBtn = game3El.querySelector(`.back`);

  gameOptions.forEach((el) => {
    el.addEventListener(`click`, () => {
      answers.push([true, 1500]);
      state.levelUp();
      renderScreen();
    });
  });

  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return game3El;
};

export default game3;