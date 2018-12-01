import {
  makeElement
} from "../utils";
import {
  gameState
} from "../data/game-state";

const results = [
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`,
  `stats__result--unknown`
];

const statsTemplate = (data) => {
  const gameStatus = gameState.addClassOfResult(data, results);

  // FIXME: переделать на цикл
  const statsHtml = `
  <ul class="stats">
    <li class="stats__result ${gameStatus[0]}"></li>
    <li class="stats__result ${gameStatus[1]}"></li>
    <li class="stats__result ${gameStatus[2]}"></li>
    <li class="stats__result ${gameStatus[3]}"></li>
    <li class="stats__result ${gameStatus[4]}"></li>
    <li class="stats__result ${gameStatus[5]}"></li>
    <li class="stats__result ${gameStatus[6]}"></li>
    <li class="stats__result ${gameStatus[7]}"></li>
    <li class="stats__result ${gameStatus[8]}"></li>
    <li class="stats__result ${gameStatus[9]}"></li>
  </ul>`;
  const statsEl = makeElement(statsHtml);

  return statsEl;
};

export default statsTemplate;
