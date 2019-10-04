<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 1
</div>

### Introduction
This lab includes basis of SVG, Canvas, interaction and animations.

### Setup

1. Download the [`index.html`](https://raw.githubusercontent.com/mariancross/ecs521u-labs/master/lab-1/index.html) file
2. Open the file in Firefox and gedit
3. Explore the developer tools, and console (Ctrl-Shift-K) in Firefox

### SVG and JavaScript

Create a SVG

1. Go to [SVG editor](https://svg-edit.github.io/svgedit/releases/svg-edit-2.8.1/svg-editor.html)
2. Draw a stick figure
3. Click on `<svg>` button (top toolbar), and copy-paste the SVG of your drawing to the place marked in the `index.html` file
4. Save the changes and refresh your browser

Interactivity # 1

1. Examine the JavaScript code below your SVG. It connects two functions to mouse-events, in relation to an SVG object called `stick_figure`
2. Add the id attribute to `<svg`> tag, so that it reads `id="stick_figure"`
3. Try moving the mouse over your drawing and see what happens. <font color='red'>**Note:**</font> if you don't notice any difference, remember to save the changes and refresh your browser)

 Interactivity # 2

4. Add the properties `x=0 y=0` to `<svg>`  tag
5. Examine the listener `keydown` and the function `move`
6. Go to the browser and press the right arrow key. Check the console to see the correct key code
7. Do the same for the left arrow key
8. Replace the key codes in the move function
9. Try to move your sick figure by using the right and left arrow keys. <font color='red'>**Note:**</font> if you don't notice any difference, remember to save the changes and refresh your browser)

### Canvas and JavaScript

Animation

1. Examine the canvas and the definition of the ball object
2. Replace `ball.draw();` by the following code:

```
function drawBall() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.draw()
  window.requestAnimationFrame(drawBall);
}
drawBall();
```

3. Note the differences
4. Try to keep the ball moving inside the canvas. <font color='red'>**Hint:**</font> add an if condition to check `ball.vx` and `ball.vy` values
5. Make the ball move only on horizontal direction
6. Make the ball move only on vertical direction
