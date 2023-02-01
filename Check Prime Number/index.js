const result = document.getElementById("result");
const input = document.getElementById("inputNumber");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
    result.textContent = checkPrime();
});

function checkPrime() {
    let number = input.value;
    if (isNaN(number)) {
        return `Result: ${number} is NaN`;
    }
    if (number < 2) {
        return `Result: ${number} is NOT a prime number`;
    }
    for (i = 2; i < number; i += 1) {
        if (number % i == 0) {
            return `Result: ${number} is NOT a prime number`;
        }
    }
    return `Result: ${number} is a PRIME number`;
}
