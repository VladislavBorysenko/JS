var array_1 = new Array(1, 2, 3, 5, 7, 9, 10);
var array_2 = new Array(1, 4, 3, 5, 8, 9, 0);
/* объявляем строковую переменную для результатов */
var str_res = '';
for (var i in array_1) {
    for (var j in array_2) {

        if (array_1[i] == array_2[j]) {
            /* если значения совпали, то помещаем данное число
             * в результирующую строку str_res
             * и после значения добавляем разделитель - '; '
             * точку с запятой и пробел,
             * чтобы наша результирующая строка красивей и
             * читабельней выглядела на экране
             */
            str_res += array_1[i] + '; ';
        }
    }
}
// выводим результирующую строку на экран
alert(str_res);