export default class GameScreen {
  constructor(model) {
    this.model = model;
  }

  get element() {
    return this.root;
  }

  init() {
    this.model.resetGame();
  }
  changeLevel() {
    // добавляем ответ в массив
    this.model.checkLivesCount();
    this.model.changeGameLevel();
    this.model.checkGameOver();
  }
}
