document.getElementById("my-form").onsubmit = function(e){
const fullName = document.getElementById("full-name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
const agree = document.getElementById("terms").checked;
    if (fullName === "" || email === "" || password === "" || confirmPassword === "") { 
        alert("Please fill in all fields");
        e.preventDefault();
        return;
    }
    if (password.length < 6) { 
        alert("Password must be at least 6 characters");
        e.preventDefault();
        return;
    }
    if (password !== confirmPassword){ 
        alert("Passwords do not match"); 
        e.preventDefault();
        return;
    }
    if (!agree) {
        alert("You must agree to the terms");
        e.preventDefault();
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email");
    e.preventDefault();
    return;
}
if (fullName.length < 3) {
    alert("Name must be at least 3 characters");
    e.preventDefault();
    return;
}
};

