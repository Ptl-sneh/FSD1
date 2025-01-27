
function happy_number(n){
    var sum = 0;
    while(n>0){
        var a = n % 10;
        n = Math.floor(n/10);
        sum += a*a;
        // document.write(sum + "<br>")
    }
    if (sum == 1){
        return true;
    } else if (sum>1 && sum<=4){
        return false;
    }
    return happy_number(sum);
}

function fun(){
    var n1 = document.getElementById("s1").textContent;
    n1 = parseInt(n1)
    console.log(typeof(n1));
    var result = happy_number(n1);
    if (result){
        document.getElementById("p1").innerHTML = "The number is a happy number";
    }else{
        document.getElementById("p1").innerHTML = "The number is not a happy number";
    }
}

