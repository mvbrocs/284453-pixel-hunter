import {
  makeElement,
  showScreen,
} from "./utils";
import game3 from "./game-3";
import greeting from "./greeting";
import headerTemplate from "./header/header-template";
import statsTemplate from "./stats-template";

const game2 = (state) => {
  const gameTask = `<p class="game__task">${state.GAME_TASKS.onePic}</p>`;

  const game2Html = `
    ${headerTemplate(state)}
    <section class="game">
      ${gameTask}
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="${state.images.paintings[1]}" alt="Option 1" width="705" height="455">
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

  const game2El = makeElement(game2Html);
  const form = game2El.querySelector(`.game__content`);
  const backBtn = game2El.querySelector(`.back`);

  form.addEventListener(`change`, () => showScreen(game3(state)));
  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return game2El;
};

export default game2;
