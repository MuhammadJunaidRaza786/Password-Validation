var password = prompt("Enter the password");
console.log(password)

if (password.indexOf(" ") === -1) {
    if (password.length >= 8) {
        console.log("Signed In")
    } else {
        console.log("Paaword Should atleast 8 Character")
    }
    
} else {
    console.log("Password does not contain space")
}