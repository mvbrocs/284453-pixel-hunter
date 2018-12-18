import ExitView from "../view/exit-view";
import Router from "../router/application-router";
import {
  removeModal
} from "../utils/utils";

export default class ExitModal {
  get element() {
    const exit = new ExitView();
    exit.onSubmitClick = () => {
      Router.showGreeting();
      removeModal(exit.element);
    };
    exit.onCancelClick = () => removeModal(exit.element);

    return exit.element;
  }
}
