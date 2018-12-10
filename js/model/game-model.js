import {
  INITIAL_STATE
} from "../data/game-data";
import GAME_SCREENS from "../data/game-screens";
import checkLives from "../data/check-lives";
import {
  showScreen
} from "../utils/utils";

export default class GameModel {
  constructor() {
    this.gamePlay = null;
  }

  resetGame() {
    this.gamePlay = Object.assign({}, INITIAL_STATE, {
      answers: []
    });
    this.gamePlay.gameScreens = GAME_SCREENS;
  }

  changeGameLevel() {
    this.gamePlay.level += 1;
  }

  addAnswer(result, time) {
    this.gamePlay.answers.push([result, time]);
  }

  get getState() {
    return this.gamePlay;
  }

  checkLivesCount(state) {
    this.gamePlay.lives = checkLives(state, INITIAL_STATE);
  }

  checkGameOver(state) {
    const lives = checkLives(state);
    const level = state.level;
    if (level === INITIAL_STATE.questions || lives < 0) {
      this.saveGameStats(state);
      return showScreen(stats(state).element);
    }
    return this.showScreenWithData(state);
  }

  showScreenWithData(state) {
    if (state.gameScreens[state.level].type === `two-of-two`) {
      return showScreen(game1(state).element);
    }
    if (state.gameScreens[state.level].type === `tinder-like`) {
      return showScreen(game2(state).element);
    }
    if (state.gameScreens[state.level].type === `one-of-three`) {
      return showScreen(game3(state).element);
    }
    return ``;
  }

  addClassOfResult(state, sourceArr) {
    const resultArr = [...sourceArr];

    if (state.answers.length < 1) {
      return resultArr;
    }
    for (let i = 0; i < resultArr.length; i += 1) {
      if (state.answers[i]) {
        if (state.answers[i][0] && (state.answers[i][1] > QUICK_ANSWER && state.answers[i][1] < SLOW_ANSWER)) {
          resultArr[i] = `stats__result--correct`;
        }
        if (state.answers[i][0] && state.answers[i][1] > SLOW_ANSWER) {
          resultArr[i] = `stats__result--slow`;
        }
        if (state.answers[i][0] && state.answers[i][1] < QUICK_ANSWER) {
          resultArr[i] = `stats__result--fast`;
        }
        if (!state.answers[i][0]) {
          resultArr[i] = `stats__result--wrong`;
        }
      }
    }
    return resultArr;
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

  saveGameStats(state) {
    const currentGameStats = {
      quickAnswersTotal: this.quickAnswersCount(state),
      slowAnswersTotal: this.slowAnswersCount(state),
      correctAnswersTotal: this.correctAnswersCount(state),
      livesTotal: this.negativeLivesChecker(state.lives),
      totalScores: this.totalScores(state),
    };

    if (state.playedGames.length === INITIAL_STATE.savedGamesCount) {
      state.playedGames.pop(INITIAL_STATE.savedGamesCount);
      state.playedGames.unshift(currentGameStats);
    } else {
      state.playedGames.unshift(currentGameStats);
    }
  }

}
