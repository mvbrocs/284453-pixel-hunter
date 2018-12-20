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

  createFirstGameType(state) {
    const firstGameType = new Game1(state);
    firstGameType.compareChecking = () => {
      this.model.addAnswer(firstGameType.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
      this.changeLevel(state);
    };
    firstGameType.onBackBtnClick = () => {
      Router.exitModalWindow();
    };
    return firstGameType.element;
  }

  createSecondGameType(state) {
    const secondGameType = new Game2(state);
    secondGameType.onFormChange = () => {
      this.model.addAnswer(secondGameType.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
      this.changeLevel(state);
    };
    secondGameType.onBackBtnClick = () => {
      Router.exitModalWindow();
    };
    return secondGameType.element;
  }

  createThirdGameType(state) {
    const thirdGameType = new Game3(state);
    thirdGameType.onImageClick = () => {
      this.model.addAnswer(thirdGameType.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
      this.changeLevel(state);
    };
    thirdGameType.onBackBtnClick = () => {
      Router.exitModalWindow();
    };
    return thirdGameType.element;
  }

  showScreenWithData(state) {
    switch (state.gameScreens[state.level].type) {
      case `two-of-two`:
        return this.createFirstGameType(state);
      case `tinder-like`:
        return this.createSecondGameType(state);
      case `one-of-three`:
        return this.createThirdGameType(state);
      default:
        return ``;
    }
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
    }
    this.updateRoot();
    this.startTimer();
    return showScreen(this.element);
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
      return false;
    }
    this.model.addAnswer(false, 0);
    this.changeLevel(this.model.getState);
    return true;
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
