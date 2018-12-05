import AbstractView from './abstract-view';
import {
  BackButton,
  Timer,
  Lives
} from './header-view';

export default class Game2 extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
    this.state = data.getState();
  }
  template() {
    const gameTask = `<p class="game__task">${this.state.gameScreens[this.state.level].question}</p>`;

    return `
      <header class="header">
        ${new BackButton().template}
        ${new Timer(this.state.time).template}
        ${new Lives(this.state.lives).template}
      </header>
      <section class="game">
        ${gameTask}
        <form class="game__content  game__content--wide">
          <div class="game__option">
            <img src="${this.state.gameScreens[this.state.level].answers[0].image.url}" alt="Option 1" width="705" height="455">
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
  }
  bind() {
    const form = this.element.querySelector(`.game__content`);
    const backButton = this.element.querySelector(`.back`);
    const gameSection = this.element.querySelector(`.game`);

    // gameSection.appendChild(statsTemplate(data));

    form.addEventListener(`change`, () => {
      this.onFormChange();
    });

    backButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackButtonClick();
    });
  }
  onFormChange() {}
  onBackButtonClick() {}
}

// import {
//   makeElement,
//   showScreen,
// } from "../utils/utils";
// import greeting from "./greeting";
// import headerTemplate from "../templates/header-template";
// import statsTemplate from "../templates/stats-template";
// import {
//   gameState
// } from "../data/game-state";

// const game2 = (data) => {
//   const gameTask = `<p class="game__task">${data.gameScreens[data.level].question}</p>`;

//   const game2Html = `
//     ${headerTemplate(data)}
//     <section class="game">
//       ${gameTask}
//       <form class="game__content  game__content--wide">
//         <div class="game__option">
//           <img src="${data.gameScreens[data.level].answers[0].image.url}" alt="Option 1" width="705" height="455">
//           <label class="game__answer  game__answer--photo">
//             <input class="visually-hidden" name="question1" type="radio" value="photo">
//             <span>Фото</span>
//           </label>
//           <label class="game__answer  game__answer--paint">
//             <input class="visually-hidden" name="question1" type="radio" value="paint">
//             <span>Рисунок</span>
//           </label>
//         </div>
//       </form>
//     </section>`;

//   const game2El = makeElement(game2Html);
//   const form = game2El.querySelector(`.game__content`);
//   const backBtn = game2El.querySelector(`.back`);
//   const gameSection = game2El.querySelector(`.game`);

//   gameSection.appendChild(statsTemplate(data));

//   form.addEventListener(`change`, () => {
//     gameState.addAnswer(true, 15000);
//     gameState.checkLivesCount(data);
//     gameState.changeGameLevel();
//     gameState.checkGameOver(data);
//   });
//   backBtn.addEventListener(`click`, () => showScreen(greeting()));

//   return game2El;
// };

// export default game2;
