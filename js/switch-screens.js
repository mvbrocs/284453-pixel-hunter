import {
  INITIAL_STATE,
  Answer
} from './data/game-data';
import {
  makeScreenWithData,
  gameScreens
} from './data/game-screens';
import {
  showScreen
} from './utils';
import stats from './screens/stats';

let game = Object.assign({}, INITIAL_STATE);

const switchScreens = () => {
  if (game.level < gameScreens.length - 1) {
    game.level += 1;
  } else {
    return showScreen(stats(Answer));
  }
  return makeScreenWithData(gameScreens[game.level]);
};

export {
  switchScreens,
};
