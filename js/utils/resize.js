const resize = (frame, image) => {
  const multiplicator = Math.floor(image.width / frame.width);
  const expectedSize = {
    width: Math.floor(image.width / multiplicator),
    height: Math.floor(image.height / multiplicator)
  };

  return expectedSize;
};

export default resize;
