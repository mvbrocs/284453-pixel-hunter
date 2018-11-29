import {
  makeElement,
  showScreen,
} from "../utils";
import greeting from "./greeting";
import statsTemplate from "../templates/stats-template";
import backBtnTemplate from "../templates/back-btn-template";
import {
  answers,
  gameData,
  quickAnswersCount,
  slowAnswersCount
} from "../data/game-data";
import {
  game
} from "../switch-screens";

const result = () => {
  const scores = gameData(answers, game.lives);
  return (scores > 0) ? scores : false;
};


const stats = (state) => {
  const totalScores = result();
  const quickAnswersTotal = quickAnswersCount(answers);
  const slowAnswersTotal = slowAnswersCount(answers);

  const bonuses = (scores) => {
    const bonusesHtml = `<tr>
    <td></td>
    <td class="result__extra">Бонус за скорость:</td>
    <td class="result__extra">${quickAnswersTotal} <span class="stats__result stats__result--fast"></span></td>
    <td class="result__points">× ${state.QUICK}</td>
    <td class="result__total">${quickAnswersTotal * state.QUICK}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${game.lives} <span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">× ${state.BONUS_FOR_LIVES}</td>
    <td class="result__total">${game.lives * state.BONUS_FOR_LIVES}</td>
  </tr>
  <tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">${slowAnswersTotal} <span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">× ${state.SLOW}</td>
    <td class="result__total">-${slowAnswersTotal * state.SLOW}</td>
  </tr>`;

    if (scores) {
      return bonusesHtml;
    }
    return ``;
  };

  const headerHtml = `
  <header class="header">
    ${backBtnTemplate}
  </header>`;

  const statsHtml = `
  ${headerHtml}
  <section class="result">
    <h2 class="result__title">Победа!</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2" class="result__stats"></td>
        <td class="result__points">× 100</td>
        <td class="result__total">900</td>
      </tr>
      ${bonuses(result)}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalScores}</td>
      </tr>
    </table>`;


  const statsEl = makeElement(statsHtml);
  const backBtn = statsEl.querySelector(`.back`);

  const resultStats = statsEl.querySelector(`.result__stats`);
  resultStats.insertAdjacentElement(`afterbegin`, statsTemplate());

  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return statsEl;
};

export default stats;
