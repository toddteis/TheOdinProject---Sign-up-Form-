const getPassword = document.getElementById('password');
const getConfirmationPassword = document.getElementById('confirm-pw');
const form = document.getElementById('form');
const pwError = document.getElementById('pw-error');


form.addEventListener('submit', (e) => {
  let hasPwError = false;

  if (getPassword.value !== getConfirmationPassword.value) {
    hasPwError = true;
  } 

  if (hasPwError) {
    e.preventDefault();
    getPassword.classList.add('error');
    getConfirmationPassword.classList.add('error');
    pwError.classList.remove('hidden');
  }
})