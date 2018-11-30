import backBtnTemplate from "./back-btn-template";


const headerTemplate = (data) => {
  const headerHtml = `
  <header class="header">
    ${backBtnTemplate}
    <div class="game__timer">${data.time}</div>
    <div class="game__lives">
    ${new Array(3 - data.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
      .join(``)}
     ${new Array(data.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
      .join(``)}
    </div>
  </header>`;
  return headerHtml;
};

export default headerTemplate;


/* ${new Array(3 - 0)
  .fill(`<img src="img/heart__empty.svg" class="game__heart" alt=" Missed Life" width="31" height="27">`)
  .join(``)}
 ${new Array(0)
  .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
  .join(``)} */
