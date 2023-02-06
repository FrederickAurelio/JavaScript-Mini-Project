"use strict";

const toggleBtn = document.querySelector(".toggleBtn");
const toggleContainer = document.querySelector(".toggle-container")
const text = document.querySelector(".text");
toggleContainer.addEventListener("click", () => {
    toggleBtn.classList.toggle("activeMove");
    toggleContainer.classList.toggle("activeBgColor");
    document.body.classList.toggle("dark");
    text.classList.toggle("activeColor")
    text.classList.contains("activeColor")? text.textContent = "Have a good rest :)" : text.textContent = "Time to study !";
});