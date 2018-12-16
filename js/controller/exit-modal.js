import ExitView from "../view/exit-view";
import Router from "../router/application-router";

export default class ExitModal {
  get element() {
    const exit = new ExitView();
    exit.onSubmitClick = () => Router.showGreeting();
    exit.onCancelClick = () => exit.element.classList.add(`visually-hidden`);

    return exit.element;
  }
}
