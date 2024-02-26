'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumb = document.querySelector('input');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const ctrls = document.querySelector('#controls');

buttonCreate.addEventListener('click', makeBoxes);

function makeBoxes() {
  inputNumb.focus();
  if (inputNumb.value >= 1 && inputNumb.value <= 100) {
    createBoxes(inputNumb.value);
    inputNumb.value = '';
  } else {
    alert(`Write number from 1 to 100`);
  }
}

buttonDestroy.addEventListener('click', deleteBoxes);

let boxsize;
let newDiv;

function deleteBoxes() {
  inputNumb.value = '';
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML('beforeend', newDiv);
    boxsize += 10;
  }
}
