import {
  screens, gamePlay
} from './data/game-data';
import {
  showScreen
} from './utils';
import game1 from './screens/game-1';
import game2 from './screens/game-2';
import stats from './screens/stats';
import game3 from './screens/game-3';

const renderScreen = () => showScreen(screens[gamePlay.GAME_SETUP.level]);

export default renderScreen;
