const nameEl = document.querySelector("#userName");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const retypePasswordEl = document.querySelector("#retypePassword");

nameEl.addEventListener("input", (e)=>{
    const name = nameEl.value;
    const errorDiv = document.querySelector("#userNameError")

    if (!validateName(name)) {
        nameEl.classList.add("error");
        errorDiv.textContent = "Ism kamida 3 ta harf bo'lishi kerak!";
        errorDiv.style.display = "block";
    }else{
        nameEl.classList.remove("error");
        errorDiv.style.display = "none";
    }
});