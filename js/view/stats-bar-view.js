import AbstractView from './abstract-view';

export default class StatsBar extends AbstractView {
  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
    this.questionsCount = this.state.gameScreens.length;
  }

  get template() {
    const blankStats = [];
    const gameStats = [];
    const gameStatus = this.data.addClassOfResult(this.state, blankStats);

    for (let i = 0; i < this.questionsCount; i += 1) {
      blankStats.push(`stats__result--unknown`);
    }

    for (let i = 0; i < this.questionsCount; i += 1) {
      gameStats.push(`<li class="stats__result ${gameStatus[i]}"></li>`);
    }

    const statsHtml = `
      <ul class="stats">
        ${gameStats.join(``)}
      </ul>`;

    return statsHtml;
  }
}

// const statsHtml = `
//     <ul class="stats">
//       ${gameStats.join(``)}
//     </ul>`;

// import {
//   makeElement
// } from "../utils/utils";
// import gameState from "../data/game-state";

// const results = [
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`,
//   `stats__result--unknown`
// ];

// const statsTemplate = (data) => {
//   const gameStatus = gameState.addClassOfResult(data, results);

//   // FIXME: переделать на цикл
//   const statsHtml = `
//   <ul class="stats">
//     <li class="stats__result ${gameStatus[0]}"></li>
//     <li class="stats__result ${gameStatus[1]}"></li>
//     <li class="stats__result ${gameStatus[2]}"></li>
//     <li class="stats__result ${gameStatus[3]}"></li>
//     <li class="stats__result ${gameStatus[4]}"></li>
//     <li class="stats__result ${gameStatus[5]}"></li>
//     <li class="stats__result ${gameStatus[6]}"></li>
//     <li class="stats__result ${gameStatus[7]}"></li>
//     <li class="stats__result ${gameStatus[8]}"></li>
//     <li class="stats__result ${gameStatus[9]}"></li>
//   </ul>`;
//   const statsEl = makeElement(statsHtml);

//   return statsEl;
// };

// export default statsTemplate;
