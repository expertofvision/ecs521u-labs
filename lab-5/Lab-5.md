<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 5
</div>

### Introduction

This lab focuses on adding interactive animation to HTML5 canvas using [Konva.js](https://konvajs.org/), a HTML5 2d canvas library.

### How does it work?

"Every thing starts from `Konva.Stage` that contains several user’s layers (`Konva.Layer`)." [\[1\]](https://konvajs.org/docs/overview.html)

Each layer can contain shapes, groups of shapes, or groups of other groups.

### First step

1. Open [A.html](A.html) in Firefox and in a text editor
2. Note how a stage and a layer are created.

### Add mouse events to the whole stage

1. Add a `mouseout` event to the stage

```
stage.on('mouseout', function() {
  writeMessage('Mouseout canvas');
});
```

2. Add a `mousemove` event to the stage and display the mouse position

```
stage.on('mousemove', function() {
  var mousePos = stage.getPointerPosition();
  var x = mousePos.x - 190;
  var y = mousePos.y - 40;
  writeMessage('x: ' + x + ', y: ' + y);
});
```

### Associate events with different shapes on a canvas

This exercise was taken from [HTML5 Canvas Shape Events](https://konvajs.org/docs/events/Binding_Events.html)

1. Open [B.html](B.html) in Firefox and in a text editor

2. Draw a triangle

```
var triangle = new Konva.RegularPolygon({
  x: 80,
  y: 120,
  sides: 3,
  radius: 80,
  fill: '#00D2FF',
  stroke: 'black',
  strokeWidth: 4
});
```

3. Add a `mouseout` event to the triangle

```
triangle.on('mouseout', function() {
  writeMessage('Mouseout triangle');
});
```

4. Add a `mousemove` event to the triangle and display the mouse position

```
triangle.on('mousemove', function() {
  var mousePos = stage.getPointerPosition();
  var x = mousePos.x - 190;
  var y = mousePos.y - 40;
  writeMessage('x: ' + x + ', y: ' + y);
});
```

5. Add the triangle to the layer

```
layer.add(triangle);
```

6. Draw a circle

```
var circle = new Konva.Circle({
  x: 230,
  y: 100,
  radius: 60,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4
});
```

7. Add the following events to the circle

```
circle.on('mouseover', function() {
  writeMessage('Mouseover circle');
});
circle.on('mouseout', function() {
  writeMessage('Mouseout circle');
});
circle.on('mousedown', function() {
  writeMessage('Mousedown circle');
});
circle.on('mouseup', function() {
  writeMessage('Mouseup circle');
});
```

8. Add the circle to the layer

```
layer.add(circle);
```

### Drag and drop an image

This exercise was taken from [HTML5 Canvas Drag and Drop an Image](https://konvajs.org/docs/drag_and_drop/Drag_an_Image.html)

1. Open [C.html](C.html) in Firefox and in a text editor

2. Load the image

```
var imageObj = new Image();
imageObj.onload = function() {
  drawImage(this);
};
imageObj.src = 'cat.jpg';
```

3. Add the KonvaImage in the centre of the stage and make it draggable

```
var catImg = new Konva.Image({
  image: imageObj,
  x: stage.width() / 2 - 150 / 2,
  y: stage.height() / 2 - 150 / 2,
  width: 150,
  height: 150,
  draggable: true
});
```

4. Change the cursor style

```
catImg.on('mouseover', function() {
  document.body.style.cursor = 'pointer';
});
catImg.on('mouseout', function() {
  document.body.style.cursor = 'default';
});
```

5. Add the KonvaImage to the layer

```
layer.add(catImg);
```

6. Add the layer to the stage

```
stage.add(layer);
```

Note: the image used is [cat](https://flic.kr/p/ahuXf8) by [Artis Logins](https://www.flickr.com/photos/mextech/)

### Free drawing
This exercise was taken from [Free Drawing Konva Demo](https://konvajs.org/docs/sandbox/Free_Drawing.html)

1. Open [D.html](D.html) in Firefox and in a text editor

2. Read the code and understand it

3. Try to add options to change the brush colour

4. Try to add an option to clear the whole canvas
