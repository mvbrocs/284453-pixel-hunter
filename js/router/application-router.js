import Intro from "../view/intro-view";
import {
  showScreen
} from "../utils/utils";
import Greeting from "../view/greeting-view";
import Rules from "../view/rules-view";
import Stats from "../view/stats-view";

export default class Application {
  static showIntro() {
    const intro = new Intro();
    showScreen(intro.element);
  }
  static showGreeting() {
    const greeting = new Greeting();
    showScreen(greeting.element);
  }
  static showRules() {
    const rules = new Rules();
    showScreen(rules.element);
  }
  static showGame() {
    // const intro = new Intro();
    // showScreen(intro.element);
  }
  static showStats() {
    const stats = new Stats();
    showScreen(stats.element);
  }
}
