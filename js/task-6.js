'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const inputNumb = document.querySelector('input');
// const buttonCreate = document.querySelector('[data-create]');
// const buttonDestroy = document.querySelector('[data-destroy]');
// const boxes = document.querySelector('#boxes');
// const ctrls = document.querySelector('#controls');
// let inptVal;
// buttonCreate.addEventListener('click', makeBoxes);

// function makeBoxes() {
//   inputNumb.focus();
//   if (inputNumb.value > 0) {
//     createBoxes(inputNumb.value);
//     inputNumb.value = '';
//   } else {
//     alert(`Write number from 1 to 100`);
//   }
// }

// buttonDestroy.addEventListener('click', deleteBoxes);

// let boxsize;
// let newDiv;

// function deleteBoxes() {
//   inputNumb.value = '';
//   boxes.innerHTML = '';
// }

// function createBoxes(amount) {
//   boxes.innerHTML = '';
//   boxsize = 30;
//   for (let i = 1; i <= amount; i += 1) {
//     newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
//     boxes.insertAdjacentHTML('beforeend', newDiv);
//     boxsize += 10;
//   }
// }

const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const txtInpt = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const ctrls = document.querySelector('#controls');

let inptVal;

create.addEventListener('click', () => {
  txtInpt.focus();
  if (txtInpt.value > 0 && txtInpt.value < 101) {
    createBoxes(txtInpt.value);
    txtInpt.value = '';
  } else {
    alert('Amount is not correct');
  }
});

let boxsize;
let newDiv;

destroy.addEventListener('click', () => {
  txtInpt.value = '';
  boxes.innerHTML = '';
});

function createBoxes(amount) {
  boxes.innerHTML = '';
  boxsize = 30;
  for (let i = 1; i <= amount; i += 1) {
    newDiv = `<div style="width: ${boxsize}px; height: ${boxsize}px; background: ${getRandomHexColor()}"></div>`;
    boxes.insertAdjacentHTML('beforeend', newDiv);
    boxsize += 10;
  }
}
