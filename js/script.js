'use strict';

// Task #1
let num = +prompt('Введите число');
let i = 2;
let a = num;

for (; i <= num; i++) {
    if (num % i === 0) {
        a = i;
        console.log(i);
        break;
    }
}
if (num < 1) {
    a = 'Nan';
}
console.log(a);