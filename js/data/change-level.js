const GAME_SETUP = {
  level: 0,
  lives: 3,
  time: 0
};

const changeLvl = (game, level) => {
  if (typeof level !== `number`) {
    throw new Error(`Уровень должен быть числом`);
  }

  if (level < 0) {
    throw new Error(`Уровень не должен быть отрицательным`);
  }

  const newGame = Object.assign({}, game, {
    level
  });

  return newGame.level;
};

export {
  GAME_SETUP,
  changeLvl
};
