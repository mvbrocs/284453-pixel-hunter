import AbstractView from './abstract-view';
import {
  BackButton,
  Timer,
  Lives
} from './header-view';
import StatsBar from './stats-bar-view';

export default class Game1 extends AbstractView {
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

  get result() {
    const answersTemp = [];
    this.__answers.forEach((el) => {
      answersTemp.push(el[0] === el[1]);
    });
    this.__gameAnswer = (answersTemp[0] === answersTemp[1]);
    return this.__gameAnswer;
  }

  convertAnswer(answer) {
    const InputToAnswerType = {
      paint: `painting`,
      photo: `photo`
    };
    return InputToAnswerType[answer];
  }

  bind() {
    const leftRadioGroup = [...this.element.querySelectorAll(`input[name=question1]`)];
    const rightRadioGroup = [...this.element.querySelectorAll(`input[name=question2]`)];
    const backButton = this.element.querySelector(`.back`);
    const gameSection = this.element.querySelector(`.game`);
    let isLeftPictureSelected = false;
    let isRightPictureSelected = false;

    gameSection.appendChild(new StatsBar(this.state).element);

    const compareChecked = () => {
      if (isLeftPictureSelected && isRightPictureSelected) {
        this.compareChecking();
      }
    };

    leftRadioGroup.forEach((el) => {
      const imageType = this.state.gameScreens[this.state.level].answers[0].type;
      const answerType = this.convertAnswer(el.value);

      el.addEventListener(`click`, () => {
        if (el.checked) {
          isLeftPictureSelected = true;
          this.__answers[0] = [answerType, imageType];
        }
        compareChecked();
      });
    });

    rightRadioGroup.forEach((el) => {
      const imageType = this.state.gameScreens[this.state.level].answers[1].type;
      const answerType = this.convertAnswer(el.value);

      el.addEventListener(`click`, () => {
        if (el.checked) {
          isRightPictureSelected = true;
          this.__answers[1] = [answerType, imageType];
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

  compareChecking() {}
}
