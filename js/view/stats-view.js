import AbstractView from './abstract-view';
import {
  BackButton
} from './header-view';
import {
  Answer
} from '../data/game-data';

export default class Stats extends AbstractView {
  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
    this.totalScores = this.data.totalScores(this.state);
  }
  get template() {
    const quickAnswersTotal = this.data.quickAnswersCount(this.state);
    const slowAnswersTotal = this.data.slowAnswersCount(this.state);
    const correctAnswersTotal = this.data.correctAnswersCount(this.state);

    const getBonusHtml = () => {
      const bonusesHtml = `
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${quickAnswersTotal} <span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">× ${Answer.QUICK}</td>
            <td class="result__total">${quickAnswersTotal * Answer.QUICK}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${this.state.lives} <span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× ${Answer.BONUS_FOR_LIVES}</td>
            <td class="result__total">${this.state.lives * Answer.BONUS_FOR_LIVES}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${slowAnswersTotal} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× ${Answer.SLOW}</td>
            <td class="result__total">-${slowAnswersTotal * Answer.SLOW}</td>
          </tr>`;

      if (this.totalScores) {
        return bonusesHtml;
      }
      return ``;
    };

    const result = () => {
      return (this.totalScores > 0) ? this.totalScores : false;
    };

    const statsHtml = `
      <header class="header">
        ${new BackButton().template}
      </header>
      <section class="result">
        <h2 class="result__title">Победа!</h2>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2" class="result__stats">${this.insertStatsBar()}</td>
            <td class="result__points">× ${Answer.RIGHT}</td>
            <td class="result__total">${correctAnswersTotal * Answer.RIGHT}</td>
          </tr>
          ${getBonusHtml()}
          <tr>
            <td colspan="5" class="result__total  result__total--final">${result()}</td>
          </tr>
        </table>
      </section>`;

    return statsHtml;
  }
  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackButtonClick();
    });
  }
  onBackButtonClick() {}
  insertStatsBar() {}
}

// import {
//   makeElement,
//   showScreen,
// } from "../utils/utils";
// import greeting from "./greeting";
// import statsTemplate from "../templates/stats-template";
// import backBtnTemplate from "../templates/back-btn-template";
// import {
//   gameData,
//   Answer,
// } from "../data/game-data";
// import {
//   gameState
// } from "../data/game-state";

// const result = (data) => {
//   const scores = gameData(data);
//   return (scores > 0) ? scores : false;
// };


// const stats = (data) => {
//   const totalScores = result(data);
//   const quickAnswersTotal = gameState.quickAnswersCount(data);
//   const slowAnswersTotal = gameState.slowAnswersCount(data);
//   const correctAnswersTotal = gameState.correctAnswersCount(data);

//   const bonusesEl = () => {
//     const bonusesHtml = `
//     <tr>
//       <td></td>
//       <td class="result__extra">Бонус за скорость:</td>
//       <td class="result__extra">${quickAnswersTotal} <span class="stats__result stats__result--fast"></span></td>
//       <td class="result__points">× ${Answer.QUICK}</td>
//       <td class="result__total">${quickAnswersTotal * Answer.QUICK}</td>
//     </tr>
//     <tr>
//       <td></td>
//       <td class="result__extra">Бонус за жизни:</td>
//       <td class="result__extra">${data.lives} <span class="stats__result stats__result--alive"></span></td>
//       <td class="result__points">× ${Answer.BONUS_FOR_LIVES}</td>
//       <td class="result__total">${data.lives * Answer.BONUS_FOR_LIVES}</td>
//     </tr>
//     <tr>
//       <td></td>
//       <td class="result__extra">Штраф за медлительность:</td>
//       <td class="result__extra">${slowAnswersTotal} <span class="stats__result stats__result--slow"></span></td>
//       <td class="result__points">× ${Answer.SLOW}</td>
//       <td class="result__total">-${slowAnswersTotal * Answer.SLOW}</td>
//     </tr>`;

//     if (totalScores) {
//       return bonusesHtml;
//     }
//     return ``;
//   };

//   const headerHtml = `
//   <header class="header">
//     ${backBtnTemplate}
//   </header>`;

//   const statsHtml = `
//   ${headerHtml}
//   <section class="result">
//     <h2 class="result__title">Победа!</h2>
//     <table class="result__table">
//       <tr>
//         <td class="result__number">1.</td>
//         <td colspan="2" class="result__stats"></td>
//         <td class="result__points">× ${Answer.RIGHT}</td>
//         <td class="result__total">${correctAnswersTotal * Answer.RIGHT}</td>
//       </tr>
//       ${bonusesEl()}
//       <tr>
//         <td colspan="5" class="result__total  result__total--final">${totalScores}</td>
//       </tr>
//     </table>`;


//   const statsEl = makeElement(statsHtml);
//   const backBtn = statsEl.querySelector(`.back`);

//   const resultStats = statsEl.querySelector(`.result__stats`);
//   resultStats.insertAdjacentElement(`afterbegin`, statsTemplate(data));

//   backBtn.addEventListener(`click`, () => showScreen(greeting()));

//   return statsEl;
// };

// export default stats;
