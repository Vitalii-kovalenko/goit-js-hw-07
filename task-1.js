const ItemsEl = document.querySelectorAll(' .item');
console.log(` в списке ${ItemsEl.length} категории`);

const category = array => {
  array.forEach(element => {
    const title = element.querySelector('h2');
    const itemEl = element.querySelectorAll('li');
    console.log(`Категория: ${title.textContent}.`);
    console.log(`Количество элементов: ${itemEl.length}.`);
  });
};
category(ItemsEl);
