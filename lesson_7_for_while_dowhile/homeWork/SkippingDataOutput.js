for (var i = -30; i < 0; i += 3) {
    if (i == -27 || i == -21 || i == -15)
        continue;
    document.write(i + "</br>")
}

var y = -30;
do {


    if (y == -27 || y == -21 || y == -15){
        y += 3;
    continue;}
    document.write(y + "</br>");
    y+=3;
} while (y < 0)