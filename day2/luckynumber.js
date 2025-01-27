function fun(){
    var n = document.getElementById("s1").textContent;
    // n = parseInt(n);
    var result = lucky_Number(n);

    if (result){
        document.getElementById("p1").innerHTML = "It is a lucky number";
    }
    else{
        document.getElementById("p1").innerHTML = "It is not a lucky number";
    }
}

function lucky_Number(n1){
    var sum = 0;
    while(n1>0){
        var a = n1 % 10;
        n1 = Math.floor(n1/10);
        sum = sum + a;
        // document.write(sum + "<br>")
    }
    if (sum == 1){
        return true;
    }
    else if(sum > 1 && sum <=4){
        return false;
    }
    return lucky_Number(sum);
}