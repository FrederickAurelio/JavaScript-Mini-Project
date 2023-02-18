"use strict";
const labelTime = document.querySelector(".time");
const newYearTime = new Date(2024, 1, 10).getTime();

const timer = function () {
    const currentTime = new Date().getTime();
    const remainingTime = newYearTime - currentTime;
    const days = String(Math.floor(remainingTime / (1000 * 60 * 60 * 24))).padStart(2, 0);
    const hours = String(Math.floor((remainingTime / (1000 * 60 * 60)) % 24)).padStart(2, 0);
    const mins = String(Math.floor((remainingTime / (1000 * 60)) % 60)).padStart(2, 0);
    const secs = String(Math.floor((remainingTime / (1000)) % 60)).padStart(2, 0);
    labelTime.innerHTML = `<div class="time">${days}<span>days</span> : ${hours}<span>hours</span> : ${mins}<span>minutes</span> : ${secs}<span>seconds</span></div>`;

    if(remainingTime <= 0){
        labelTime.innerHTML = `<div class="time">00<span>days</span> : 00<span>hours</span> : 00<span>minutes</span> : 00<span>seconds</span></div>`;
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(timer, 200);