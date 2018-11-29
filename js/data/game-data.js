const QUICK_ANSWER = 10000;
const SLOW_ANSWER = 20000;

const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
});

const Answer = {
  RIGHT: 100,
  QUICK: 50,
  SLOW: 50,
  BONUS_FOR_LIVES: 50,
};

let answers = [];

const quickAnswersCount = (arr) => {
  let acc = 0;
  arr.forEach((el) => {
    if (el[1] < QUICK_ANSWER) {
      acc += 1;
    }
  });
  return acc;
};

const slowAnswersCount = (arr) => {
  let acc = 0;
  arr.forEach((el) => {
    if (el[1] > SLOW_ANSWER) {
      acc += 1;
    }
  });
  return acc;
};

const gameData = (a, lives) => {
  let acc = 0;
  let scores = 0;
  const livesBonus = Answer.BONUS_FOR_LIVES * lives;

  a.forEach((el) => {
    const [answer, time] = el;

    if (answer) {
      acc += 1;
      scores += Answer.RIGHT;

      if (time < QUICK_ANSWER) {
        scores += Answer.QUICK;
      }
      if (time > SLOW_ANSWER) {
        scores -= Answer.SLOW;
      }
    }
  });

  if (acc < 7) {
    return -1;
  }
  return scores + livesBonus;
};

export {
  QUICK_ANSWER,
  SLOW_ANSWER,
  gameData,
  INITIAL_STATE,
  Answer,
  answers,
  quickAnswersCount,
  slowAnswersCount
};
