let input, number, random = Math.floor(Math.random() * 100);

while ((input = prompt("Загадано число от 0 до 100. Попробуйте угадать!")) !== null) {
    if ((number = +input) !== parseFloat(input) || !Number.isFinite(number)) {
        alert("Введите число!"); 
    } else if (number > random) {
        alert("Меньше!");
    } else if (number < random) {
        alert("Больше!");
    } else if (number == random) {
        alert("Правильно!");
        break;
    }
}