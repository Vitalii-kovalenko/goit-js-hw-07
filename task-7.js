const refs = {
  fontSiseText: document.querySelector('#font-size-control'),
  currentText: document.querySelector('#text'),
};
refs.fontSiseText.addEventListener('input', fontSizeValue);

function fontSizeValue(event) {
  refs.currentText.style.fontSize = event.currentTarget.value + 'px';
}
