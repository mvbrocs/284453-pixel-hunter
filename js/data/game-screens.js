import game1 from "../screens/game-1";
import game2 from "../screens/game-2";
import game3 from "../screens/game-3";
import {
  showScreen
} from "../utils";

const gameScreens = [{
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/D2F0370D6.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k32.kn3.net/5C7060EC5.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/1KegWPz.jpg`
    },
    type: `photo`
  }]
}, {
  type: `one-of-three`,
  question: `Найдите рисунок среди изображений`,
  answers: [{
    image: {
      url: `https://i.imgur.com/DiHM5Zb.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `http://i.imgur.com/DKR1HtB.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `one-of-three`,
  question: `Найдите рисунок среди изображений`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/D2F0370D6.jpg`
    },
    type: `painting`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }
  ]
}, {
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/DKR1HtB.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `painting`
  }]
}, {
  type: `two-of-two`,
  question: `Угадайте для каждого изображения фото или рисунок?`,
  answers: [{
    image: {
      url: `https://i.imgur.com/DiHM5Zb.jpg`
    },
    type: `photo`
  },
  {
    image: {
      url: `https://k42.kn3.net/CF42609C8.jpg`
    },
    type: `photo`
  }
  ]
}, {
  type: `tinder-like`,
  question: `Угадай, фото или рисунок?`,
  answers: [{
    image: {
      url: `http://i.imgur.com/1KegWPz.jpg`
    },
    type: `painting`
  }]
}];

const makeScreenWithData = (data) => {
  if (data.type === `two-of-two`) {
    return showScreen(game1(data));
  }
  if (data.type === `tinder-like`) {
    return showScreen(game2(data));
  }
  if (data.type === `one-of-three`) {
    return showScreen(game3(data));
  } return null;
};

export {
  gameScreens,
  makeScreenWithData
};
