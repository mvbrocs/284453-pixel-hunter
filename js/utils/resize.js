const resize = (frame, image) => {
  const multiplicator = Math.floor(image.width / frame.width);
  const expected = {
    width: Math.floor(image.width / multiplicator),
    height: Math.floor(image.height / multiplicator)
  };

  return expected;
};

export default resize;
