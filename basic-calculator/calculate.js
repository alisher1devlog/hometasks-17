const number1El = document.querySelector("#number1");
const number2El = document.querySelector("#number2");
const finalResultEl = document.querySelector("#finalResult");
const operatorEl = document.querySelector("#operator");
const calculateEl = document.querySelector("#calculate");
const resetEl = document.querySelector("#reset");

calculateEl.addEventListener("click", (e)=>{
    e.preventDefault();
    const operator =operatorEl.value;
    const number1 = number1El.valueAsNumber;
    const number2 = number2El.valueAsNumber;
    if (operator === "add" ) {
        let calculate = number1 + number2;
        finalResultEl.textContent = calculate;
    }else if (operator === "min" ) {
        let calculate = number1 - number2;
        finalResultEl.textContent = calculate;
    }else if (operator === "mul" ) {
        let calculate = number1 * number2;
        finalResultEl.textContent = calculate;
    }else if (operator === "div" ) {
        let calculate = number1 / number2;
        finalResultEl.textContent = calculate;
    } 
});

resetEl.addEventListener("click", (e)=>{
    finalResultEl.textContent = "";
});

