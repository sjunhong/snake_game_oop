import Game from './components/Game.js';

Game.start();

setInterval(() => {
  Game.run();
}, 50);

document.onkeydown = function (e) {
  if (typeof Game.snake !== 'undefined') {
    // get key name
    let key = e.key;
    console.log(e);

    let currDirection;
    if (Game.snake.nextDirection.length) {
      currDirection =
        Game.snake.nextDirection[Game.snake.nextDirection.length - 1];
    } else {
      currDirection = Game.snake.direction;
    }

    // check currDirection so that snake cannot move backward
    if (key == 'ArrowLeft' && currDirection != 'right') {
      Game.snake.nextDirection.push('left');
    } else if (key == 'ArrowUp' && currDirection != 'down') {
      Game.snake.nextDirection.push('up');
    } else if (key == 'ArrowRight' && currDirection != 'left') {
      Game.snake.nextDirection.push('right');
    } else if (key == 'ArrowDown' && currDirection != 'up') {
      Game.snake.nextDirection.push('down');
    }
  }
};
