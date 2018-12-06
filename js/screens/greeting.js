import Greeting from '../view/greeting-view';
import {
  showScreen
} from '../utils/utils';
import rules from './rules';

export default () => {
  const greeting = new Greeting();
  greeting.onButtonClick = () => showScreen(rules.element);
};
