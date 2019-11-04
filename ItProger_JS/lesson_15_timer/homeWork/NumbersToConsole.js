// Можно прописать просто название функции, но без скобок
var intervalNumbers = setInterval(numbersToConsole, 120);
var numbers = 10;

function numbersToConsole() {
    console.log("Число - " + numbers); // Выводим число
    numbers++; // Увеличиваем число на 1
    if(numbers > 32) // Если число больше 32, тогда останавливаем интервал
        clearInterval(intervalNumbers);
}