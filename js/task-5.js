'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const bodyColor = document.querySelector('body');

button.addEventListener('click', handleClick);

function handleClick() {
  spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = getRandomHexColor();
}
