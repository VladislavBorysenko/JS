var date = new Date();
var currentMonth;
switch (date.getMonth()) {
    case 0:
        currentMonth = "january";
        break;
        case 1:
        currentMonth = "february";
        break;
        case 2:
        currentMonth = "march";
        break;
        case 3:
        currentMonth = "april";
        break;
        case 4:
        currentMonth = "may";
        break;
        case 5:
        currentMonth = "june";
        break;
        case 6:
        currentMonth = "july";
        break;
        case 7:
        currentMonth = "august";
        break;
        case 8:
        currentMonth = "september";
        break;
        case 9:
        currentMonth = "october";
        break;
        case 10:
        currentMonth = "november";
        break;
        case 11:
        currentMonth = "december";
        break;
}

console.log(date.getDate() + "-" + currentMonth);