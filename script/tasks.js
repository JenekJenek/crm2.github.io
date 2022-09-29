{
const rain = 1;

function getRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

if (rain === getRandom(0,1)) {
    console.log("Пошёл дождь. Возьмите зонт!")
} else {
    console.log("Дождя нет!")
}
}

{
const mathematic = prompt("Введите кол-во баллов по математике: ");
const mathematic_num = Number(mathematic);
const language = prompt("Введите кол-во баллов по русскому языку: ");
const language_num = Number(language);
const informatic = prompt("Введите кол-во баллов по информатике: ");
const informatic_num = Number(informatic);

if (265 >= mathematic_num + language_num + informatic_num) {
    alert("Мало баллов")
} else {
    alert("Поздравляю, вы поступили на бюджет!")
}
}

{
const moneyAway = prompt("Сумма для вывода: ");
const moneyAway_num = Number(moneyAway);

if (moneyAway_num % 100 == 0) {
    console.log("Ваша сумма для выдачи: " + moneyAway_num)
} else {
    console.log("Автомат выдает только суммы кратные 100р")
}
}

