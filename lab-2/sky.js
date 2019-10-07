/* Add the scale below */
var bg_canvas = document.getElementById('background');
var bg_ctx = bg_canvas.getContext('2d');

var fg_canvas = document.getElementById('foreground');
var fg_ctx = fg_canvas.getContext('2d');

redraw();

function redraw() {
  /* Add style width and height below */
  drawBackground(bg_canvas.width, bg_canvas.height);
  drawForeground(fg_canvas.width, fg_canvas.height);
};

function drawBackground(width, height) {
  /* Change the canvas size below */
  bg_ctx.fillStyle = '#3ba1d4';
  bg_ctx.fillRect(0, 0, bg_canvas.width, bg_canvas.height);
}

function drawForeground(width, height) {
  /* Change the canvas size below */
  /* Add the albatross image below */
  /* Add the clouds below */
}

function drawCloud(startX, startY, alpha) {
  fg_ctx.globalAlpha = alpha;
  fg_ctx.moveTo(startX, startY);

  fg_ctx.globalCompositeOperation = 'lighter';

  fg_ctx.beginPath();
  fg_ctx.bezierCurveTo(startX - 40, startY + 20, startX -40, startY + 70, startX + 60, startY + 70);
  fg_ctx.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
  fg_ctx.bezierCurveTo(startX + 250, startY + 70, startX+ 250, startY + 40, startX + 220, startY + 20);
  fg_ctx.bezierCurveTo(startX + 260, startY -40, startX + 200, startY -50, startX + 170, startY - 30);
  fg_ctx.bezierCurveTo(startX + 150, startY -75, startX + 80, startY -60, startX + 80, startY - 30);
  fg_ctx.bezierCurveTo(startX + 30, startY -75, startX -20, startY -60, startX, startY);
  fg_ctx.closePath();

  fg_ctx.fillStyle = '#ffffff';
  fg_ctx.fill();
}

function drawCloudFromXML(filename) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      parse(this);
      }
  };
  xhttp.open('GET', filename, true);
  xhttp.send();

  function parse(xml) {
    let xmlDoc = xml.responseXML;
    let clouds = xmlDoc.getElementsByTagName('cloud');

    for (let i = 0; i < clouds.length; i++) {
      let cloud = clouds[i];

      let startX = parseInt(cloud.getElementsByTagName('x')[0].childNodes[0].nodeValue);
      let startY = parseInt(cloud.getElementsByTagName('y')[0].childNodes[0].nodeValue);

      fg_ctx.moveTo(startX, startY);
      fg_ctx.beginPath();

      let controlPoints = cloud.getElementsByTagName('control_point');

      for (let j = 0; j < controlPoints.length; j++) {
        let ctrlPoint = controlPoints[j];

        let firstX = parseInt(ctrlPoint.getElementsByTagName('x1')[0].childNodes[0].nodeValue);
        let firstY = parseInt(ctrlPoint.getElementsByTagName('y1')[0].childNodes[0].nodeValue);

        let secondX = parseInt(ctrlPoint.getElementsByTagName('x2')[0].childNodes[0].nodeValue);
        let secondY = parseInt(ctrlPoint.getElementsByTagName('y2')[0].childNodes[0].nodeValue);

        let lastX = parseInt(ctrlPoint.getElementsByTagName('x3')[0].childNodes[0].nodeValue);
        let lastY = parseInt(ctrlPoint.getElementsByTagName('y3')[0].childNodes[0].nodeValue);

        fg_ctx.bezierCurveTo(startX + firstX, startY + firstY, startX + secondX, startY + secondY, startX + lastX, startY + lastY);
      }

      fg_ctx.closePath();
      fg_ctx.fillStyle = cloud.getElementsByTagName('colour')[0].childNodes[0].nodeValue;
      fg_ctx.fill();
    }
  }
}
