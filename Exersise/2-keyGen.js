'use strict';

const characters = '1234567890qwertyuiopasdfghjklzxcvbnm';
const generateKey = (length, characters) => {
    const base = characters.length;
    const key = [];
    for (let i = 0; i < length; i++) {
        key[i] = characters.charAt(Math.floor(Math.random() * base));
    }
    return key.join('');
};

console.log(generateKey(40, characters));
console.log(generateKey(1, characters));
console.log(generateKey(8, characters));
console.log(generateKey(2, characters));
