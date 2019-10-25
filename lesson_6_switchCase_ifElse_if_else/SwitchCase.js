var x = 23;
var y = 10;
switch (x) { // Проверяем переменную x
    case 1: // Если переменная будет равна 1, то здесь сработает код
            // Может быть множество строк, а не только одна
        console.log("Переменная равна 1");
        break; // Указываем конец для кода для этой проверки
    case 56: // Если переменная будет равна 56, то здесь сработает код
        // Может быть множество строк, а не только одна
        console.log("Переменная равна 56");
        break; // Указываем конец для кода для этой проверки
    // По аналогии таких проверок может быть множество
    // Также можно добавить проверку, которая сработает в случае
    // если все остальные проверки не сработают
    default:
        console.log("Что-то другое");
        break; // Можно и не ставить, так как это последние условие
}
switch (y) {
    case 3:document.write("result = 3"); break;
    case 5:document.write("result = 3"); break;
    case 8:document.write("result = 3"); break;
    case 10:document.write("result = 3"); break;
    case 15:document.write("result = 3"); break;
    default:document.write("Else");
}
document.write("<br/>")
//если X<Y выведем Yes, если Y>X тогда выведем No
x=2, y=1;
x<y ? document.write("Yes"):document.write("No");