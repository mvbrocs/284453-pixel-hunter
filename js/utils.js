//
// const fixedTmpl = tmpl.map((el) => {
//   const shadow = document.createElement(`div`);
//   const content = el.content.cloneNode(true);
//   shadow.appendChild(content);
//   return shadow.cloneNode(true);
// });


const makeElement = (str) => {
  const div = document.createElement(`div`);
  div.innerHTML = str.trim();
  return div;
};

const showScreen = (p, e) => {
  p.innerHTML = ``;
  p.appendChild(e);
};

export {
  makeElement,
  showScreen
};
