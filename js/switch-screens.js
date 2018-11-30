// import {
//   INITIAL_STATE,
//   Answer,
//   answers,
// } from './data/game-data';
// import {
//   gameState
// } from './data/game-state';
// import {
//   showScreen
// } from './utils';
// import stats from './screens/stats';
// import checkLives from './data/check-lives';

// let game = Object.assign({}, INITIAL_STATE);

// const switchScreens = () => {
//   game.lives = checkLives(INITIAL_STATE, answers);
//   if (game.lives < 0) {
//     return showScreen(stats(Answer));
//   }
//   if (game.level < gameState.gameScreens.length - 1) {
//     game.level += 1;
//   } else {
//     return showScreen(stats(Answer));
//   }

//   return gameState.showScreenWithData(gameState.gameScreens[game.level], game);
// };

// export {
//   switchScreens,
//   game
// };
