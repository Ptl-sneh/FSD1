var d = new Date();
console.log(d);
console.log(d.getDate()); // 1 to 31
console.log(d.getDay()); // 0 to 6
console.log(d.getMonth()); // 0 to 11
console.log(d.getYear()); // 125
console.log(d.getFullYear()); // 2025 
console.log(d.getHours()); // 0 to 23
console.log(d.getMinutes()); // 0 to 59
console.log(d.getSeconds()); // 0 to 59
console.log(d.getTime()); // form milliseconds from 1970
console.log(d.getUTCMilliseconds());

var d1 = new Date();
d1.setDate(10);
d1.setMonth(11);
d1.setFullYear(1999)
console.log(d1.getYear())
console.log(d1)
