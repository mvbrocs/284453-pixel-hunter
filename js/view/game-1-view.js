import AbstractView from './abstract-view';
import {
  BackButton,
  Timer,
  Lives
} from './header-view';

export default class Game1 extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
    this.state = data.getState();
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
      <form class="game__content">
        <div class="game__option">
          <img src="${this.state.gameScreens[this.state.level].answers[0].image.url}" alt="Option 1" width="468" height="458">
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
          <img src="${this.state.gameScreens[this.state.level].answers[1].image.url}" alt="Option 2" width="468" height="458">
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
    </section>`;
  }
  bind() {
    const leftRadioGroup = [...this.element.querySelectorAll(`input[name=question1]`)];
    const rightRadioGroup = [...this.element.querySelectorAll(`input[name=question2]`)];
    const backButton = this.element.querySelector(`.back`);
    // const gameSection = this.element.querySelector(`.game`);
    let isLeftPictureSelected = false;
    let isRightPictureSelected = false;

    // gameSection.appendChild(statsTemplate(data));

    const compareChecked = () => {
      if (isLeftPictureSelected && isRightPictureSelected) {
        this.data.addAnswer(true, 1500);
        this.data.checkLivesCount(this.data);
        this.data.changeGameLevel();
        this.data.checkGameOver(this.data);
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

    backButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackButtonClick();
    });
  }
  onBackButtonClick() {}
}

/* `
    <header class="header">
      ${new BackButton().template}
      ${new Timer(30).template}
      ${new Lives(this.data.lives).template}
    </header>
    <section class="game">
    ${gameTask}
      <form class="game__content">
        <div class="game__option">
          <img src="${this.data.gameScreens[this.data.level].answers[0].image.url}" alt="Option 1" width="468" height="458">
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
          <img src="${this.data.gameScreens[this.data.level].answers[1].image.url}" alt="Option 2" width="468" height="458">
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
    </section>` */

// import {
//   makeElement,
//   showScreen,
// } from "../utils/utils";
// import headerTemplate from '../templates/header-template';
// import statsTemplate from '../templates/stats-template';
// import greeting from "./greeting";
// import {
//   gameState
// } from "../data/game-state";

// const game1 = (data) => {
//   const gameTask = `<p class="game__task">${data.gameScreens[data.level].question}</p>`;
//   const game1Html = `
//     ${headerTemplate(data)}
//     <section class="game">
//     ${gameTask}
//       <form class="game__content">
//         <div class="game__option">
//           <img src="${data.gameScreens[data.level].answers[0].image.url}" alt="Option 1" width="468" height="458">
//           <label class="game__answer game__answer--photo">
//             <input class="visually-hidden" name="question1" type="radio" value="photo">
//             <span>Фото</span>
//           </label>
//           <label class="game__answer game__answer--paint">
//             <input class="visually-hidden" name="question1" type="radio" value="paint">
//             <span>Рисунок</span>
//           </label>
//         </div>
//         <div class="game__option">
//           <img src="${data.gameScreens[data.level].answers[1].image.url}" alt="Option 2" width="468" height="458">
//           <label class="game__answer  game__answer--photo">
//             <input class="visually-hidden" name="question2" type="radio" value="photo">
//             <span>Фото</span>
//           </label>
//           <label class="game__answer  game__answer--paint">
//             <input class="visually-hidden" name="question2" type="radio" value="paint">
//             <span>Рисунок</span>
//           </label>
//         </div>
//       </form>

//     </section>`;

//   const game1El = makeElement(game1Html);
//   const leftRadioGroup = [...game1El.querySelectorAll(`input[name=question1]`)];
//   const rightRadioGroup = [...game1El.querySelectorAll(`input[name=question2]`)];
//   const backBtn = game1El.querySelector(`.back`);
//   const gameSection = game1El.querySelector(`.game`);
//   let isLeftPictureSelected = false;
//   let isRightPictureSelected = false;

//   gameSection.appendChild(statsTemplate(data));

//   const compareChecked = () => {
//     if (isLeftPictureSelected && isRightPictureSelected) {
//       gameState.addAnswer(true, 1500);
//       gameState.checkLivesCount(data);
//       gameState.changeGameLevel();
//       gameState.checkGameOver(data);
//     }
//   };

//   leftRadioGroup.map((el) => {
//     el.addEventListener(`click`, () => {
//       if (el.checked) {
//         isLeftPictureSelected = true;
//       }
//       compareChecked();
//     });
//   });

//   rightRadioGroup.forEach((el) => {
//     el.addEventListener(`click`, () => {
//       if (el.checked) {
//         isRightPictureSelected = true;
//       }
//       compareChecked();
//     });
//   });

//   backBtn.addEventListener(`click`, () => showScreen(greeting()));

//   return game1El;
// };

// export default game1;
