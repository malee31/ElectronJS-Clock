const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const now = new Date();

var hr = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();


hour.style.animationDelay = "" + (hr * -60) + "s";
minute.style.animationDelay = "" + (min * -360) + "s";
second.style.animationDelay = "" + (sec * -21600) + "s";
