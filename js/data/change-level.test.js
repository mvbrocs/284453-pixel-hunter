import {
  assert
} from 'chai';
import {
  changeLvl,
  GAME_SETUP
} from './change-level';

describe(`Проверка функции смены уровней`, () => {
  it(`Уровень игры должен совпадать с переданным значением`, () => {
    assert.equal(0, changeLvl(GAME_SETUP, 0));
    assert.equal(1, changeLvl(GAME_SETUP, 1));
    assert.equal(5, changeLvl(GAME_SETUP, 5));
    assert.equal(555, changeLvl(GAME_SETUP, 555));
  });

  it(`Уровень игры должен быть числом`, () => {
    assert.throws(() => changeLvl(GAME_SETUP, `abc`), /Уровень должен быть числом/);
  });

  it(`Уровень игры не должен быть отрицательным`, () => {
    assert.throws(() => changeLvl(GAME_SETUP, -3), /Уровень не должен быть отрицательным/);
  });
});
