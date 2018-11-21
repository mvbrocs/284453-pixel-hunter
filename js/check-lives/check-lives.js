const checkLives = (a) => {
  let lives = 3;

  a.forEach((el) => {
    if (!el[0] && lives > 0) {
      lives -= 1;
    }
  });

  return lives;
};

export default checkLives;
