var bg_canvas = document.getElementById('background');
var bg_ctx = bg_canvas.getContext('2d');

var fg_canvas = document.getElementById('foreground');
var fg_ctx = fg_canvas.getContext('2d');

redraw();

function redraw() {
  drawBackground(bg_canvas.width, bg_canvas.height);
};

function drawBackground(width, height) {
  bg_ctx.fillStyle = '#3ba1d4';
  bg_ctx.fillRect(0, 0, width, height);
}
