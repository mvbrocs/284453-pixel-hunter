import {
  showScreen,
  showModal
} from "../utils/utils";
import IntroScreen from "../controller/intro-screen";
import GreetingScreen from "../controller/greeting-screen";
import RulesScreen from "../controller/rules-screen";
import GameModel from "../model/game-model";
import GameScreen from "../controller/game-screen";
import StatsScreen from "../controller/stats-screen";
import StatsBarTemplate from "../controller/stats-bar";
import ErrorScreen from "../controller/error-screen";
import SplashScreen from "../controller/loader-element";
import ExitModal from "../controller/exit-modal";
import Loader from "../utils/loader";

let GAME_SCREENS;

const getData = (data) => {
  GAME_SCREENS = data;
  return GAME_SCREENS;
};

export default class Router {
  static start() {
    const splash = new SplashScreen();
    showScreen(splash.element);
    splash.start();
    Loader.loadData().
      then((data) => getData(data)).
      then((_response) => this.showIntro()).
      catch(this.showError).
      then(() => splash.stop());
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

  static showGame(player) {
    const model = new GameModel(player, GAME_SCREENS);
    const gameScreen = new GameScreen(model);
    gameScreen.init();
    showScreen(gameScreen.element);
  }

  static showStatsBar(state) {
    const statsBar = new StatsBarTemplate(state);
    return statsBar.template;
  }

  static exitModalWindow() {
    const exitModal = new ExitModal();
    showModal(exitModal.element);
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);
    showScreen(errorScreen.element);
  }

  static showStats(state) {
    Loader.saveResults(state).
    catch(this.showError);

    const statsScreen = new StatsScreen(state);
    showScreen(statsScreen.element);
    statsScreen.showScoreBoard(state);
  }
}
