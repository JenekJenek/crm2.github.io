const generator = ( number, n, m ) => {
    let array = [];
    for(let i = 0; i < number; i++) {
      array.push(Math.floor(Math.random() * (m - n + 1) + n));
    }
    return array
}

console.log(generator(6, 100, -100));