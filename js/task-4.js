'use strict';

const formForLogin = document.querySelector('.login-form');

formForLogin.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const inputNames = event.target.elements;

  const inputvalues = {
    email: inputNames.email.value.trim(),
    password: inputNames.password.value.trim(),
  };

  if (inputNames.email.value === '' || inputNames.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(inputvalues);
    event.currentTarget.reset();
  }
}
