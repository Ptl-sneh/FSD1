fun();
function fun(){
    var num = prompt("Enter a number")
    if (num.length == 2){
        var product = 0;
        var num1 = parseInt(num)
        r = num1 % 10;
        n = Math.floor(num1/10);
        product = Math.pow(n,r)
        alert("Answer is: " + product)
    }
    else{
        alert("Number must be of two digit number")
    }
}