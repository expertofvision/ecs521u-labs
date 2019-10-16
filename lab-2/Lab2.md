<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 2
</div>

### Introduction
This lab is about styling a canvas and simulating depth.

### Setup

1. Open [index.html](index.html) file in Firefox.
2. Open [index.html](index.html), [layout.css](layout.css) and [sky.js](sky.js) files in a text editor (i.e. gedit, sublime, atom, etc.).
3. Explore the developer tools and console (Ctrl-Shift-K) in Firefox.

### Adapt canvas to windows size

1. Notice there is a space between the beginning of the web page and where the canvas is displayed.

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

### Scale canvas when window is resized

Here we will use the `window` property `devicePixelRatio` that "returns the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device. This value could also be interpreted as the ratio of pixel sizes: the size of one CSS pixel to the size of one physical pixel. In simpler terms, this tells the browser how many of the screen's actual pixels should be used to draw a single CSS pixel."[\[1\]](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)

1. Add the following line at beginning `sky.js`:

```
var scale = window.devicePixelRatio;
```

2. Go to the definition of `redraw` function.

3. Add the following lines to get the CSS width and height of the canvas and scale it using the variable defined in the previous step[\[2\]](https://medium.com/wdstack/fixing-html5-2d-canvas-blur-8ebe27db07da).

```
let style_width = +getComputedStyle(bg_canvas).getPropertyValue("width").slice(0, -2) * scale;
let style_height = +getComputedStyle(bg_canvas).getPropertyValue("height").slice(0, -2) * scale;
```

3. Change the calls to `drawBackground` and `drawForeground` so they read:

```
drawBackground(style_width, style_height);
drawForeground(style_width, style_height);
```

4. Go to the definition of `drawBackground` function and set the size of the canvas at the beginning:

```
bg_canvas.setAttribute('width', width);
bg_canvas.setAttribute('height', height);
```

5. Go to the definition of `drawForeground` function and set the size of the canvas at the beginning:

```
fg_canvas.setAttribute('width', width);
fg_canvas.setAttribute('height', height);
```

### Add more objects

1. Go to the definition of `drawForeground` function.

2. Add an [albatross image](https://dlpng.com/png/37586):

```
albatross_img = new Image();
albatross_img.src = '37586.png';
albatross_img.onload = function(){
  fg_ctx.drawImage(albatross_img, 200, 200);
}
```

3. Draw a couple of clouds by invoking the function `drawCloud(startX, startY, alpha)` as follows:

```
let numClouds = 10;
for (let i = 1; i < numClouds; i++)
{
  drawCloud(100 * i , 50 * i + 120 , i / numClouds);
}
```

4. Notice the `alpha` argument sets the transparency of the cloud. Also, since the albatross was drawn before, it gives the impression to be behind the clouds.

5. Try to create your own cloud. Take a look at the following links:
* [HTML canvas bezierCurveTo() Method](https://www.w3schools.com/tags/canvas_beziercurveto.asp)
* [HTML5 \<canvas\> bezierCurveTo command generator](http://www.victoriakirst.com/beziertool/)

### Drawing clouds from XML file

1. Open the [cloud.xml](cloud.xml) in a text editor and check the structure of a cloud.

2. Go to `drawForeground` function in `sky.js`.

3. Add at the end the call:

```
drawCloudFromXML('cloud.xml');
```

4. Go to the definition of `drawCloudFromXML` function.

5. Check how the XML file is being parsed and how the different node values are being used to create a new cloud using bezier curves.

6. Modify the shape, colour or starting point of the cloud in `cloud.xml`.
