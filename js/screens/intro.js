// import {
//   makeElement,
//   showScreen,
// } from "../utils/utils";
// import greeting from "./greeting";

// const intro = () => {
//   const introHtml = `
//   <section class="intro">
//     <button class="intro__asterisk asterisk" type="button">
//     <span class="visually-hidden">Продолжить</span>*</button>
//     <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
//   </section>`;

//   const introEl = makeElement(introHtml);
//   const asterisk = introEl.querySelector(`.intro__asterisk`);

//   asterisk.addEventListener(`click`, () => showScreen(greeting()));
//   return introEl;
// };

// export default intro;
import AbstractView from "../view/abstract-view";

export default class Intro extends AbstractView {
  constructor() {
    super();
  }
  get template() {
    return `
      <section class="intro">
        <button class="intro__asterisk asterisk" type="button">
        <span class="visually-hidden">Продолжить</span>*</button>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </section>`;
  }
  bind() {
    const asterisk = this.element.querySelector(`.intro__asterisk`);
    asterisk.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onButtonClick();
    });
  }
  onButtonClick() {
    console.log('click');
  }
}
