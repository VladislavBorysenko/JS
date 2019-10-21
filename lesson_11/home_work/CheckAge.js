function checkAge (age) {
    if (age>18){
        return true;
        console.log(true)
    }else {
        return confirm("Родители разрешили?")
    }

}
checkAge(15);