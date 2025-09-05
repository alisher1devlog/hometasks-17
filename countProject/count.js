const btnDecreaseEl = document.querySelector(".btn-decrease");
const btnResetEl = document.querySelector(".btn-reset");
const btnIncreaseEl = document.querySelector(".btn-increase");
const counterValueEl = document.querySelector("#counter-value");

let count = 0;

btnDecreaseEl.addEventListener("click", () => {
    count--;
    counterValueEl.innerHTML =count ;
});
btnIncreaseEl.addEventListener("click", () =>{
    count+=1000;
    counterValueEl.innerHTML = count;
});
btnResetEl.addEventListener("click", ()=> {
    count = 0
    counterValueEl.innerHTML = 0;
});
