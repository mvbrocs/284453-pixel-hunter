import AbstractView from './abstract-view';
import {
  INITIAL_STATE
} from '../data/game-data';

class Timer extends AbstractView {
  constructor(time) {
    super();
    this.time = time;
  }
  get template() {
    return `<div class="game__timer">${this.time}</div>`;
  }
}

class BackButton extends AbstractView {
  constructor() {
    super();
  }
  get template() {
    return `<button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
    </button>`;
  }
}

class Lives extends AbstractView {
  constructor(lives) {
    super();
    this.lives = lives;
  }
  get template() {
    const missedLives = new Array(INITIAL_STATE.lives - this.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
      .join(``);
    const lives = new Array(this.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``);

    return `
    <div class="game__lives">
      ${missedLives}
      ${lives}
    </div>`;
  }
}

export {
  Timer,
  BackButton,
  Lives
};
