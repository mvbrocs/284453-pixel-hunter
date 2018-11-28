const checkLives = (game, a) => {
  let lives = game.lives;

  a.forEach((el) => {
    if (!el[0] && lives >= 0) {
      lives -= 1;
    }
  });

  return lives;
};

export default checkLives;
