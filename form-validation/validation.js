function validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validatePassword(password){
    return password.length >= 8;
}
function validateName(name) {
    return name.length >= 2 && /^[a-zA-Z\s]+$/.test(name);
}