'use strict';

function random(min, max) {
    arguments.length === 1 ? (max = min) && (min = 0) : max;
    // console.log('min: ', Math.floor(min), 'max: ', Math.floor(max), max);
    return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(random(1, 4));
console.log(random(3));
console.log(random(20, 100));
console.log(random(5, 2));
console.log(random(0, 0));
console.log(random(0));
console.log(random(0, 9));
