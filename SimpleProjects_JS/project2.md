# Projects related to DOM



## project 2 - BMI Calculator
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?description=HTML/CSS/JS%20Starter&file=2-BMI_Calculator%2Fstyles.css,2-BMI_Calculator%2Findex.html,2-BMI_Calculator%2Fmain.js&terminalHeight=10&title=Static%20Starter)

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  if (height === ' ' || isNaN(height) || height < 0) {
    result.innerHTML = 'Please enter valid number!';
  } else if (weight === ' ' || isNaN(weight) || weight < 0) {
    result.innerHTML = 'Please enter valid number!';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi >= 25) {
      result.innerHTML = `${bmi} is your BMI value, its shows you are overweighted person.`;
    } else if (bmi > 18.5 && bmi < 25) {
      result.innerHTML = `${bmi} is your BMI value, its shows you are normal person.`;
    } else {
      result.innerHTML = `${bmi} is your BMI value, its shows you are underweighted person.`;
    }
  }
});


```