import {
  screens, gamePlay, answers
} from './data/game-data';
import {
  showScreen
} from './utils';
import stats from './screens/stats';
import checkLives from './data/check-lives';

const renderScreen = () => {
  // let lives = checkLives(answers);
  // if (!lives) {
  //   return showScreen(stats(gamePlay));
  // }
  // return (gamePlay.GAME_SETUP.level < screens.length)
  //   ? showScreen(screens[gamePlay.GAME_SETUP.level])
  //   : showScreen(stats(gamePlay));
};

export default renderScreen;
