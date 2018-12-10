import Greeting from "../view/greeting-view";
import Router from "../router/application-router";

export default class GreetingScreen {
  get element() {
    const greeting = new Greeting();
    greeting.onButtonClick = () => Router.showRules();

    return greeting.element;
  }

}
// import Greeting from '../view/greeting-view';
// import {
//   showScreen
// } from '../utils/utils';
// import rules from './rules';

// export default () => {
//   const greeting = new Greeting();
//   greeting.onButtonClick = () => showScreen(rules().element);

//   return greeting;
// };
