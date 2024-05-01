const btn = document.querySelector('#btn');
const btnIncideSquare = document.querySelector('#e_btn');
const inputText = document.querySelector('#text');
const inputRange = document.querySelector('#range');
const spanRange = document.querySelector('#range-span');
const square = document.querySelector('#square');
const circle = document.querySelector('#circle');

const changeSizeCircle = () => {
  spanRange.textContent = inputRange.value;

  circle.style.height = `${inputRange.value}%`;
  circle.style.width = `${inputRange.value}%`;
};

btnIncideSquare.style.display = 'none';

btn.addEventListener('click', () => {
  square.style.backgroundColor = `${inputText.value}`;

  inputText.value = '';
});

document.addEventListener('DOMContentLoaded', changeSizeCircle);
inputRange.addEventListener('input', changeSizeCircle);
