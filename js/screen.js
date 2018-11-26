import {
  screens, gamePlay
} from './data/game-data';
import {
  showScreen
} from './utils';
import game1 from './game-1';
import game2 from './game-2';
import stats from './stats';
import game3 from './game-3';

const renderScreen = screens[gamePlay.GAME_SETUP.level];

export default renderScreen;
