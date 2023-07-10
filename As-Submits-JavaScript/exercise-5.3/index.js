function passwordValidation(password) {
    let pass ;
    pass = password.length > 7 ? "Strong" : "Weak"
    return console.log(pass);
}

passwordValidation("randomly1");
passwordValidation("randm2");

function advancedPasswordValidator(password) {
    let pass ;
    pass = password.length > 7 && /[A-Z]/.test(password) ? "Very Strong":
    password.length > 7 ? "Strong" : 'Weak' ;
    

return console.log(pass);
}

advancedPasswordValidator('wekpass')
advancedPasswordValidator('strongpass')
advancedPasswordValidator('Verystrongpass')

