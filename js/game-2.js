import {
  makeElement,
  showScreen,
} from "./utils";
import game3 from "./game-3";
import greeting from "./greeting";
import {
  gamePlay
  // GAME_SETUP,
  // GAME_TASKS
} from './data/game-data';
import headerTemplate from "./header/header-template";
import statsTemplate from "./stats-template";

const gameTask = (task) => `<p class="game__task">${task.onePic}</p>`;

const game2Html = `
  ${headerTemplate(gamePlay.GAME_SETUP)}
  <section class="game">
    ${gameTask(gamePlay.GAME_TASKS)}
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input class="visually-hidden" name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input class="visually-hidden" name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${statsTemplate}
  </section>`;

const game2 = makeElement(game2Html);
const form = game2.querySelector(`.game__content`);
const backBtn = game2.querySelector(`.back`);

form.addEventListener(`change`, () => showScreen(game3));
backBtn.addEventListener(`click`, () => showScreen(greeting()));

export default game2;
