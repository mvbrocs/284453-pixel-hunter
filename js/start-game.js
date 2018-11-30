import {
  game
} from './switch-screens';
import {
  gameState
} from './data/game-state';


const startGame = () => {
  gameState.resetGame();
  gameState.showScreenWithData(gameState.getState(), game);
};

export default startGame;
