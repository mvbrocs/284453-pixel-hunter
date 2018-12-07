import {
  INITIAL_STATE
} from "./game-data";
import game1 from "../screens/game-1";
import game2 from "../screens/game-2";
import game3 from "../screens/game-3";
import {
  showScreen
} from "../utils/utils";
import checkLives from "./check-lives";
import {
  SLOW_ANSWER,
  QUICK_ANSWER
} from "../data/game-data";
import stats from "../screens/stats";

/* {
  level: 0,
  lives: 3,
  time: 30,
  gameScreens: Array(10),
  answers
} */

const gameScreens = [{
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/DKR1HtB.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/1KegWPz.jpg`
    },
    type: `photo`
  }]
}, {
  type: `one-of-three`,
  question: `Найдите рисунок среди изображений`,
  answers: [{
    image: {
      url: `https://i.imgur.com/DiHM5Zb.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `http://i.imgur.com/DKR1HtB.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `one-of-three`,
  question: `Найдите рисунок среди изображений`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/D2F0370D6.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }
  ]
}, {
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/DKR1HtB.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `https://i.imgur.com/DiHM5Zb.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/1KegWPz.jpg`
    },
    type: `painting`
  }]
}];

let gamePlay;

// TODO: Структура должна определять правильный ответ. Сделать метод проверки правильного ответа
// TODO: должно храниться 3 состояния игры
const gameState = {
  resetGame() {
    gamePlay = Object.assign({}, INITIAL_STATE, {answers: []});
    gamePlay.gameScreens = gameScreens;
  },
  changeGameLevel() {
    gamePlay.level += 1;
  },
  addAnswer(result, time) {
    gamePlay.answers.push([result, time]);
  },
  getState() {
    return gamePlay;
  },
  checkLivesCount(state) {
    gamePlay.lives = checkLives(state, INITIAL_STATE);
  },
  checkGameOver(state) {
    const lives = checkLives(state);
    const level = state.level;
    if (level === 10 || lives < 0) {
      // return showScreen(stats(state).element);
      return showScreen(stats().element);
    } return this.showScreenWithData(state);
  },
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
  },
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
  },
  // FIXME: переделать на reduce
  quickAnswersCount(state) {
    let acc = 0;
    state.answers.forEach((el) => {
      if (el[0] && el[1] < QUICK_ANSWER) {
        acc += 1;
      }
    });
    return acc;
  },
  // FIXME: переделать на reduce
  slowAnswersCount(state) {
    let acc = 0;
    state.answers.forEach((el) => {
      if (el[0] && el[1] > SLOW_ANSWER) {
        acc += 1;
      }
    });
    return acc;
  },
  // FIXME: переделать на reduce
  correctAnswersCount(state) {
    let acc = 0;
    state.answers.forEach((el) => {
      if (el[0]) {
        acc += 1;
      }
    });
    return acc;
  },
};

export default gameState;
