function fun(){
    var name = prompt("Enter your name: ")
    var age = prompt("Enter your age: ")
    document.getElementById("s1").innerHTML = name
    console.log(name);
    console.log(age);
    
    document.getElementById("s2").innerHTML = age
}