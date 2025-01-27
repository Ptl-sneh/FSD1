/* Modifier
    1. i --> ignore case
    2. brackets --> checks in full value and give output wheather it is consecutive or not
    3. [0-9] --> it matches numbers in value

    Meta characters 

    1. ^s --> must start with s
    2. [^abc] --> except this
    3. [^0-9] --> starts with except this
    4. a$ --> must ends with
    5. * --> zero or more occurance
    6. + --> one or more occurance
    7. ? --> zero or one occurance
    8. \d --> [0-9]  numbers and alphanumeric
    9. \D --> [^0-9] alphanumeric aplhabets
    10 \w --> [A-Z,a-z,0-9,_] only symbols are not valid
    11. \W --> [^A-Z,a-z,0-9,_]

    name = /[A-z_]/ or /A-Za-z_/
    contact = /\d{10}/
*/

function fun(){
    // var pat = /[abc]|[0-9]/i
    // a = document.getElementById("t1").value
    // if(pat.test(a)){
    //     alert("matched")
    // }else{
    //     alert("not matched")
    // }
    var pat1 = /bo*/i
    b = document.getElementById("t2").value
    if(pat1.test(b)){
        alert("matched")
    }else{
        alert("not matched")
    }
}