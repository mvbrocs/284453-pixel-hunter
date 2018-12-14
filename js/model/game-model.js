import {
  INITIAL_STATE,
  QUICK_ANSWER,
  SLOW_ANSWER,
  gameData
} from "../data/game-data";
import checkLives from "../data/check-lives";

export default class GameModel {
  constructor(screens) {
    this.gamePlay = null;
    this.gameScreens = screens;
  }

  get getState() {
    return this.gamePlay;
  }

  resetGame() {
    this.gamePlay = Object.assign({}, INITIAL_STATE, {
      answers: []
    });
    this.gamePlay.gameScreens = this.gameScreens;
  }

  changeGameLevel() {
    this.gamePlay.level += 1;
  }

  addAnswer(result, time) {
    this.gamePlay.answers.push([result, time]);
  }

  checkLivesCount(state) {
    this.gamePlay.lives = checkLives(state);
  }

  quickAnswersCount(state) {
    return state.answers.reduce((acc, el) => {
      if (el[0] && (el[1] < QUICK_ANSWER)) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  slowAnswersCount(state) {
    return state.answers.reduce((acc, el) => {
      if (el[0] && (el[1] > SLOW_ANSWER)) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  correctAnswersCount(state) {
    return state.answers.reduce((acc, el) => {
      if (el[0]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }

  totalScores(state) {
    return gameData(state);
  }

  negativeLivesChecker(lives) {
    return (lives < 0) ? 0 : lives;
  }
}
