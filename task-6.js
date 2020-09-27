const nmbrOfCharacters = document.querySelector('#validation-input');
nmbrOfCharacters.addEventListener('blur', validInput);

function validInput(event) {
  if (
    event.currentTarget.getAttribute('data-length') ==
    event.currentTarget.value.length
  ) {
    nmbrOfCharacters.classList.remove('invalid');
    nmbrOfCharacters.classList.add('valid');
  } else {
    nmbrOfCharacters.classList.remove('valid');
    nmbrOfCharacters.classList.add('invalid');
  }
}
