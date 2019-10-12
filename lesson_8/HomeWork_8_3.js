var user = prompt("Введите что-либо:");
if(user == "Нет")
    var res = confirm("Вы точно отказываетесь?");

if(!res) // Если res false, то есть нажата Отмена
    var user = prompt("Введите что-либо:");