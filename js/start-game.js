import {
  INITIAL_STATE, answers
} from './data/game-data';
import {
  makeScreenWithData,
  gameScreens
} from './data/game-screens';

const startGame = () => {
  answers.length = 0;
  makeScreenWithData(gameScreens[INITIAL_STATE.level]);
};

export default startGame;
