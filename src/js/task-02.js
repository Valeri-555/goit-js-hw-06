const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsId = document.querySelector('#ingredients');
console.dir(ingredientsId);

const items = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsId.append(...items);

// const ingredientsId = document.getElementById('ingredients');
// console.dir(ingredientsId);


// const list = document.createElement('li');
// const text = document.createElement('p');
// console.dir(list);
// console.dir(text);

