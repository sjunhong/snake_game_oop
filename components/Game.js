import Snake from './Snake.js';
import Fruit from './Fruit.js';
import Canvas from './Canvas.js';

const Game = new Object();
Game.score = 0;

Game.start = function () {
  Game.snake = new Snake();
  Game.fruit = new Fruit(Game.snake);
  Game.regenFruit();

  Game.score = 0;
};

// game loop
Game.run = function () {
  Game.snake.move();

  if (Game.snake.isOutside() || Game.snake.isCollide()) {
    console.log('over');
    Game.over();
    return;
  }

  var tail;

  if (Game.snake.eatFruit(Game.fruit)) {
    Game.score++;
    tail = { x: Game.snake.nextX, y: Game.snake.nextY };
    Game.regenFruit();
  } else {
    var tail = Game.snake.array.pop();
    tail.x = Game.snake.nextX;
    tail.y = Game.snake.nextY;
  }

  Game.snake.array.unshift(tail);
  Game.paintSnake();

  if (typeof Game.fruit != 'undefined') {
    Game.paintFruit();
  }

  Game.drawScore();
};

Game.over = function () {
  Canvas.redraw();
  this.start();
};

Game.drawScore = function () {
  Canvas.drawText(`Score: ${Game.score}`);
};

Game.paintSnake = function () {
  Canvas.redraw();
  Game.snake.array.forEach((snakeCoor) => {
    Canvas.paint(snakeCoor.x, snakeCoor.y, 'black');
  });
};

Game.paintFruit = function () {
  Canvas.paint(Game.fruit.x, Game.fruit.y, 'blue');
};

Game.regenFruit = function () {
  Game.fruit.genCoords();
  Game.fruit.checkCollision();
  Game.paintFruit();
};

export default Game;
