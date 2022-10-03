const getChange = Number(prompt("Сколько евро поменять?"));
alert(getChange * 1.2 * 73);

const exchange = params => params * 1.2 * 73;
console.log(exchange(1));