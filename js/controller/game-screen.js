export default class GameScreen {
  constructor(model) {
    this.model = model;
    // this.header = 

    this.root = document.createElement(`div`);


    this._timer = null;
  }

  get element() {
    return this.root;
  }

  init() {}
}
