let arr = new Array( 1,2,3,4,5);
let sum = 0;
let x = 0;
for (let i = 0; i < arr.length; i++) {//пробегаем по массиву
    if (arr[i] > 0) { //если єлемент масива больше нуля,
        x = arr[i];// тогда записіваем его в х
        sum += x; // потом складываем наш новый элемент
    }
}

if (sum == 0) {
    alert("Нет чисел больше нуля")
}
else {
    console.log(sum)
}

