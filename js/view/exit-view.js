import AbstractView from "./abstract-view";

export default class ExitView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
    <section class="modal">
      <form class="modal__inner">
        <button class="modal__close" type="button">
          <span class="visually-hidden">Закрыть</span>
        </button>
        <h2 class="modal__title">Подтверждение</h2>
        <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal__button-wrapper">
          <button class="modal__btn" id="submit">Ок</button>
          <button class="modal__btn" id="cancel">Отмена</button>
        </div>
        </form>
     </section>`;
  }

  bind() {
    const submit = this.element.querySelector(`#submit`);
    const cancel = this.element.querySelector(`#cancel`);
    const close = this.element.querySelector(`.modal__close`);

    submit.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onSubmitClick();
    });

    cancel.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onCancelClick();
    });

    close.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onCancelClick();
    });
  }

  onSubmitClick() {}

  onCancelClick() {}
}
