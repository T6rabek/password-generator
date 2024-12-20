const passwordBox = document.querySelector('.password');
const uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const lowercase = 'qwertyuiopasdfghjklzxcvbnm';
const digits = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~';
const allChars = uppercase + lowercase + digits + symbols;
const copyBtn = document.querySelector('.copy');
passwordBox.disabled = true;
const lengthOfPassword = document.querySelector('.length');
const uppercaseBox = document.querySelector('#uppercase');
const lowercaseBox = document.querySelector('#lowercase');
const digitsBox = document.querySelector('#digits');
const symbolsBox = document.querySelector('#symbols');
const allBox = document.querySelector('#all');

function generatePassword() {
  let passwordLength = lengthOfPassword.value;
  let password = '';
  let checkedChars = '';

  if (!isNaN(passwordLength) && passwordLength > 0) {
    if (uppercaseBox.checked) checkedChars += uppercase;
    if (lowercaseBox.checked) checkedChars += lowercase;
    if (digitsBox.checked) checkedChars += digits;
    if (symbolsBox.checked) checkedChars += symbols;
    if (allBox.checked) checkedChars += allChars;

    if (checkedChars === '') {
      passwordBox.value = 'Select at lease one character type';
      return;
    }

    while (password.length < passwordLength) {
      password += checkedChars[Math.floor(Math.random() * checkedChars.length)];
    }

    passwordBox.value = password;
  } else {
    lengthOfPassword.placeholder = 'Please, enter a number';
  }
}

copyBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => alert('Password copied to clipboard!'))
    .catch(() => alert('Failed to copy password'));
});

document
  .querySelector('.generatorButton')
  .addEventListener('click', generatePassword);
