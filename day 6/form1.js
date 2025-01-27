function fun(){
    // first way to count input type
    // obj = document.f1
    // alert(ob.length)


    // second way to count input type
    // ob = document.forms["f1"]
    // alert(ob.length)


    // first way to print selected value
    // obj = document.f1.gen.value
    // alert(obj)

    // second way to print selected value
    // obj = document.forms["f1"]["gen"].value
    // alert(obj)

    obj = document.forms["f1"]["c1"]
    for (i = 0 ;i< obj.length;i++ ){
        alert(obj[i].value)
    }
}