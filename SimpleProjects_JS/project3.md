# Projects related to DOM



## project 3 - Digit Clock
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?file=3-DigitalClock%2Findex.html,3-DigitalClock%2Fmain.js) 


```javascript

const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);



```