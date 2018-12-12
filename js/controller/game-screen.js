import Game1 from "../view/game-1-view";
import Game2 from "../view/game-2-view";
import Game3 from "../view/game-3-view";
import {
  showScreen
} from "../utils/utils";
import {
  INITIAL_STATE, ONE_SECOND
} from "../data/game-data";
import checkLives from "../data/check-lives";
import Router from "../router/application-router";
import Timer from "../view/timer-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._timer = null;
  }

  get element() {
    return this.showScreenWithData(this.model.getState);
  }

  init() {
    this.model.resetGame();
    this._startTimer(this.model);
    this.updateRoot();
  }

  showScreenWithData(state) {
    if (state.gameScreens[state.level].type === `two-of-two`) {
      const game1 = new Game1(state);
      game1.compareChecking = () => {
        this.model.addAnswer(game1.result, 15000);
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
        this.model.addAnswer(game2.result, 15000);
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
        this.model.addAnswer(game3.result, 15000);
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
    this.model.checkLivesCount(state);
    this.model.changeGameLevel(state);
    this.checkGameOver(state);
  }

  tick(state) {
    state.gamePlay.time -= 1;
    this.updateRoot();
  }

  _startTimer(state) {
    this._timer = setTimeout(() => {
      this.tick(state);
      this._startTimer(state);
    }, ONE_SECOND);
    // console.log(this.showScreenWithData(this.model.getState));
  }

  _stopTimer() {
    clearTimeout(this._timer);
  }

  updateRoot() {
    this.root = this.showScreenWithData(this.model.getState);
    this.rootHeader = this.root.querySelector(`.header`);
    this.rootLives = this.rootHeader.querySelector(`.game__lives`);
    const timerElement = new Timer(this.model.getState.time).element;
    this.rootHeader.insertBefore(timerElement, this.rootLives);
  }
}
