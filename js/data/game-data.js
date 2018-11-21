const QUICK_ANSWER = 10000;
const SLOW_ANSWER = 20000;

const Answer = {
  right: 100,
  quick: 50,
  slow: 50,
  bonusForLives: 50
};

const gameData = (a, lives) => {
  let acc = 0;
  let scores = 0;
  const livesBonus = Answer.bonusForLives * lives;

  a.forEach((el) => {
    const [answer, time] = el;

    if (answer) {
      acc += 1;
      scores += Answer.right;

      if (time < QUICK_ANSWER) {
        scores += Answer.quick;
      }
      if (time > SLOW_ANSWER) {
        scores -= Answer.slow;
      }
    }
  });

  if (acc < 10) {
    return -1;
  }
  return scores + livesBonus;
};

export default gameData;