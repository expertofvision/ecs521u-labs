<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 3
</div>

### Introduction
The purpose of this lab session is get experience working with HTML5 Canvas images and to learn transformation.

Please notice this lab is mostly a reformat of the original one, Lab No. 3–HTML5 Images, Videos and Transformation, in an attempt to go step by step and provide insight on the effect of specific lines of code.

### Setup

1. Open [index.html](index.html) file in Firefox.
2. Open [index.html](index.html) files in a text editor (i.e. gedit, sublime, atom, etc.).
3. Explore the developer tools and console (Ctrl-Shift-K) in Firefox.


### Draw an image

1. Download a [red panda image](https://live.staticflickr.com/7423/16339195416_3d3619c4dd_c_d.jpg) and save it in this folder with the name `red_panda.jpg`
2. Draw the image into the canvas as follows:

```
var imageObj = new Image();
imageObj.onload=function() {
  var destX = canvas.width / 2 - this.width / 2;
  var destY = canvas.height / 2 - this.height / 2;
  ctx.drawImage(this, destX, destY);
  console.log(destX, destY);
  console.log(this.width/2, this.height/2);
};
imageObj.src="./red_panda.jpg"
```

Note the image is centered within the canvas. This is achieved by "aligning" the centres of both the canvas and the image (see variables `destX` and `destY`).

### Crop an image

1. Comment the line:

```
ctx.drawImage(this, destX, destY);
```

2. Check the syntax for image clipping. [HTML canvas drawImage() Method](https://www.w3schools.com/tags/canvas_drawimage.asp):

```
context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
```

* `img` is the image, canvas or video to use
* `sx` and `sy` are the coordinates where start the clipping
* `swidth` and `sheight` are the width and height of the clipped image
* `x` and `y` are the coordinates where to place the image on the canvas
* `width` and `height` are the width and height of the image to use

3. Change the body of `imageObj.onload=function()` accordingly in order to crop the red panda image. Example:

```
clipX = 50;
clipY = 50;
clipWidth = 150;
clipHeight= 150;
ctx.drawImage(this, clipX, clipY, clipWidth, clipHeight, destX, destY, clipWidth, clipHeight);
```

4. Consider varying the positions of the above to create different sets of cropped image

### Save the canvas data as an image

1. Add an image tag in the body of your webpage.

```
<img id="canvasImg"/>
```

2. Grab the content of the canvas as (after the image is drawn):

```
var canvasContent = canvas.toDataURL();
```

3. Assign the canvas content to the image element:

```
document.getElementById("canvasImg").src = canvasContent;
```

### Transform objects on canvas

1. Draw the whole red panda image by commenting the clipping and uncommenting the original draw

2. Check the syntax for canvas transformations. [HTML canvas transform() Method](https://www.w3schools.com/tags/canvas_transform.asp):

```
a 	c 	e
b 	d 	f
0 	0 	1
```

* `a` and `d` represent horizontal and vertical scaling, respectively
* `b` and `c` represent horizontal and vertical skewing, respectively
* `e` and `f` represent horizontal and vertical moving, respectively

<font color='red'>**Note:**</font> The `transform()` method behaves relatively to other transformations made by `rotate()`, `scale()`, `translate()`, or `transform()`. Check the APIs of these methods too.

3. Rescale the image on the canvas to half its size using `transform()` method:

```
ctx.transform(0.5, 0, 0, 0.5, 0, 0);
```

4. Now rescale the image on the canvas using the `scale()` method:

```
ctx.scale(2, 2);
```

5. Rotate the image on the canvas using the `rotate()` method:

```
ctx.rotate(20 * Math.PI / 180);
```