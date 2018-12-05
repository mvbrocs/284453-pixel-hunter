import Game1 from "../view/game-1-view";
import {
  gameState
} from "../data/game-state";
import greeting from "./greeting";
import {
  showScreen
} from "../utils/utils";

const game1 = new Game1(gameState);
game1.onBackButtonClick = () => {
  showScreen(greeting.element);
};

export default game1;
