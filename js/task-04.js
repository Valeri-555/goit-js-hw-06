const buttonDec = document. querySelector('button[data-action="decrement"]')
// console.dir (buttonDec)
const buttonInc = document.querySelector('button[data-action="increment"]')

const number = document.querySelector ('#value')

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