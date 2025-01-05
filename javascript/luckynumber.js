var num;
function fun() {
    num = prompt("Enter a number: ")
    console.log(typeof(num));
    
    var result = luckyNumber(num);
    console.log(result);
    
    if (result) {
        document.getElementById("ans").innnerHTML = "It is a Lucky Number";
    }
    else {
        document.getElementById("ans").innnerHTML = "It is not a Lucky Number";
    }
}

function luckyNumber(n1) {
    console.log(typeof(n1));
    
    var sum = 0;
    while (n1 > 0) {
        r = n1 % 10;
        sum += r;
        n1 = Math.floor(n1 / 10);
    }
    if (sum == 1) {
        return true;
    }
    else if (sum > 1 && sum <= 4) {
        return false;
    }
    return luckyNumber(sum);
}