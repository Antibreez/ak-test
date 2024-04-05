export const getShuffledArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getShuffledNumbersArray = (amount) => {
  return getShuffledArray(Array.from({ length: amount }, (_, i) => i + 1));
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isBlockInViewport = (block, gap = 1) => {
  const rect = block.getBoundingClientRect();

  return (
    rect.top <=
      (window.innerHeight * gap ||
        document.documentElement.clientHeight * gap) &&
    rect.bottom >=
      (1 - gap) * (window.innerHeight || document.documentElement.clientHeight)
  );
};
