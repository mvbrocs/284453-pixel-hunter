const QUICK_ANSWER = 10000;
const SLOW_ANSWER = 20000;

const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
  questions: 10,
  savedGamesCount: 3,
  answers: [],
  playedGames: null
});

const Answer = {
  RIGHT: 100,
  QUICK: 50,
  SLOW: 50,
  BONUS_FOR_LIVES: 50,
};

const ONE_SECOND = 1000;

const gameData = (state) => {
  const lives = state.lives;
  const answers = state.answers;

  let acc = 0;
  let score = 0;
  const livesBonus = Answer.BONUS_FOR_LIVES * lives;

  if (livesBonus) {
    score += livesBonus;
  }

  answers.forEach((el) => {
    const [answer, time] = el;

    if (answer) {
      acc += 1;
      score += Answer.RIGHT;
    }
    if (answer && (time < QUICK_ANSWER)) {
      score += Answer.QUICK;
    }
    if (answer && (time > SLOW_ANSWER)) {
      score -= Answer.SLOW;
    }
  });
  if (acc < INITIAL_STATE.questions - INITIAL_STATE.lives) {
    return -1;
  }
  return score;
};

export {
  QUICK_ANSWER,
  SLOW_ANSWER,
  gameData,
  INITIAL_STATE,
  ONE_SECOND,
  Answer,
};
