var currentDate = new Date();
var zainBirthDate = new Date('November 20, 2003');

var currentMillisecond = currentDate.getTime();
var remainingsecond = zainBirthDate.getTime();

console.log(currentMillisecond - remainingsecond / 1000 / 60 / 60 / 24 / 365)