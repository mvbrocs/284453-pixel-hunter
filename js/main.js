// import {makeElement} from "./utils";

const main = document.querySelector(`#main`);
const body = document.body;
const tmpl = [
  document.querySelector(`#intro`),
  document.querySelector(`#greeting`),
  document.querySelector(`#rules`),
  document.querySelector(`#game-1`),
  document.querySelector(`#game-2`),
  document.querySelector(`#game-3`),
  document.querySelector(`#stats`),
];

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

const btnLeft = body.querySelector(`.arrows__btn--left`);
const btnRight = body.querySelector(`.arrows__btn--right`);

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

const increaseCurrentScreen = () => {
  currentScreen += 1;
  if (currentScreen >= fixedTmpl.length) {
    currentScreen = fixedTmpl.length - 1;
  }
};

const decreaseCurrentScreen = () => {
  currentScreen -= 1;
  if (currentScreen < 0) {
    currentScreen = 0;
  }
};

const onArrowPress = (e) => {
  if (e.key === `ArrowLeft`) {
    decreaseCurrentScreen();
  }
  if (e.key === `ArrowRight`) {
    increaseCurrentScreen();
  }
  showScreen(currentScreen);
};


/* Показываем экраны */

showScreen(currentScreen);

document.addEventListener(`keydown`, onArrowPress);
btnLeft.addEventListener(`click`, () => {
  decreaseCurrentScreen();
  showScreen(currentScreen);
});
btnRight.addEventListener(`click`, () => {
  increaseCurrentScreen();
  showScreen(currentScreen);
});
