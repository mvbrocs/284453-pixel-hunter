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
import checkLives from "../data/check-lives";
import Router from "../router/application-router";
import Timer from "../view/timer-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.timerElement = null;
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
    this.stopTimer();
    // const answerTime = (INITIAL_STATE.time - state.time) * ONE_SECOND; // не работает
    if (state.gameScreens[state.level].type === `two-of-two`) {
      const game1 = new Game1(state);
      game1.compareChecking = () => {
        this.model.addAnswer(game1.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      game1.onBackButtonClick = () => {
        Router.showGreeting();
      };
      return game1.element;
    }
    if (state.gameScreens[state.level].type === `tinder-like`) {
      const game2 = new Game2(state);
      game2.onFormChange = () => {
        this.model.addAnswer(game2.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      game2.onBackButtonClick = () => {
        Router.showGreeting();
      };
      return game2.element;
    }
    if (state.gameScreens[state.level].type === `one-of-three`) {
      const game3 = new Game3(state);
      game3.onImageClick = () => {
        this.model.addAnswer(game3.result, (INITIAL_STATE.time - state.time) * ONE_SECOND);
        this.changeLevel(state);
      };
      game3.onBackButtonClick = () => {
        Router.showGreeting();
      };
      return game3.element;
    }
    return ``;
  }

  checkGameOver(state) {
    const lives = checkLives(state);
    const level = state.level;

    if (level === INITIAL_STATE.questions || lives < 0) {
      this.saveGameStats(state);
      return Router.showStats(state);
    }
    return showScreen(this.element);
  }

  saveGameStats(state) {
    const currentGameStats = {
      quickAnswersTotal: this.model.quickAnswersCount(state),
      slowAnswersTotal: this.model.slowAnswersCount(state),
      correctAnswersTotal: this.model.correctAnswersCount(state),
      livesTotal: this.model.negativeLivesChecker(state.lives),
      totalScores: this.model.totalScores(state),
    };

    if (state.playedGames.length === INITIAL_STATE.savedGamesCount) {
      state.playedGames.pop(INITIAL_STATE.savedGamesCount);
      state.playedGames.unshift(currentGameStats);
    } else {
      state.playedGames.unshift(currentGameStats);
    }
  }

  changeLevel(state) {
    this.model.changeGameLevel(state);
    this.resetTimer();
    this.updateRoot();
    this.startTimer();
    this.model.checkLivesCount(state);
    this.checkGameOver(state);
  }

  tick() {
    if (this.model.gamePlay.time) {
      this.model.gamePlay.time -= 1;
      this.updateTimer();
    }
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }

  updateTimer() {
    const timerElement = new Timer(this.model.getState.time).element;
    this.rootHeader.replaceChild(timerElement, this.rootHeader.children[1]);
  }

  updateRoot() {
    const timerElement = new Timer(this.model.getState.time).element;
    this.timerElement = timerElement;
    this.root = this.showScreenWithData(this.model.getState);
    this.rootHeader = this.root.querySelector(`.header`);
    this.rootHeader.insertBefore(timerElement, this.rootHeader.children[1]);
  }

  resetTimer() {
    this.model.gamePlay.time = INITIAL_STATE.time;
  }
}
