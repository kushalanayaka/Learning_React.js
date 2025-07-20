# Projects related to DOM



## project 6 - Press Key
[Click here](https://stackblitz.com/edit/stackblitz-starters-yciupw29?file=6-Keyboard%2Fmain.js)

```javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});

```