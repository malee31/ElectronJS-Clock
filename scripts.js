const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const now = new Date();

var hr = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();


hour.setAttribute("animation-delay", hr * -60);
minute.setAttribute("animation-delay", min * -60);
second.setAttribute("animation-delay", sec * -60);
