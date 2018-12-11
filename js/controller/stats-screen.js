import Stats from "../view/stats-view";
import Router from "../router/application-router";

export default class StatsScreen {
  constructor(model) {
    this.model = model;
  }
  get element() {
    const statsScreen = new Stats(this.model);
    statsScreen.insertStatsBar = () => {
      // return statsBar(gameState.getState()).template;
    };
    statsScreen.onBackButtonClick = () => {
      Router.showGreeting();
    };

    return statsScreen.element;
  }
}

// import Stats from "../view/stats-view";
// import gameState from "../data/game-state";
// import {
//   showScreen
// } from "../utils/utils";
// import greeting from "./greeting";
// import statsBar from "./stats-bar";

// export default () => {
//   const stats = new Stats(gameState, gameState.getState());
//   // stats.onBackButtonClick = () => {
//   //   showScreen(greeting().element);
//   // };
//   stats.insertStatsBar = () => {
//     return statsBar(gameState.getState()).template;
//   };

//   return stats;
// };
