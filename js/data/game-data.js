const QUICK_ANSWER = 10000;
const SLOW_ANSWER = 20000;

// FIXME: сделать константу с количеством вопросов
// TODO: проверить есть ли где еще завязки на жесткое число
const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
  answers: []
});

const Answer = {
  RIGHT: 100,
  QUICK: 50,
  SLOW: 50,
  BONUS_FOR_LIVES: 50,
};

const gameData = (state) => {
  const lives = state.lives;
  const answers = state.answers;

  let acc = 0;
  let scores = 0;
  const livesBonus = Answer.BONUS_FOR_LIVES * lives;

  if (livesBonus) {
    scores += livesBonus;
  }

  answers.forEach((el) => {
    const [answer, time] = el;

    if (answer) {
      acc += 1;
      scores += Answer.RIGHT;
    }
    if (answer && (time < QUICK_ANSWER)) {
      scores += Answer.QUICK;
    }
    if (answer && (time > SLOW_ANSWER)) {
      scores -= Answer.SLOW;
    }
  });
  // FIXME: убрать магическое число
  if (acc < 7) {
    return -1;
  }
  return scores;
};

export {
  QUICK_ANSWER,
  SLOW_ANSWER,
  gameData,
  INITIAL_STATE,
  Answer,
};
