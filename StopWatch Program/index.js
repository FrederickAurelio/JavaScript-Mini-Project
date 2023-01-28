const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let disable = true;
let hrs = 0;
let mins = 0;
let secs = 0;
let msecs = 0;
let startTime = 0;
let elapsedTime = 0;
let intervalId;

startBtn.addEventListener("click", () => {
    if (disable) {
        disable = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
});
pauseBtn.addEventListener("click", () => {
    if (!disable) {
        disable = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    disable = true;
    clearInterval(intervalId);
    hrs = 0;
    mins = 0;
    secs = 0;
    msecs = 0;
    startTime = 0;
    elapsedTime = 0;
    timeDisplay.textContent = `00:00:00:00`;
});
function updateTime() {
    elapsedTime = Date.now() - startTime;
    msecs = Math.floor((elapsedTime / 10) % 100);
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 3600)) % 60);

    msecs = pad(msecs);
    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
    timeDisplay.textContent = `${hrs}:${mins}:${secs}:${msecs}`;
}