let box = document.querySelector('#box');
let input = document.querySelector('#input');
let inputbrdr = document.querySelector('#input-brdr');

input.addEventListener('input', function() {
    // box.style.borderRadius = input.value + 'px';
    box.style.background = input.value;
});
inputbrdr.addEventListener('input', function() {
    box.style.borderRadius = inputbrdr.value + '%';
});