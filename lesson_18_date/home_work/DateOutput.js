var date = new Date();
currentDate = date.getFullYear();
currentDate +="-"+ (date.getMonth()+1);
currentDate +="-"+ date.getDate();
currentDate +=" | "+ date.getHours();
currentDate +=":"+ date.getMinutes();
currentDate +=":"+ date.getSeconds();
console.log(currentDate);

//--------------------------------------------------------------------------

var date = new Date();
console.log(date.getFullYear() + " - " + date.getMonth() + " - " + (date.getDate() +1)+ " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
