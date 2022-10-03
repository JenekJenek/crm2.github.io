'use strict';

const foo = () => {
    for (let i = 1; i < 11; i++ ) {
        console.log('--------------');
        for (let y = 2; y <= 10; y++ ) {
            if (i >= 11) return;
            console.log(`${i} ** ${y} = ${i ** y}`);
        }
    }
    console.log('------');
}

foo()