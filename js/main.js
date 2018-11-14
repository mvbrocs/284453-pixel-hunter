'use strict';

const main = document.querySelector(`#main`);
const body = document.body;
const tmpl = [];

const intro = document.querySelector(`#intro`);
const greeting = document.querySelector(`#greeting`);
const rules = document.querySelector(`#rules`);
const game1 = document.querySelector(`#game-1`);
const game2 = document.querySelector(`#game-2`);
const game3 = document.querySelector(`#game-3`);
const stats = document.querySelector(`#stats`);

let currentScreen = 0;

body.insertAdjacentHTML(`beforeend`, `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
  }
</style>
<button class="arrows__btn arrows__btn--left"><-</button>
<button class="arrows__btn arrows__btn--right">-></button>
</div>`);

// ??? Добавил свои классы для кнопок  - это норм?
const btnLeft = body.querySelector(`.arrows__btn--left`);
const btnRight = body.querySelector(`.arrows__btn--right`);

tmpl.push(intro);
tmpl.push(greeting);
tmpl.push(rules);
tmpl.push(game1);
tmpl.push(game2);
tmpl.push(game3);
tmpl.push(stats);

const fixedTmpl = tmpl.map((el) => {
  const shadow = document.createElement(`div`);
  const content = el.content.cloneNode(true);
  shadow.appendChild(content);
  return shadow.cloneNode(true);
});

const showScreen = (n) => {
  main.innerHTML = ``;
  main.appendChild(fixedTmpl[n]);
};

const onArrowPress = (e) => {
  if (e.key === `ArrowLeft`) {
    currentScreen -= 1;
  }
  if (e.key === `ArrowRight`) {
    currentScreen += 1;
  }
  showScreen(currentScreen);
};


/* Показываем экраны */

showScreen(currentScreen);

document.addEventListener(`keydown`, onArrowPress);
btnLeft.addEventListener(`click`, () => {
  currentScreen -= 1;
  showScreen(currentScreen);
});
btnRight.addEventListener(`click`, () => {
  currentScreen += 1;
  showScreen(currentScreen);
});
