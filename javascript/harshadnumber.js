var num;
function fun() {
    num = prompt("Enter a number: ");
    console.log(typeof(num));
    
    result = harshadNumber(num);
    console.log(typeof(result));
    
    if (result) {
        document.getElementById("ans1").innerHTML = "It is a Harshad Number";
    }
    else {
        document.getElementById("ans1").innerHTML = "It is a Harshad Number";
    }
}

function harshadNumber(n1) {
    console.log("n1:" + typeof(n1));
    var temp = n1;
    console.log("temp:" + typeof(n1));

    var sum = 0;
    while (temp > 0) {
        r = temp % 10;
        sum += r;
        temp = Math.floor(temp / 10);
    }

    if (n1 % sum == 0) {
        return true;
    } else {
        return false;
    }
}