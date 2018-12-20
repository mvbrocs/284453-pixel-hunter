import Rules from "../view/rules-view";
import Router from "../router/application-router";

export default class RulesScreen {
  constructor() {
    this.playerName = null;
  }
  get element() {
    const rulesScreen = new Rules();
    rulesScreen.onBtnClick = () => {
      this.playerName = rulesScreen.getPlayerName();
      Router.showGame(this.playerName);
    };
    rulesScreen.onBackBtnClick = () => Router.exitModalWindow();

    return rulesScreen.element;
  }
}
