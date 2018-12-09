import Game1 from "../view/game-1-view";
import gameState from "../data/game-state";
import greeting from "./greeting";
import {
  showScreen
} from "../utils/utils";

export default () => {
  const game1 = new Game1(gameState.getState());
  game1.onBackButtonClick = () => {
    showScreen(greeting().element);
  };
  game1.compareChecking = () => {
		console.log("​game1.compareChecking -> game1.answer", game1.result);
    gameState.addAnswer(game1.result, 1500);
    gameState.checkLivesCount(gameState.getState());
    gameState.changeGameLevel();
    gameState.checkGameOver(gameState.getState());
  };

  return game1;
};
