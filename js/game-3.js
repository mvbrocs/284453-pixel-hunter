import {
  makeElement,
  showScreen,
} from "./utils";
import stats from './stats';
import greeting from "./greeting";
import statsTemplate from './stats-template';
import headerTemplate from "./header/header-template";

const game3 = (state) => {
  const gameTask = `<p class="game__task">${state.GAME_TASKS.threePic}</p>`;

  const game3Html = `
  ${headerTemplate(state)}
  <section class="game">
    ${gameTask}
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 3" width="304" height="455">
      </div>
    </form>
    ${statsTemplate}
  </section>
`;

  const game3El = makeElement(game3Html);
  const gameOptions = [...game3El.querySelectorAll(`.game__option`)];
  const backBtn = game3El.querySelector(`.back`);

  gameOptions.forEach((el) => {
    el.addEventListener(`click`, () => showScreen(stats(state)));
  });

  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return game3El;
};

export default game3;
