# Projects related to DOM



## project 3 - Digit Clock
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?description=HTML/CSS/JS%20Starter&file=3-Digit_Clock%2Findex.html,3-Digit_Clock%2Fmain.js&terminalHeight=10&title=Static%20Starter) 


```javascript

const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```