'use strict';

const userName = document.querySelector('#name-input');

const output = document.querySelector('#name-output');

userName.addEventListener('input', event => {
  output.textContent = event.currentTarget.value.trim();
  if (event.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  }
});
