import backBtnTemplate from "./back-btn-template";


const text = `text`
const headerTemplate = (state) => `
  <header class="header">
    ${backBtnTemplate}
    <div class="game__timer">${text}</div>
    <div class="game__lives">
      <img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">
    </div>
  </header>`;

export default headerTemplate;


/* ${new Array(3 - 0)
  .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
  .join(``)}
 ${new Array(0)
  .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
  .join(``)} */
