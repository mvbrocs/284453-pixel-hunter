import Game1 from "../view/game-1-view";
import Game2 from "../view/game-2-view";
import Game3 from "../view/game-3-view";
import {
  showScreen
} from "../utils/utils";
import {
  INITIAL_STATE,
  ONE_SECOND
} from "../data/game-data";
import checkLives from "../utils/check-lives";
import Router from "../router/application-router";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.timer = null;
  }

  get element() {
    return this.root;
  }

  init() {
    this.model.resetGame();
    this.updateRoot();
    this.startTimer();
  }

  showScreenWithData(state) {
    if (state.gameScreens[state.level].type === `two-of-two`) {
      const gameFirst = new Game1(state);
      gameFirst.compareChecking = () => {
        this.model.addAnswer(gameFirst.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      gameFirst.onBackBtnClick = () => {
        Router.exitModalWindow();
      };
      return gameFirst.element;
    }
    if (state.gameScreens[state.level].type === `tinder-like`) {
      const gameSecond = new Game2(state);
      gameSecond.onFormChange = () => {
        this.model.addAnswer(gameSecond.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      gameSecond.onBackBtnClick = () => {
        Router.exitModalWindow();
      };
      return gameSecond.element;
    }
    if (state.gameScreens[state.level].type === `one-of-three`) {
      const gameThree = new Game3(state);
      gameThree.onImageClick = () => {
        this.model.addAnswer(gameThree.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      gameThree.onBackBtnClick = () => {
        Router.exitModalWindow();
      };
      return gameThree.element;
    }
    return ``;
  }

  changeLevel(state) {
    this.stopTimer();
    this.resetTimer();
    this.model.changeGameLevel(state);
    this.model.checkLivesCount(state);
    this.checkGameOver(state);
  }

  checkGameOver(state) {
    const lives = checkLives(state);
    const level = state.level;

    if (level === INITIAL_STATE.questions || lives < 0) {
      this.stopTimer();
      this.saveGameStats(state);
      return Router.showStats(state);
    } else {
      this.updateRoot();
      this.startTimer();
      return showScreen(this.element);
    }
  }

  saveGameStats(state) {
    const currentGameStats = {
      quickAnswersTotal: this.model.quickAnswersCount(state),
      slowAnswersTotal: this.model.slowAnswersCount(state),
      correctAnswersTotal: this.model.correctAnswersCount(state),
      livesTotal: this.model.negativeLivesChecker(state.lives),
      totalScores: this.model.totalScores(state),
      statsBarHtml: Router.showStatsBar(state)
    };

    state.playedGames = currentGameStats;
  }

  tick() {
    if (this.model.getState.time) {
      this.model.getState.time -= 1;
      this.updateTimer();
      this.blinking();
    } else {
      this.model.addAnswer(false, 0);
      this.changeLevel(this.model.getState);
      return true;
    }
    return false;
  }

  startTimer() {
    this.timer = setTimeout(() => {
      if (!this.tick()) {
        this.startTimer();
      }
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  resetTimer() {
    this.model.getState.time = INITIAL_STATE.time;
  }

  updateTimer() {
    this.rootTimer.innerText = ``;
    this.rootTimer.innerText = this.model.getState.time;
  }

  updateRoot() {
    this.root = this.showScreenWithData(this.model.getState);
    this.rootTimer = this.root.querySelector(`.game__timer`);
  }

  blinking() {
    if (this.model.getState.time <= 5) {
      this.rootTimer.classList.add(`blink`);
    }
  }
}
