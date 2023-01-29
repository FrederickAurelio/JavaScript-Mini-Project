const result = document.getElementById("result");
const input = document.getElementById("inputNumber");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", checkPrime);

function checkPrime() {
    let number = input.value;
    if(isNaN(number)){
        result.textContent = `Result: ${number} is NaN`;
        return;
    }
    if (number < 2) {
        result.textContent = `Result: ${number} is NOT a prime number`;
        return;
    }
    for (i = 2; i < number; i += 1) {
        if (number % i == 0) {
            result.textContent = `Result: ${number} is NOT a prime number`;
            return;
        }
    }

    result.textContent = `Result: ${number} is a PRIME number`;
}