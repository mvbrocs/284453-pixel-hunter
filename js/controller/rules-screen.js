import Rules from "../view/rules-view";
import Router from "../router/application-router";

export default class RulesScreen {
  get element() {
    const rulesScreen = new Rules();
    rulesScreen.onButtonClick = () => Router.showGame();

    return rulesScreen.element;
  }
}

// import Rules from '../view/rules-view';
// import {
//   showScreen
// } from '../utils/utils';
// import greeting from './greeting';
// import gameState from '../data/game-state';

// export default () => {
//   const rules = new Rules();
//   rules.onButtonClick = () => {
//     gameState.resetGame();
//     gameState.showScreenWithData(gameState.getState());
//   };

//   rules.onBackButtonClick = () => {
//     showScreen(greeting().element);
//   };

//   return rules;
// };
