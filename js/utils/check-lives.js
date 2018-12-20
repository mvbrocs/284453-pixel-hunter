import {
  INITIAL_STATE
} from "../data/game-data";

const checkLives = (data) => {
  let lives = INITIAL_STATE.lives;
  const answers = data.answers;

  answers.forEach((el) => {
    if (!el[0] && lives >= 0) {
      lives -= 1;
    }
  });

  return lives;
};

export default checkLives;
