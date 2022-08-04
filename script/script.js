const nameProduct = prompt('Наименование товара :');
alert ("Выбрано: " + nameProduct);
const quantityGoods = prompt("Выберите количество товара: ");
let quantityGoods_num = Number(quantityGoods);
alert ("Количество товара: " + quantityGoods);
const categoryGoods = prompt('Категория товара');
alert ("Категория товара: " + categoryGoods);
const priceGoods = prompt('Цена товара');
let priceGoods_num = Number(priceGoods);
alert ("Ваша цена: " + priceGoods);

console.log (typeof nameProduct)
console.log (typeof quantityGoods_num)
console.log (typeof categoryGoods)
console.log (typeof priceGoods_num)

console.log("На складе " + nameProduct + " в количестве: " + quantityGoods_num + " из категории: " + categoryGoods + " на сумму: " + priceGoods * quantityGoods_num)

