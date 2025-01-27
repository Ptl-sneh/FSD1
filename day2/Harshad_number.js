function harshad_Number(){
    var n = document.getElementById("s1").textContent;
    console.log(n)
    var temp = n;
    var sum = 0;
    var count = 0
    while (temp>0){
        r = temp % 10;
        sum = sum + r;
        count += 1
        temp = Math.floor(temp/10);
    }
    if (sum % count == 0){
        document.getElementById("p1").innerHTML = "Harshad Number";
    }else{
        document.getElementById("p1").innerHTML = "Not a Harshad Number";
    }
}