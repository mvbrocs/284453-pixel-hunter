const main = document.querySelector(`#main`);

/* const makeElement = (str) => {
  const div = document.createElement(`div`);
  div.innerHTML = str.trim();
  return div;
};
 */
const showScreen = (e) => {
	console.log("​showScreen -> e", e);
  main.innerHTML = ``;
  main.appendChild(e);
};

export {
  main,
  // makeElement,
  showScreen
};
