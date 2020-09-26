const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('ul');
const newIngredients = ingredients.map(ingredient => {
  const ItemEl = document.createElement('li');
  ItemEl.textContent = ingredient;
  return ItemEl;
});
ingredientsEl.append(...newIngredients);
