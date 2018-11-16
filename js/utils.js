const makeElement = (str) => {
  const div = document.createElement(`div`);
  return div.innerHTML = str;

};

export {
  makeElement
};
