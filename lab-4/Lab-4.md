<div align="center">
  <img src="https://www.qmul.ac.uk/blizard/media/blizard/images/logos/QMUL_White.png" />

# School of Electronic Engineering and Computer  Science

## ECS521U - INTERACTIVE MEDIA DESIGN AND PRODUCTION</br>Lab 4
</div>

### Introduction
The purpose of this lab session is basis of data persistance.

### Setup

1. Open [index.html](index.html) file in Firefox.
2. Open [index.html](index.html) files in a text editor (i.e. gedit, sublime, atom, etc.).
3. Explore the developer tools and console (Ctrl-Shift-K) in Firefox.


### Text processing

Write a program to count the vowels in a text.

1. Get the both the `button` and `textarea` elements:

```
let btn = document.getElementById('count_btn');
let txt_field = document.getElementById('input_txt');
```

2. Add a function to the `onclick` event of the button (the vowel count will be the body of the function)

```
btn.onclick = function() {

};
```

3. Get the value typed on the text area:

```
let txt = txt_field.value;
```

4. Create an array that contains the vowels. This will be used later to check if a character in the text is a vowel

```
let vowels = ['a', 'e', 'i', 'o', 'u'];
```

6. Traverse the input text and check if each character is a vowel or not. If it is, increase the counter by one

```
for (let i = 0; i < txt.length; i++) {
  if (vowels.includes(txt.charAt(i).toLowerCase())) {
    count++;
  }
}
```

7. Get the element where the result is going to be displayed

```
let result = document.getElementById('display_result');
```

8. Set a new value to the previous element, reflecting the number of vowels present in the input text:

```
result.innerHTML = 'Your input contains ' + count + ' vowels';
```
