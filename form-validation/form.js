const nameEl = document.querySelector("#userName");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const retypePasswordEl = document.querySelector("#retypePassword");
const formEl = document.querySelector("#form");
const msgNameEl = document.querySelector("#msgName");

nameEl.addEventListener("input", (e)=>{
    const name = nameEl.value;
    const errorDivName = document.querySelector("#userNameError")

    if (!validateName(name)) {
        nameEl.classList.add("error");
        errorDivName.textContent = "Ism kamida 3 ta harf bo'lishi kerak!";
        errorDivName.style.display = "block";
    }else{
        nameEl.classList.remove("error");
        errorDivName.style.display = "none";
    }
});

emailEl.addEventListener("input", (e)=>{
    const email = emailEl.value;
    const errorDivEmail = document.querySelector("#emailError");

    if (!validateEmail(email)) {
        emailEl.classList.add("error");
        errorDivEmail.textContent = "Emailda kamida bitta @, bitta . orasida harf bo'lishi lozim!.";
        errorDivEmail.style.display = "block";
    }else{
        emailEl.classList.remove("error");
        errorDivEmail.style.display = "none";
    }
});

passwordEl.addEventListener("input", (e)=>{
    const password = passwordEl.value;
    const errorDivPassword = document.querySelector("#passwordError");

    if (!validatePassword(password)) {
        passwordEl.classList.add("error");
        errorDivPassword.textContent = "password kamida bitta 8 ta belgidan iborat bo'lishi lozim!.";
        errorDivPassword.style.display = "block";
    }else{
        passwordEl.classList.remove("error");
        errorDivPassword.style.display = "none"
    }
});
retypePasswordEl.addEventListener("input",(e)=>{
    const retypePassword = retypePasswordEl.value;
    const errorDivretypePassword = document.querySelector("#retypePasswordError");

    if (!validatePassword(retypePassword)) {
        retypePasswordEl.classList.add("error");
        errorDivretypePassword.textContent = "Retype Password kamida bitta 8 ta belgidan iborat bo'lishi va tepadagi password bilan bir xil bo'lishi lozim!.";
        errorDivretypePassword.style.display = "block";
    }else{
        retypePasswordEl.classList.remove("error");
        errorDivretypePassword.style.display = "none"
    }

})

formEl.addEventListener("submit", (e)=> {
    e.preventDefault();
    const name = nameEl.value;
    const email = emailEl.value;
    const password = passwordEl.value;
    const retypePassword = retypePasswordEl.value;

    const errorDivName = document.querySelector("#userNameError")

    if (!validateName(name)) {
        nameEl.classList.add("error");
        errorDivName.textContent = "Ism kamida 3 ta harf bo'lishi kerak!";
        errorDivName.style.display = "block";
    }else{
        nameEl.classList.remove("error");
        errorDivName.style.display = "none";
    }

    const errorDivEmail = document.querySelector("#emailError");

    if (!validateEmail(email)) {
        emailEl.classList.add("error");
        errorDivEmail.textContent = "Emailda kamida bitta @, bitta . orasida harf bo'lishi lozim!.";
        errorDivEmail.style.display = "block";
    }else{
        emailEl.classList.remove("error");
        errorDivEmail.style.display = "none";
    }

    const errorDivPassword = document.querySelector("#passwordError");

    if (!validatePassword(password)) {
        passwordEl.classList.add("error");
        errorDivPassword.textContent = "password kamida bitta 8 ta belgidan iborat bo'lishi lozim!.";
        errorDivPassword.style.display = "block";
    }else{
        passwordEl.classList.remove("error");
        errorDivPassword.style.display = "none"
    }

    const errorDivretypePassword = document.querySelector("#retypePasswordError");

    if (!validatePassword(retypePassword) || retypePassword !== password) {
        retypePasswordEl.classList.add("error");
        errorDivretypePassword.textContent = "Retype Password kamida bitta 8 ta belgidan iborat bo'lishi va tepadagi password bilan bir xil bo'lishi lozim!.";
        errorDivretypePassword.style.display = "block";
    }else{
        retypePasswordEl.classList.remove("error");
        errorDivretypePassword.style.display = "none"
    }
    if(validateName(name) && validateEmail(email) && validatePassword(password) && password === retypePassword){
    window.location.href = "form2.html"; 
    msgNameEl.value = nameEl.value;
    }
})