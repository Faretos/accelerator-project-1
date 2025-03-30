const form = document.getElementById('application-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const nameErrorText = document.getElementById('name-error-text');
const nameErrorRequired = document.getElementById('name-required-text');
const phoneErrorText = document.getElementById('phone-error-text');
const phoneErrorRequired = document.getElementById('phone-required-text');

form.addEventListener('submit', (event) => {
  let valid = true;

  nameErrorRequired.style.display = 'none';
  nameErrorText.style.display = 'none';
  phoneErrorRequired.style.display = 'none';
  phoneErrorText.style.display = 'none';
  nameInput.classList.remove('error');
  phoneInput.classList.remove('error');

  if (nameInput.value.trim() === '') {
    valid = false;
    nameErrorRequired.style.display = 'block';
    nameInput.classList.add('error');
  } else if (!nameInput.checkValidity()) {
    valid = false;
    nameErrorText.style.display = 'block';
    nameInput.classList.add('error');
  }

  if (phoneInput.value.trim() === '') {
    valid = false;
    phoneErrorRequired.style.display = 'block';
    phoneInput.classList.add('error');
  } else if (!phoneInput.checkValidity()) {
    valid = false;
    phoneErrorText.style.display = 'block';
    phoneInput.classList.add('error');
  }

  if (!valid) {
    event.preventDefault();
  }
});
