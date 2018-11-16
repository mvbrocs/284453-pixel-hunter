// const fixedTmpl = tmpl.map((el) => {
//   const shadow = document.createElement(`div`);
//   const content = el.content.cloneNode(true);
//   shadow.appendChild(content);
//   return shadow.cloneNode(true);
// });

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

export {
  makeElement,
  showScreen
};
