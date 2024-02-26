'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const categorySubArr = document.querySelectorAll('h2');

categorySubArr.forEach(function (category) {
  const categoryName = category.textContent;
  console.log(`Category: ${categoryName}`);

  const categuryCount = category.parentElement.querySelectorAll('ul > li');
  console.log(categuryCount.length);
});
