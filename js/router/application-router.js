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
    const splash = new SplashScreen();
    showScreen(splash.element);
    splash.start();
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(checkStatus).
    then((_response) => _response.json()).
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
    const player = state.playerName;
    const appID = 112233;
    const requestSettings = {
      body: JSON.stringify(state),
      headres: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    window.fetch(`https://es.dump.academy/pixel-hunter/stats/:${appID}-:${player}`, requestSettings).
    then(checkStatus).
    catch(this.showError);

    const statsScreen = new StatsScreen(state);
    showScreen(statsScreen.element);
  }
}
