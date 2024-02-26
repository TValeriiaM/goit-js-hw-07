'use strict';

const formForLogin = document.querySelector('.login-form');

formForLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputNames = event.currentTarget.elements;

  const inputvalues = {
    emil: inputNames.email.value.trim(),
    password: inputNames.password.value.trim(),
  };

  console.log(inputvalues);

  if (inputNames.email.value === '' && inputNames.password.value === '') {
    alert('All form fields must be filled in');
  }

  event.currentTarget.reset();
}
