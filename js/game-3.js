import {
  makeElement,
  showScreen,
} from "./utils";
import headerTemplate from './header/header-template';
import statsTemplate from './stats-template';
import stats from "./stats";
import greeting from "./greeting";
import {
  GAME_SETUP
} from './data/game-data';

const game3Html = `
  <section class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
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
  </section>
`;

const game3 = makeElement(game3Html);
const gameSection = game3.querySelector(`.game`);
const gameOptions = [...game3.querySelectorAll(`.game__option`)];

gameSection.insertAdjacentElement(`beforebegin`, makeElement(headerTemplate(GAME_SETUP)));
gameSection.insertAdjacentElement(`beforeend`, makeElement(statsTemplate));

const backBtn = game3.querySelector(`.back`);

gameOptions.forEach((el) => {
  el.addEventListener(`click`, () => showScreen(stats));
});

backBtn.addEventListener(`click`, () => showScreen(greeting));

export default game3;
