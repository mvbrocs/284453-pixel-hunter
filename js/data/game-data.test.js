import {
  assert
} from 'chai';

import gameData from './game-data';

// генератор массива ответов
const generateAnswers = (right = 10, time = 15000) => {
  const arr = [];
  const rightAnswers = right;
  const wrongAnswers = 10 - rightAnswers;

  for (let i = 0; i < rightAnswers; i += 1) {
    arr.push([true, time]);
  }
  if (wrongAnswers) {
    for (let i = 0; i < wrongAnswers; i += 1) {
      arr.push([false, time]);
    }
  }

  return arr;
};

describe(`Проверка функции подсчета результатов игры`, () => {
  it(`Если правильных ответов меньше 10, то возвращается -1`, () => {
    assert.equal(-1, gameData(generateAnswers(9), 3));
  });

  it(`Если игрок ответил на все вопросы и не быстро, и не медленно, и у него остались все жизни, то функция должна вернуть 1150 очков`, () => {
    assert.equal(1150, gameData(generateAnswers(), 3));
  });

  it(`Если игрок ответил на все вопросы быстро, и у него остались все жизни, то функция должна вернуть 1650 очков`, () => {
    assert.equal(1650, gameData(generateAnswers(10, 9000), 3));
  });

  it(`Если игрок ответил на все вопросы быстро, и у него осталость 2 жизни, то функция должна вернуть 1600 очков`, () => {
    assert.equal(1600, gameData(generateAnswers(10, 9000), 2));
  });

  it(`Если игрок ответил на все вопросы быстро, и у него осталость 0 жизней, то функция должна вернуть 1500 очков`, () => {
    assert.equal(1500, gameData(generateAnswers(10, 9000), 0));
  });

  it(`Если игрок ответил на все вопросы медленно, и у него остались все жизни, то функция должна вернуть 650 очков`, () => {
    assert.equal(650, gameData(generateAnswers(10, 25000), 3));
  });

  it(`Если игрок ответил на все вопросы медленно, и у него осталось 0 жизней, то функция должна вернуть 500 очков`, () => {
    assert.equal(500, gameData(generateAnswers(10, 25000), 0));
  });
});
