function Snake() {
  this.length = 10;
  this.array = []; //snake positions
  this.direction = 'right'; //defualt direction: right
  this.nextDirection = [];
  this.nextX;
  this.nextY;

  this.create = function () {
    for (var i = this.length - 1; i >= 0; i--) {
      this.array.push({ x: 5 + i, y: 5 });
    }
  };
  this.create();
}

Snake.prototype.move = function () {
  if (this.nextDirection.length) {
    this.direction = this.nextDirection.shift();
  }

  this.nextX = this.array[0].x;
  this.nextY = this.array[0].y;

  switch (this.direction) {
    case 'right':
      this.nextX++;
      break;
    case 'left':
      this.nextX--;
      break;
    case 'up':
      this.nextY--;
      break;
    case 'down':
      this.nextY++;
      break;
  }
};

Snake.prototype.isOutside = function () {
  if (
    this.nextX <= -1 ||
    this.nextX === 50 ||
    this.nextY <= -1 ||
    this.nextY === 50
  ) {
    return true;
  }
  return false;
};

Snake.prototype.eatFruit = function (fruit) {
  if (this.nextX === fruit.x && this.nextY === fruit.y) {
    return true;
  }
  return false;
};

// check body or fruit collision
Snake.prototype.isCollide = function (fruitX, fruitY) {
  let x = fruitX ?? this.nextX,
    y = fruitY ?? this.nextY;

  this.array.forEach((coord) => {
    if (coord.x === x && coord.y === y) {
      return true;
    }
  });

  return false;
};

export default Snake;
