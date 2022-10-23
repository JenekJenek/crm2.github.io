const generator = ( number, n, m, parity) => {
    let array = [];

    for(let i = 0; i < number; i++) {
      array.push(Math.floor(Math.random() * (m - n + 1) + n));
    } 

    let result = array.filter(e => e % 2 == (parity == 'odd'));
    console.log(result);

    return array
}
console.log(generator(6, 0, 100, 'even'));

