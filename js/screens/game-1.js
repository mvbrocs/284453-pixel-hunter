import {
  makeElement,
  showScreen,
} from "../utils";
import headerTemplate from '../templates/header-template';
import statsTemplate from '../templates/stats-template';
import greeting from "./greeting";
import renderScreen from "../render-screen";
import {
  answers
} from "../data/game-data";

const game1 = (state) => {
  const gameTask = `<p class="game__task">${state.question}</p>`;

  const game1Html = `
    ${headerTemplate(state)}
    <section class="game">
    ${gameTask}
      <form class="game__content">
        <div class="game__option">
          <img src="${state.images.paintings[0]}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input class="visually-hidden" name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input class="visually-hidden" name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${state.images.photos[0]}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input class="visually-hidden" name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      ${statsTemplate}
    </section>`;

  const game1El = makeElement(game1Html);
  const leftRadioGroup = [...game1El.querySelectorAll(`input[name=question1]`)];
  const rightRadioGroup = [...game1El.querySelectorAll(`input[name=question2]`)];
  const backBtn = game1El.querySelector(`.back`);
  let isLeftPictureSelected = false;
  let isRightPictureSelected = false;

  const compareChecked = () => {
    if (isLeftPictureSelected && isRightPictureSelected) {
      state.levelUp();
      answers.push([true, 1500]);
      renderScreen();
      // showScreen(game2(state));
    }
  };

  leftRadioGroup.map((el) => {
    el.addEventListener(`click`, () => {
      if (el.checked) {
        isLeftPictureSelected = true;
      }
      compareChecked();
    });
  });

  rightRadioGroup.forEach((el) => {
    el.addEventListener(`click`, () => {
      if (el.checked) {
        isRightPictureSelected = true;
      }
      compareChecked();
    });
  });

  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return game1El;
};

export default game1;
