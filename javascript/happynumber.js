var num;
function fun() {
    num = prompt("Enter a number: ");
    console.log(typeof(num));
    var result = happynumber(num);
    
    if (result) {
        document.getElementById("ans").innerHTML = "It is a happy number"
    } else {
        document.getElementById("ans").innerHTML = "It is not a happy number"
    }
}

function happynumber(n1) {
    console.log(typeof(n1));

    var sum = 0;
    while (n1 > 0) {
        r = n1 % 10;
        sum = sum + r * r;
        n1 = Math.floor(n1 / 10);
    }
    if (sum == 1) {
        return true;
    } else if (sum > 1 && sum <= 4) {
        return false;
    }
    return happynumber(sum);
}