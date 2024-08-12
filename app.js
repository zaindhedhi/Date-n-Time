// Current Date n Time methods
var rightNow = new Date();

console.log(rightNow);

//1 for change in string
console.log(rightNow.toString());

//2 for day of weak
console.log(rightNow.getDay())

//3 for month 
console.log(rightNow.getMonth());

//4 for date of month
console.log(rightNow.getDate());

//5 for full year
console.log(rightNow.getFullYear());

//6 for get hours 
console.log(rightNow.getHours());

//7 for get minutes 
console.log(rightNow.getMinutes());

//8 for get seconds
console.log(rightNow.getSeconds());

//9 for get milli seconds
console.log(rightNow.getMilliseconds());

//10 for get Time since 01 Jan, 1970 in milliseconds 
console.log(rightNow.getTime());

// get age from time program

var currentDate = new Date();
var zainBirthDate = new Date('November 20, 2003');

var currentMillisecond = currentDate.getTime();
var zainMillisecond = zainBirthDate.getTime();

var remaining = currentMillisecond - zainMillisecond;

console.log(Math.round(remaining/1000/60/60/24/7))