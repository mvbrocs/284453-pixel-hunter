/*
1. Описание игры
  Игра содержит:
    - список вопросов
    - статистику по каждому ответу правильно/неправильно и быстро/медленно
    - время ответа
    - таймер
    - количество жизней
2. Описание вопроса:
  - Заголовок вопроса (для 1,2,3 картинок)
  - варианты картинок
3. Описание ответа:
  - правильный/неправильный
  - время ответа
*/

const QUICK_ANSWER = 10000;
const SLOW_ANSWER = 20000;

const INITIAL_STATE = Object.freeze({
  level: 0,
  lives: 3,
  time: 30,
});

const Answer = {
  RIGHT: 100,
  QUICK: 50,
  SLOW: 50,
  BONUS_FOR_LIVES: 50,
};

let answers = [];

// const gamePlay = {
//   GAME_SETUP: {
//     level: 0,
//     lives: 2,
//     time: 999
//   },
//   GAME_TASKS: {
//     twoPic: `Угадайте для каждого изображения фото или рисунок?`,
//     onePic: `Угадай, фото или рисунок?`,
//     threePic: `Найдите рисунок среди изображений`
//   },
//   Answer: {
//     RIGHT: 100,
//     QUICK: 50,
//     SLOW: 50,
//     BONUS_FOR_LIVES: 50
//   },
//   images: {
//     paintings: [
//       // People
//       `https://k42.kn3.net/CF42609C8.jpg`,

//       // Animals
//       `https://k42.kn3.net/D2F0370D6.jpg`,

//       // Nature
//       `https://k32.kn3.net/5C7060EC5.jpg`
//     ],
//     photos: [
//       // People
//       `http://i.imgur.com/1KegWPz.jpg`,

//       // Animals
//       `https://i.imgur.com/DiHM5Zb.jpg`,

//       // Nature
//       `http://i.imgur.com/DKR1HtB.jpg`
//     ]
//   },
//   // finalScreen: stats
//   levelUp() {
//     this.GAME_SETUP.level += 1;
//   }
// };

// const screens = [
//   game1(gamePlay),
//   game2(gamePlay),
//   game3(gamePlay),
//   game1(gamePlay),
//   game2(gamePlay),
//   game3(gamePlay),
//   game1(gamePlay),
//   game2(gamePlay),
//   game3(gamePlay),
//   game1(gamePlay)
// ];


// const answers = [];

const gameData = (a, lives) => {
  let acc = 0;
  let scores = 0;
  const livesBonus = gamePlay.Answer.BONUS_FOR_LIVES * lives;

  a.forEach((el) => {
    const [answer, time] = el;

    if (answer) {
      acc += 1;
      scores += gamePlay.Answer.RIGHT;

      if (time < QUICK_ANSWER) {
        scores += gamePlay.Answer.QUICK;
      }
      if (time > SLOW_ANSWER) {
        scores -= gamePlay.Answer.SLOW;
      }
    }
  });

  if (acc < 10) {
    return -1;
  }
  return scores + livesBonus;
};

export {
  QUICK_ANSWER,
  SLOW_ANSWER,
  gameData,
  INITIAL_STATE,
  Answer,
  answers
};
