import AbstractView from '../view/abstract-view';

export default class SplashScreen extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="loader"></div>`;
  }

  start() {
    this.timeout = setTimeout(() => this.start(), 50);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}
