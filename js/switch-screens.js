import {
  INITIAL_STATE,
  Answer,
  answers,
} from './data/game-data';
import {
  makeScreenWithData,
  gameScreens
} from './data/game-screens';
import {
  showScreen
} from './utils';
import stats from './screens/stats';
import checkLives from './data/check-lives';

let game = Object.assign({}, INITIAL_STATE);

const switchScreens = () => {
  game.lives = checkLives(INITIAL_STATE, answers);
  if (game.lives < 0) {
    return showScreen(stats(Answer));
  }
  if (game.level < gameScreens.length - 1) {
    game.level += 1;
  } else {
    return showScreen(stats(Answer));
  }

  return makeScreenWithData(gameScreens[game.level], game);
};

export {
  switchScreens,
  game
};
