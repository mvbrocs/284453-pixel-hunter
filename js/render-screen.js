import {
  screens, gamePlay
} from './data/game-data';
import {
  showScreen
} from './utils';
import stats from './screens/stats';

const renderScreen = () => {
  return (gamePlay.GAME_SETUP.level < screens.length)
    ? showScreen(screens[gamePlay.GAME_SETUP.level])
    : showScreen(stats(gamePlay));
};

export default renderScreen;
