import {
  makeElement,
  showScreen,
} from "./utils";
import header from './header/header-template';
import stats from './stats-template';
import game3 from "./game-3";
import greeting from "./greeting";
import {
  GAME_SETUP
} from './data/game-data';

const game2Html = `
  <section class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
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
  </section>`;

const game2 = makeElement(game2Html);
const gameSection = game2.querySelector(`.game`);
const form = game2.querySelector(`.game__content`);

gameSection.insertAdjacentElement(`beforebegin`, header);
gameSection.insertAdjacentElement(`beforeend`, stats);

const backBtn = game2.querySelector(`.back`);

form.addEventListener(`change`, () => showScreen(game3));
backBtn.addEventListener(`click`, () => showScreen(greeting));

export default game2;
