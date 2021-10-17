const countGameHits = (game, raffle) => {
  if (raffle.numbers === null) {
    return 0;
  }

  const luckNumbers = raffle.numbers.split(',');
  const gameNumbers = game.numbers.split(',');

  let hits = 0;
  for (let i = 0; i < luckNumbers.length; i++) {
    if (gameNumbers.indexOf(luckNumbers[i]) !== -1) {
      hits += 1;
    }
  }

  return hits;
};

export default countGameHits;
