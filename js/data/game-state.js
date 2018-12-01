import {
  INITIAL_STATE
} from "./game-data";
import game1 from "../screens/game-1";
import game2 from "../screens/game-2";
import game3 from "../screens/game-3";
import {
  showScreen
} from "../utils";
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
      url: `https://k42.kn3.net/D2F0370D6.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k32.kn3.net/5C7060EC5.jpg`
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
  checkLivesCount(data) {
    gamePlay.lives = checkLives(data, INITIAL_STATE);
  },
  checkGameOver(data) {
    const lives = checkLives(data);
    const level = data.level;
    if (level === 10 || lives < 0) {
      return showScreen(stats(data));
    } return this.showScreenWithData(data);
  },
  showScreenWithData(data) {
    if (data.gameScreens[data.level].type === `two-of-two`) {
      return showScreen(game1(data));
    }
    if (data.gameScreens[data.level].type === `tinder-like`) {
      return showScreen(game2(data));
    }
    if (data.gameScreens[data.level].type === `one-of-three`) {
      return showScreen(game3(data));
    }
    return ``;
  },
  addClassOfResult(dataArr, sourceArr) {
    const resultArr = [...sourceArr];

    if (dataArr.answers.length < 1) {
      return resultArr;
    }
    for (let i = 0; i < resultArr.length; i += 1) {
      if (dataArr.answers[i]) {
        if (dataArr.answers[i][0] && (dataArr.answers[i][1] > QUICK_ANSWER && dataArr.answers[i][1] < SLOW_ANSWER)) {
          resultArr[i] = `stats__result--correct`;
        }
        if (dataArr.answers[i][0] && dataArr.answers[i][1] > SLOW_ANSWER) {
          resultArr[i] = `stats__result--slow`;
        }
        if (dataArr.answers[i][0] && dataArr.answers[i][1] < QUICK_ANSWER) {
          resultArr[i] = `stats__result--fast`;
        }
        if (!dataArr.answers[i][0]) {
          resultArr[i] = `stats__result--wrong`;
        }
      }
    }
    return resultArr;
  },
  // FIXME: переделать на reduce
  quickAnswersCount(data) {
    let acc = 0;
    data.answers.forEach((el) => {
      if (el[0] && el[1] < QUICK_ANSWER) {
        acc += 1;
      }
    });
    return acc;
  },
  // FIXME: переделать на reduce
  slowAnswersCount(data) {
    let acc = 0;
    data.answers.forEach((el) => {
      if (el[0] && el[1] > SLOW_ANSWER) {
        acc += 1;
      }
    });
    return acc;
  },
  // FIXME: переделать на reduce
  correctAnswersCount(data) {
    let acc = 0;
    data.answers.forEach((el) => {
      if (el[0]) {
        acc += 1;
      }
    });
    return acc;
  },
};

export {
  gameState
};
