var countDownDate = new Date("July 12, 2023 17:00:00").getTime();

var countdownInterval = setInterval(function() {
var now = new Date().getTime();

var timeRemaining = countDownDate - now;

var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
var hours = Math.floor(
(timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
var minutes = Math.floor(
(timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
);
var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if (timeRemaining < 0) {
clearInterval(countdownInterval);
document.getElementById("days").innerHTML = "0";
document.getElementById("hours").innerHTML = "0";
document.getElementById("minutes").innerHTML = "0";
document.getElementById("seconds").innerHTML = "0";
}
}, 1000);