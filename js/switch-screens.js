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

// let game = Object.assign({}, INITIAL_STATE);
// console.log("​game", game);

console.log(INITIAL_STATE);

let game = {
  level: 0,
  lives: 3,
  time: 30
};

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
