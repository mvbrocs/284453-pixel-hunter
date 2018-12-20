import AbstractView from './abstract-view';
import BackBtn from './back-btn-view';
import {
  Answer
} from '../data/game-data';

export default class Stats extends AbstractView {
  constructor(state) {
    super();
    this.state = state.slice(-3);
  }

  get template() {
    const tableHtml = [];

    this.state.forEach((el) => {
      const getBonusHtml = () => {
        const bonusesHtml = `
          <tr>
            <td class="result__number">${this.state.indexOf(el) + 1}</td>
            <td colspan="2" class="result__stats">${el.statsBarHtml}</td>
            <td class="result__points">× ${Answer.RIGHT}</td>
            <td class="result__total">${el.correctAnswersTotal * Answer.RIGHT}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${el.quickAnswersTotal} <span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">× ${Answer.QUICK}</td>
            <td class="result__total">${el.quickAnswersTotal * Answer.QUICK}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${el.livesTotal} <span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">× ${Answer.BONUS_FOR_LIVES}</td>
            <td class="result__total">${el.livesTotal * Answer.BONUS_FOR_LIVES}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${el.slowAnswersTotal} <span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">× ${Answer.SLOW}</td>
            <td class="result__total">-${el.slowAnswersTotal * Answer.SLOW}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${el.totalScores}</td>
          </tr>`;

        const failHtml = `
          <tr>
            <td class="result__number">${this.state.indexOf(el) + 1}</td>
            <td colspan="2" class="result__stats">${el.statsBarHtml}</td>
            <td class="result__total">FAIL</td>
          </tr>`;

        return (el.totalScores > 0) ? bonusesHtml : failHtml;
      };

      tableHtml.push(getBonusHtml());
    });

    const statsHtml = `
      <header class="header">
        ${new BackBtn().template}
      </header>
      <section class="result">
        <h2 class="result__title">${this.getHeader(this.state)}!</h2>
        <table class="result__table">
         ${tableHtml.join(``)}
        </table>
      </section>`;

    return statsHtml;
  }

  getHeader(state) {
    return (state[state.length - 1].totalScores > 0) ? `Победа` : `Поражение`;
  }

  bind() {
    const backBtn = this.element.querySelector(`.back`);

    backBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackBtnClick();
    });
  }

  onBackBtnClick() {}
}
