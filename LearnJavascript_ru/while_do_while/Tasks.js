for (let i = 2; i < 11; i++) {
    x = i;
    if (i % 2 == 0) {
        alert(i);
    }

}
let i = 0;
while (i < 3) {
    alert(`number ${i + 1}!`);
    i++;
}

let num;

do {
    num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);

let n = 10;

nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }

        alert( i ); // простое число
    }