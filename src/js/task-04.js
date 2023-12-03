const buttonDec = document. querySelector('button[data-action="decrement"]')
// console.dir (buttonDec)
const buttonInc = document.querySelector('button[data-action="increment"]')
console.dir (buttonInc)
const number = document.querySelector ('#value')
console.dir (number)
let counterValue = 0;

// Функція для зменшення значення лічильника
buttonDec.addEventListener('click', function () {
    counterValue -= 1;
    number.textContent = counterValue;
});

// Функція для збільшення значення лічильника
buttonInc.addEventListener('click', function () {
    counterValue += 1;
    number.textContent = counterValue;
});