<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 1
</div>

### Introduction
This lab is about Canvas, CSS and JavaScript

### Setup

1. Download the [`index.html`](#) and [`layout.css`](#)
2. Open the HTML file in Firefox
3. Open both the HTML and CSS files in a text editor (i.e. gedit, sublime, atom, etc.)
4. Explore the developer tools and console (Ctrl-Shift-K) in Firefox

### Adapt canvas to windows size

1. Notice there is a space between the beginning of the web page and where the canvas is displayed

2. Eliminate this space by adding the following rule to `layout.css` file:

```
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  border: 0;
  overflow: hidden; /* Disable scrollbars */
  display: block; /* No floating content on sides */
}
```

3. Make the canvas fit 100% of the page by adding the following rule to `layout.css` file:

```
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
}
```

4. Scale canvas according to window size

```
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  redraw();
}
```

### Add more objects

1. Add an albatross image inside the canvas:

```
albatross_img = new Image();
albatross_img.src = '37586.png';
albatross_img.onload = function(){
  bird_ctx.drawImage(albatross_img, 800,300);
}
```

2. Draw a couple of clouds by invoking the function `drawCloud(startX, startY, alpha)` as follows:

```
drawCloud(0, 0, 0.5);
drawCloud(500, 500, 1);
drawCloud(1000, 800, 0.2);
```

2. Notice the `alpha` argument sets the transparency of the cloud.

3. Try to create your own cloud. Take a look at the following links:
* [HTML canvas bezierCurveTo() Method](https://www.w3schools.com/tags/canvas_beziercurveto.asp)
* [HTML5 \<canvas\> bezierCurveTo command generator](http://www.victoriakirst.com/beziertool/)

