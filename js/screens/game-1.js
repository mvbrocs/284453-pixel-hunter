import Game1 from "../view/game-1-view";
import gameState from "../data/game-state";
import greeting from "./greeting";
import {
  showScreen
} from "../utils/utils";

export default () => {
  const game1 = new Game1(gameState);
  game1.onBackButtonClick = () => {
    showScreen(greeting.element);
  };
  game1.compareChecking = () => {
    gameState.addAnswer(true, 1500);
    gameState.checkLivesCount(gameState.getState());
    gameState.changeGameLevel();
    gameState.checkGameOver(gameState.getState());
  };

  return game1;
};
