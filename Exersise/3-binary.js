'use strict';

const ipToNumber = (ip = '127.0.0.1') => {
    const mas = ip.split('.');
    let n = 3;
    let res = 0;
    for (let i = 0; i < 4; i++) {
        mas[i] = parseInt(mas[i], 10);
        mas[i] <<= 8 * n;
        n--;
        res += mas[i];
    }
    return res;
};

// const ipToInt = (ip = '127.0.0.1') => {
//     const fn = (res, item) => (res << 8) + parseInt(item);
//     return ip.split('.').reduce(fn, 0);
//   };

console.log(ipToNumber('127.0.0.1'));
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'));
console.log(ipToNumber('165.225.133.150'));
console.log(ipToNumber('0.0.0.0'));
console.log(ipToNumber('8.8.8.8'));
