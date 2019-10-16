var arr = new Array(1, 2, 4, 5, 7, 8, 3);
var x = arr[0];
for (var i = 0; i < arr.length; i++) {
if (x < arr[i]){
    x=arr[i]

}

}
console.log("Max element "+x);