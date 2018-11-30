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
  gameState.addClassOfResult(data, results);

  const statsHtml = `
  <ul class="stats">
    <li class="stats__result ${results[0]}"></li>
    <li class="stats__result ${results[1]}"></li>
    <li class="stats__result ${results[2]}"></li>
    <li class="stats__result ${results[3]}"></li>
    <li class="stats__result ${results[4]}"></li>
    <li class="stats__result ${results[5]}"></li>
    <li class="stats__result ${results[6]}"></li>
    <li class="stats__result ${results[7]}"></li>
    <li class="stats__result ${results[8]}"></li>
    <li class="stats__result ${results[9]}"></li>
  </ul>`;
  const statsEl = makeElement(statsHtml);

  return statsEl;
};

export default statsTemplate;
