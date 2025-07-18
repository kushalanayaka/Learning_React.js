# Projects related to DOM



## project 1 - Color Changer 
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?description=HTML/CSS/JS%20Starter&file=1-Color_Changer%2Findex.html,1-Color_Changer%2Fstyles.css,1-Color_Changer%2Fmain.js&terminalHeight=10&title=Static%20Starter)
```javascript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```
