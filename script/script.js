{
const nameProduct = "Пальто";
const quantityGoods = "Количество товара";
const categoryGoods = "Категория товара";
const priceGoods = "Цена товара";

console.log (nameProduct);
}

{
const nameProductGet = prompt('Наименование товара :');
const quantityGoods = prompt("Выберите количество товара: ");
let quantityGoods_num = Number(quantityGoods);
const categoryGoods = prompt('Категория товара');
const priceGoods = prompt('Цена товара');
let priceGoods_num = Number(priceGoods);

console.log (typeof nameProductGet)
console.log (typeof quantityGoods_num)
console.log (typeof categoryGoods)
console.log (typeof priceGoods_num)

console.log("На складе " + nameProductGet + " в количестве: " + quantityGoods_num + " из категории: " + categoryGoods + " на сумму: " + priceGoods * quantityGoods_num)
}

