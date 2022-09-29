// {
// const nameProduct = "Пальто";
// const quantityGoods = "Количество товара";
// const categoryGoods = "Категория товара";
// const priceGoods = "Цена товара";

// console.log (nameProduct);
// }

{
const nameProductGet = prompt('Наименование товара :');
const quantityGoods = prompt("Выберите количество товара: ");
const quantityGoods_num = Number(quantityGoods);
if (quantityGoods_num > 0) {

} else {
    alert("Вы ввели некорректные данные")
}

const categoryGoods = prompt('Категория товара');
const priceGoods = prompt('Цена товара');
const priceGoods_num = Number(priceGoods);
if (priceGoods_num > 0) {

} else {
    alert("Вы ввели некорректные данные")
}



// console.log (typeof nameProductGet)
// console.log (typeof quantityGoods_num)
// console.log (typeof categoryGoods)
// console.log (typeof priceGoods_num)

// console.log("На складе " + nameProductGet + " в количестве: " + quantityGoods_num + " из категории: " + categoryGoods + " на сумму: " + priceGoods * quantityGoods_num)
}

