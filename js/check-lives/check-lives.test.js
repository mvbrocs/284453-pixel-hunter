import {
  assert
} from 'chai';
import checkLives from './check-lives';

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

describe(`Проверка функции подсчета жизней`, () => {
  it(`Если все ответы правильные, то возвращается 3`, () => {
    assert.equal(3, checkLives(generateAnswers()));
  });

  it(`Если один ответ неправильный, то возвращается 2`, () => {
    assert.equal(2, checkLives(generateAnswers(9)));
  });

  it(`Если три ответа неправильные, то возвращается 0`, () => {
    assert.equal(0, checkLives(generateAnswers(7)));
  });

  it(`Если девять ответов неправильные, то возвращается 0`, () => {
    assert.equal(0, checkLives(generateAnswers(1)));
  });
});
