const main = document.querySelector(`#main`);
const body = document.querySelector(`body`);

const showScreen = (e) => {
  main.innerHTML = ``;
  main.appendChild(e);
};

const showModal = (e) => {
  body.appendChild(e);
};

const removeModal = (e) => {
  body.removeChild(e);
};

export {
  main,
  showScreen,
  showModal,
  removeModal
};
