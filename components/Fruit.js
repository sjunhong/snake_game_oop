import Canvas from './Canvas.js';

function Fruit(snake) {
  this.snake = snake;

  // generate new position for fruit
  this.genCoords = function () {
    this.x = Math.round(
      (Math.random() * (Canvas.width - Canvas.cellWidth)) / Canvas.cellWidth
    );
    this.y = Math.round(
      (Math.random() * (Canvas.height - Canvas.cellWidth)) / Canvas.cellWidth
    );
    this.checkCollision();
  };

  // re-generate fruit when it is generated on snake's body
  this.checkCollision = function () {
    if (this.snake.isCollide(this.x, this.y)) {
      this.genCoords();
    }
  };
}

export default Fruit;
