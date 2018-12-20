import Intro from "../view/intro-view";
import Router from "../router/application-router";

export default class IntroScreen {
  get element() {
    const intro = new Intro();
    intro.onBtnClick = () => Router.showGreeting();

    return intro.element;
  }
}

