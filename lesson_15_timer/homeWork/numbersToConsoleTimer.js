// Вызов функции
var numbers = 10;
numbersToConsole();

function numbersToConsole() {
    console.log("Число - " + numbers); // Выводим число
    numbers++; // Увеличиваем число на 1
    // Если число меньше или равно 32, то вызываем функцию снова
    if(numbers <32)
    // Можно прописать просто название функции, но без скобок
        setTimeout(numbersToConsole, 120);
}
