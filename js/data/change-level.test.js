import {
  assert
} from 'chai';
import {
  changeLvl
} from './change-level';
import {
  gamePlay
} from './game-data';

describe(`Проверка функции смены уровней`, () => {
  it(`Уровень игры должен совпадать с переданным значением`, () => {
    assert.equal(0, changeLvl(gamePlay.GAME_SETUP, 0));
    assert.equal(1, changeLvl(gamePlay.GAME_SETUP, 1));
    assert.equal(5, changeLvl(gamePlay.GAME_SETUP, 5));
    assert.equal(555, changeLvl(gamePlay.GAME_SETUP, 555));
  });

  it(`Уровень игры должен быть числом`, () => {
    assert.throws(() => changeLvl(gamePlay.GAME_SETUP, `abc`), /Уровень должен быть числом/);
  });

  it(`Уровень игры не должен быть отрицательным`, () => {
    assert.throws(() => changeLvl(gamePlay.GAME_SETUP, -3), /Уровень не должен быть отрицательным/);
  });
});
