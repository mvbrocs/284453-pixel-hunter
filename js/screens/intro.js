import Intro from '../view/intro-view';
import {
  showScreen
} from '../utils/utils';
import greeting from './greeting';

const intro = new Intro();
intro.onButtonClick = () => {
  showScreen(greeting.element);
};

export default intro;
