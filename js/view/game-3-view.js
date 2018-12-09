import AbstractView from './abstract-view';
import {
  BackButton,
  Timer,
  Lives
} from './header-view';
import statsBar from '../screens/stats-bar';

export default class Game3 extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.__gameAnswer = null;
    this.__answers = [];
  }
  get template() {
    const gameTask = `<p class="game__task">${this.state.gameScreens[this.state.level].question}</p>`;

    return `
      <header class="header">
        ${new BackButton().template}
        ${new Timer(this.state.time).template}
        ${new Lives(this.state.lives).template}
      </header>
      <section class="game">
        ${gameTask}
        <form class="game__content  game__content--triple">
          <div class="game__option">
            <img src="${this.state.gameScreens[this.state.level].answers[0].image.url}" alt="Option 1" width="304" height="455">
          </div>
          <div class="game__option  game__option--selected">
            <img src="${this.state.gameScreens[this.state.level].answers[1].image.url}" alt="Option 2" width="304" height="455">
          </div>
          <div class="game__option">
            <img src="${this.state.gameScreens[this.state.level].answers[2].image.url}" alt="Option 3" width="304" height="455">
          </div>
        </form>
      </section>
    `;
  }
  get result() {
    this.__gameAnswer = (this.__answers[0] === this.__answers[1]);
    return this.__gameAnswer;
  }
  convertAnswer(answer) {
    const InputToAnswerType = {
      paint: `painting`,
      photo: `photo`
    };
    return InputToAnswerType[answer];
  }
  questionType(question) {
    if (question === `Найдите рисунок среди изображений`) {
      return `painting`;
    } return `photo`;
  }
  bind() {
    const gameOptions = [...this.element.querySelectorAll(`.game__option`)];
    const backButton = this.element.querySelector(`.back`);
    const gameSection = this.element.querySelector(`.game`);

    gameSection.appendChild(statsBar().element);

    gameOptions.forEach((el, i) => {
      const answerType = this.state.gameScreens[this.state.level].answers[i].type;
      const imageType = this.questionType(this.state.gameScreens[this.state.level].question);

      el.addEventListener(`click`, () => {
        this.__answers = [answerType, imageType];
        this.onImageClick();
      });
    });

    backButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackButtonClick();
    });
  }
  onBackButtonClick() {}
  onImageClick() {}
}

// import {
//   makeElement,
//   showScreen,
// } from "../utils/utils";
// import greeting from "./greeting";
// import statsTemplate from '../templates/stats-template';
// import headerTemplate from "../templates/header-template";
// import {
//   gameState
// } from "../data/game-state";

// const game3 = (data) => {
//   const gameTask = `<p class="game__task">${data.gameScreens[data.level].question}</p>`;

//   const game3Html = `
//   ${headerTemplate(data)}
//   <section class="game">
//     ${gameTask}
//     <form class="game__content  game__content--triple">
//       <div class="game__option">
//         <img src="${data.gameScreens[data.level].answers[0].image.url}" alt="Option 1" width="304" height="455">
//       </div>
//       <div class="game__option  game__option--selected">
//         <img src="${data.gameScreens[data.level].answers[1].image.url}" alt="Option 2" width="304" height="455">
//       </div>
//       <div class="game__option">
//         <img src="${data.gameScreens[data.level].answers[2].image.url}" alt="Option 3" width="304" height="455">
//       </div>
//     </form>
//   </section>
// `;

//   const game3El = makeElement(game3Html);
//   const gameOptions = [...game3El.querySelectorAll(`.game__option`)];
//   const backBtn = game3El.querySelector(`.back`);
//   const gameSection = game3El.querySelector(`.game`);

//   gameSection.appendChild(statsTemplate(data));

//   gameOptions.forEach((el) => {
//     el.addEventListener(`click`, () => {
//       gameState.addAnswer(true, 150000);
//       gameState.checkLivesCount(data);
//       gameState.changeGameLevel();
//       gameState.checkGameOver(data);
//     });
//   });

//   backBtn.addEventListener(`click`, () => showScreen(greeting()));

//   return game3El;
// };

// export default game3;
