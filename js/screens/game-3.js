import {
  makeElement,
  showScreen,
} from "../utils";
import greeting from "./greeting";
import statsTemplate from '../templates/stats-template';
import headerTemplate from "../templates/header-template";
import { gameState } from "../data/game-state";
// import {
//   switchScreens
// } from "../switch-screens";
// import {
//   answers
// } from "../data/game-data";

const game3 = (data) => {
  const gameTask = `<p class="game__task">${data.gameScreens[data.level].question}</p>`;

  const game3Html = `
  ${headerTemplate(data)}
  <section class="game">
    ${gameTask}
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${data.gameScreens[data.level].answers[0].image.url}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${data.gameScreens[data.level].answers[1].image.url}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${data.gameScreens[data.level].answers[2].image.url}" alt="Option 3" width="304" height="455">
      </div>
    </form>
  </section>
`;

  const game3El = makeElement(game3Html);
  const gameOptions = [...game3El.querySelectorAll(`.game__option`)];
  const backBtn = game3El.querySelector(`.back`);
  const gameSection = game3El.querySelector(`.game`);

  gameSection.appendChild(statsTemplate(data));

  gameOptions.forEach((el) => {
    el.addEventListener(`click`, () => {
      gameState.addAnswer(false, 15000);
      gameState.checkLivesCount(data);
      gameState.changeGameLevel();
      gameState.showScreenWithData(data);
    });
  });

  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return game3El;
};

export default game3;
