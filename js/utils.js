// import greeting from "./greeting";

const main = document.querySelector(`#main`);

const makeElement = (str) => {
  const div = document.createElement(`div`);
  div.innerHTML = str.trim();
  return div;
};

const showScreen = (e) => {
  main.innerHTML = ``;
  main.appendChild(e);
};

const returnToScreen = (el, screen) => {
  el.addEventListener(`click`, () => {
    showScreen(screen);
  });
};

export {
  makeElement,
  showScreen,
  returnToScreen
};
