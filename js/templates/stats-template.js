import {
  answers,
  SLOW_ANSWER,
  QUICK_ANSWER
} from "../data/game-data";
import {
  makeElement
} from "../utils";

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

const addClassOfResult = (arr) => {
  for (let i = 0; i < results.length; i += 1) {
    if (arr[i]) {
      if (arr[i][0] && (arr[i][1] > QUICK_ANSWER && arr[i][1] < SLOW_ANSWER)) {
        results[i] = `stats__result--correct`;
      }
      if (arr[i][0] && arr[i][1] > SLOW_ANSWER) {
        results[i] = `stats__result--slow`;
      }
      if (arr[i][0] && arr[i][1] < QUICK_ANSWER) {
        results[i] = `stats__result--fast`;
      }
      if (!arr[i][0]) {
        results[i] = `stats__result--wrong`;
      }
    }
  } return results;
};

const statsTemplate = () => {
  addClassOfResult(answers);

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
