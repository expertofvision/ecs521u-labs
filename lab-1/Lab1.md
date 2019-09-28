# Lab 1 - SVG and JavaScript

## Setup

1. Download the `index.html` file
2. Open the file in Firefox and gedit
3. Explore the developer tools, and console (Ctrl-Shift-K) in Firefox

## Create a SVG

1. Go to [SVG editor](https://svg-edit.github.io/svgedit/releases/svg-edit-2.8.1/svg-editor.html)
2. Draw a stick figure
3. Click on `<svg>` button (top toolbar), and copy-paste the SVG of your drawing to the place marked in the `index.html` file
4. Save the changes and refresh your browser

## Interactivity # 1

1. Examine the JavaScript code below your SVG. It connects two functions to mouse-events, in relation to an SVG object called `stick_figure`
2. Edit/Add the id attribute of your SVG, so that it reads `id="stick_figure"`
3. Try moving the mouse over your drawing and see what happens. <font color='red'>**Note:**</font> if you don't notice any difference, remember to save the changes and refresh your browser)

## Interactivity # 2

1. Add the properties `x=0 y=0` inside your SVG tag
2. Examine the listener `keydown` and the function `move`
3. Go to the browser and press the right arrow key. Check the console to see the correct key code
4. Do the same for the left arrow key
5. Replace the key codes in the move function
6. Try to move your sick figure by using the right and left arrow keys.. <font color='red'>**Note:**</font> if you don't notice any difference, remember to save the changes and refresh your browser)
