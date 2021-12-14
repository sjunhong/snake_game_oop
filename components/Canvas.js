const Canvas = new Object();
Canvas.element = document.getElementById('canvas');
Canvas.context = Canvas.element.getContext('2d');
Canvas.width = Canvas.element.getAttribute('width');
Canvas.height = Canvas.element.getAttribute('height');
Canvas.cellWidth = 10;

Canvas.redraw = function () {
  this.paint(0, 0, 'white', 'black', this.width, this.height);
};

Canvas.paint = function (x, y, fillColor, strokeColor, width, height) {
  var width = width ?? this.cellWidth,
    height = height ?? this.cellWidth,
    fillColor = fillColor ?? 'red',
    strokeColor = strokeColor ?? 'white';

  this.context.fillStyle = fillColor;
  this.context.strokeStyle = strokeColor;

  this.context.fillRect(
    x * Canvas.cellWidth,
    y * Canvas.cellWidth,
    width,
    height
  );
  this.context.strokeRect(
    x * Canvas.cellWidth,
    y * Canvas.cellWidth,
    width,
    height
  );
};

Canvas.drawText = function (text) {
  this.context.fillText(text, 5, 15);
};

Canvas.redraw();

export default Canvas;
