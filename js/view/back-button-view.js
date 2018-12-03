import AbstractView from './abstract-view';

export default class BackButtonView extends AbstractView {
  constructor(title = `Вернуться к началу`) {
    super();
    this.title = title;
  }

  get template() {
    return `<button class="back">
    <span class="visually-hidden">${this.title}</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
    </button>`;
  }
  bind() {
    this.element.onclick = (e) => {
      e.preventDefault();
      this.onclick();
    };
  }

  onclick() {}
}

