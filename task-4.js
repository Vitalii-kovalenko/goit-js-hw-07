const refs = {
  incrementBtnEl: document.querySelector('[data-action="increment"]'),
  decrementBtnEl: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector('span'),
};
let valueCounter = 0;

refs.decrementBtnEl.addEventListener('click', onClickDecrementBtn);
refs.incrementBtnEl.addEventListener('click', onClickIncrementBtn);

function onClickDecrementBtn() {
  valueCounter -= 1;
  refs.valueEl.textContent = valueCounter;
}
function onClickIncrementBtn() {
  valueCounter += 1;
  refs.valueEl.textContent = valueCounter;
}
