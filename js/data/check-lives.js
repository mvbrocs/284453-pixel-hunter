const checkLives = (data, dataInit) => {
  let lives = dataInit.lives;
  const arr = data.answers;

  arr.forEach((el) => {
    if (!el[0] && lives >= 0) {
      lives -= 1;
    }
  });

  return lives;
};

export default checkLives;
