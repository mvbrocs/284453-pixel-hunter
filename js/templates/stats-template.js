import {
  answers,
  SLOW_ANSWER,
  QUICK_ANSWER
} from "../data/game-data";
import {
  makeElement
} from "../utils";
import { gameState } from "../data/game-state";

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

const addClassOfResult = (data) => {
  if (!data.answers.length) {
    return results;
  }
  for (let i = 0; i < results.length; i += 1) {
    if (data.answers[i]) {
      if (data.answers[i][0] && (data.answers[i][1] > QUICK_ANSWER && data.answers[i][1] < SLOW_ANSWER)) {
        results[i] = `stats__result--correct`;
      }
      if (data.answers[i][0] && data.answers[i][1] > SLOW_ANSWER) {
        results[i] = `stats__result--slow`;
      }
      if (data.answers[i][0] && data.answers[i][1] < QUICK_ANSWER) {
        results[i] = `stats__result--fast`;
      }
      if (!data.answers[i][0]) {
        results[i] = `stats__result--wrong`;
      }
    }
  } return results;
};

const statsTemplate = () => {
  addClassOfResult(gameState);

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
