import {
  makeElement,
  showScreen,
} from "./utils";
import stats from './stats';
import greeting from "./greeting";
import {
  gamePlay
  // GAME_SETUP,
  // GAME_TASKS
} from './data/game-data';
import statsTemplate from './stats-template';
import headerTemplate from "./header/header-template";

const gameTask = (task) => `<p class="game__task">${task.threePic}</p>`;

const game3Html = `
  ${headerTemplate(gamePlay)}
  <section class="game">
    ${gameTask(gamePlay.GAME_TASKS)}
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

const game3 = makeElement(game3Html);
const gameOptions = [...game3.querySelectorAll(`.game__option`)];
const backBtn = game3.querySelector(`.back`);

gameOptions.forEach((el) => {
  el.addEventListener(`click`, () => showScreen(stats(gamePlay)));
});

backBtn.addEventListener(`click`, () => showScreen(greeting()));

export default game3;
