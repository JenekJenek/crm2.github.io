function calculate(basketAmount, countGoods, promo = null) {
    let totalAmount = basketAmount;

if (promo = 'METHED') {
    const countTenPercent = basketAmount/100*10;
totalAmount -= countTenPercent;
console.log('Промокод METHED -10% =' + totalAmount);
}

if (countGoods >= 10) {
const countThreeProcent = basketAmount/100*3;
totalAmount -= countThreeProcent;
console.log('Больше 10 товаров -3% =' + totalAmount);
}

if (basketAmount > 30000) {
const countFiveteenProcent = totalAmount/100*15;
const countDifference = totalAmount - 30000;
totalAmount = countDifference - countFiveteenProcent + 30000;
console.log('Сумма больше 30 000 ₽ - 15% =' + totalAmount);
}

if (promo = 'G3H2Z1' && basketAmount <= 2000) {
const countFiveHundreth = totalAmount - 500;
totalAmount -= countFiveHundreth ;
console.log('Промокод G3H2Z1 -500p =' + totalAmount); 
}
console.log('Стоимость равна ' + totalAmount);
}

calculate(31000, 12, 'METHED');


