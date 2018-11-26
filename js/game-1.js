import {
  makeElement,
  showScreen,
} from "./utils";
import {
  gamePlay
  // GAME_SETUP,
  // GAME_TASKS
} from './data/game-data';
import headerTemplate from './header/header-template';
import statsTemplate from './stats-template';
import game2 from "./game-2";
import greeting from "./greeting";

const gameTask = (task) => `<p class="game__task">${task.twoPic}</p>`;

const game1Html = `
  ${headerTemplate(gamePlay)}
  <section class="game">
  ${gameTask(gamePlay.GAME_TASKS)}
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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

const game1 = makeElement(game1Html);
const leftRadioGroup = [...game1.querySelectorAll(`input[name=question1]`)];
const rightRadioGroup = [...game1.querySelectorAll(`input[name=question2]`)];
const backBtn = game1.querySelector(`.back`);
let isLeftPictureSelected = false;
let isRightPictureSelected = false;

const compareChecked = () => {
  if (isLeftPictureSelected && isRightPictureSelected) {
    showScreen(game2);
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

export default game1;
