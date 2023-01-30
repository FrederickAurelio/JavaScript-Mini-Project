const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");
let count = 0;

increaseBtn.addEventListener("click", ()=>{
    count += 1;
    counter.textContent = count;
    changeColor();
});
decreaseBtn.addEventListener("click", ()=>{
    count -= 1;
    counter.textContent = count;
    changeColor();
});
resetBtn.addEventListener("click", ()=>{
    count = 0;
    counter.textContent = count;
    changeColor();
});

function changeColor(){
    if(count > 0){
        counter.style.color = "green";
    }else if(count < 0){
        counter.style.color = "red";
    }else{
        counter.style.color = "black";
    }
}