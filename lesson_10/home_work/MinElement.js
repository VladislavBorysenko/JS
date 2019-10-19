//Создайте двумерный массив и найдите минимальный элемент среди всех чисел в массиве.

var arr = new Array(new Array(0,34,-2),new Array(3,-4,5));
var min_num = arr[0][0];
for (let i = 0; i <arr.length ; i++) {
    for (let j = 0; j <arr[i].length ; j++) {
        if (arr[i][j]<min_num){
            min_num=arr[i][j]


        }
    }
}
console.log("Минимальный элемент: " + min_num);

// var numbers = new Array(new Array(0, 34, -2), new Array(3, -4, 5));
// var min_num = numbers[0][0];
// for (var i = 0; i < numbers.length; i++) {
//     for (var j = 0; j < numbers[i].length; j++) {
//         if (numbers[i][j] < min_num) {
//             min_num = numbers[i][j];
//         }
//     }
// }
// console.log("Минимальный элемент: " + min_num);