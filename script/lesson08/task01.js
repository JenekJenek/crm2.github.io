const generator = ( number, min, max ) => {
  let array = [];
  min = 0;
  max = 100;
  for(let i = 0; i < number; i++) {
    array.push(Math.floor(Math.random() * (max - min + 1) + min))
  }
  return array
}

console.log(generator(6));