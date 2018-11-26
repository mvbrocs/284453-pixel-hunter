import {
  showScreen
} from "./utils";
import intro from './intro';
import {
  gamePlay
} from "./data/game-data";

showScreen(intro(gamePlay));
