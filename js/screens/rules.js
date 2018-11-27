import {
  makeElement,
  showScreen,
} from "../utils";
// import game1 from "./game-1";
import greeting from "./greeting";
import backBtnTemplate from "../templates/back-btn-template";
import renderScreen from "../screen";

const rules = () => {
  const rulesHtml = `
  <header class="header">
    ${backBtnTemplate}
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

  const rulesEl = makeElement(rulesHtml);
  const goBtn = rulesEl.querySelector(`.rules__button`);
  const inputName = rulesEl.querySelector(`.rules__input`);
  const backBtn = rulesEl.querySelector(`.back`);

  inputName.addEventListener(`input`, () => {
    goBtn.disabled = (inputName.value < 1);
  });

  // goBtn.addEventListener(`click`, () => showScreen(game1(state)));
  goBtn.addEventListener(`click`, () => renderScreen());
  backBtn.addEventListener(`click`, () => showScreen(greeting()));

  return rulesEl;
};

export default rules;
