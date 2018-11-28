import {
  INITIAL_STATE
} from './data/game-data';
import {
  makeScreenWithData,
  gameScreens
} from './data/game-screens';

const startGame = () => {
  makeScreenWithData(gameScreens[INITIAL_STATE.level]);
};

export default startGame;
