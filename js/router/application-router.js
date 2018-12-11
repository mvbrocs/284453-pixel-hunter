import {
  showScreen
} from "../utils/utils";
import IntroScreen from "../controller/intro-screen";
import GreetingScreen from "../controller/greeting-screen";
import RulesScreen from "../controller/rules-screen";
import GameModel from "../model/game-model";
import GameScreen from "../controller/game-screen";
import StatsScreen from "../controller/stats-screen";

export default class Router {
  static showIntro() {
    const introScreen = new IntroScreen();
    showScreen(introScreen.element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    showScreen(greetingScreen.element);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    showScreen(rulesScreen.element);
  }

  static showGame() {
    const model = new GameModel();
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    showScreen(gameScreen.element);
  }

  static showStats() {
    const statsScreen = new StatsScreen();
    showScreen(statsScreen.element);
  }
}
