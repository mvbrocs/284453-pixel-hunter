import {
  INITIAL_STATE
} from './data/game-data';
import game1 from './screens/game-1';


let game;
const renderScreen = () => {
  game = Object.assign({}, INITIAL_STATE);
  console.log(game);
  debugger;
  // let lives = checkLives(answers);
  // if (!lives) {
  //   return showScreen(stats(gamePlay));
  // }
  // return (gamePlay.GAME_SETUP.level < screens.length)
  //   ? showScreen(screens[gamePlay.GAME_SETUP.level])
  //   : showScreen(stats(gamePlay));
};

export default renderScreen;
