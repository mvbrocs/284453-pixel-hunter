import Intro from "../view/intro-view";
import Router from "../router/application-router";

export default class IntroScreen {
  get element() {
    const intro = new Intro();
    intro.onButtonClick = () => Router.showGreeting();

    return intro.element;
  }
}

// import Intro from '../view/intro-view';
// import {
//   showScreen
// } from '../utils/utils';
// import greeting from './greeting';

// export default () => {
//   const intro = new Intro();
//   intro.onButtonClick = () => showScreen(greeting().element);

//   return intro;
// };
