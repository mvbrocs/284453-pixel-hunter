const main = document.querySelector(`#main`);

const showScreen = (e) => {
  main.innerHTML = ``;
  main.appendChild(e);
};

const showModal = (e) => {
  main.appendChild(e);
};

export {
  main,
  showScreen,
  showModal
};
