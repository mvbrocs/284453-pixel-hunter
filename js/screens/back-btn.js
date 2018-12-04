import BackButton from '../view/back-button-view';
import {
  showScreen
} from '../utils/utils';
import greeting from './greeting';

const backBtn = new BackButton();
backBtn.onBackButtonClick = () => {
  showScreen(greeting.element);
};

export default backBtn;
