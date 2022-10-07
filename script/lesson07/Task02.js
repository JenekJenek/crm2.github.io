const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const average = allCashbox.reduce((a, b) => a + b, 0) / allCashbox.length;
console.log(Math.floor(average));