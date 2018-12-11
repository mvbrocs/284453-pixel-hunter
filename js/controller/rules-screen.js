import Rules from "../view/rules-view";
import Router from "../router/application-router";

export default class RulesScreen {
  get element() {
    const rulesScreen = new Rules();
    rulesScreen.onButtonClick = () => Router.showGame();

    return rulesScreen.element;
  }
}
