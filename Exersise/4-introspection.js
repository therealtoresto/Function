'use strict';

const introspect = obj => {
    const funcs = [];
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            const func = obj[key];
            funcs.push([key, func.length]);
        }
    }
    return funcs;
};

// Usage

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

console.log(introspect(iface));
