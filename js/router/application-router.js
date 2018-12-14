import {
  showScreen
} from "../utils/utils";
import IntroScreen from "../controller/intro-screen";
import GreetingScreen from "../controller/greeting-screen";
import RulesScreen from "../controller/rules-screen";
import GameModel from "../model/game-model";
import GameScreen from "../controller/game-screen";
import StatsScreen from "../controller/stats-screen";
import StatsBarTemplate from "../controller/stats-bar";
import ErrorScreen from "../controller/error-screen";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

let GAME_SCREENS;

const getData = (data) => {
  GAME_SCREENS = data;
  return GAME_SCREENS;
};

export default class Router {
  static start() {
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((_response) => _response.json()).
    then((data) => getData(data)).
    then((_response) => this.showIntro()).
    catch(this.showError);
  }

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
    const model = new GameModel(GAME_SCREENS);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    showScreen(gameScreen.element);
  }

  static showStats(state) {
    const statsScreen = new StatsScreen(state);
    showScreen(statsScreen.element);
  }

  static showStatsBar(state) {
    const statsBar = new StatsBarTemplate(state);
    return statsBar.template;
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);
    showScreen(errorScreen.element);
  }
}
