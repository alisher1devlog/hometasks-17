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

emailEl.addEventListener("input", (e)=>{
    const email = emailEl.value;
    const errorDiv = document.querySelector("#emailErrorl");

    if (!validateEmail(email)) {
        emailEl.classList.add("error");
        errorDiv.textContent = "Emailda kamida bitta @, bitta . orasida harf bo'lishi lozim!.";
        errorDiv.style.display = "block";
    }else{
        emailEl.classList.remove("error");
        errorDiv.style.display = "none";
    }
});

passwordEl.addEventListener("input", (e) =>{
    const password = passwordEl.value;
    const errorDiv = document.querySelector("#passwordError");

    if (!validatePassword(password)) {
        passwordEl.classList.add("error");
        errorDiv.textContent = "password kamida bitta 8 ta belgidan iborat bo'lishi lozim!.";
        errorDiv.style.display = "block";
    }else{
        passwordEl.classList.remove("error");
        errorDiv.style.display = "none"
    }
})

retypePasswordEl.addEventListener("input", (e) =>{
    const password = retypePasswordEl.value;
    const errorDiv = document.querySelector("#retypePasswordError");

    if (!validatePassword(password)) {
        retypePasswordEl.classList.add("error");
        errorDiv.textContent = "Retype Password kamida bitta 8 ta belgidan iborat bo'lishi lozim!.";
        errorDiv.style.display = "block";
    }else{
        retypePasswordEl.classList.remove("error");
        errorDiv.style.display = "none"
    }
})