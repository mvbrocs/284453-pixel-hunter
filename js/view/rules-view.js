import AbstractView from './abstract-view';
import BackBtn from './back-btn-view';

export default class Rules extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <header class="header">
      ${new BackBtn().template}
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
  }

  bind() {
    const goBtn = this.element.querySelector(`.rules__button`);
    const inputName = this.element.querySelector(`.rules__input`);
    const backBtn = this.element.querySelector(`.back`);

    inputName.addEventListener(`input`, () => {
      goBtn.disabled = (inputName.value < 1);
    });

    goBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBtnClick();
      this.getPlayerName();
    });

    backBtn.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onBackBtnClick();
    });
  }

  onBtnClick() {}

  onBackBtnClick() {}

  getPlayerName() {
    const inputName = this.element.querySelector(`.rules__input`);
    return inputName.value;
  }
}
