document.querySelector("#contactform").onsubmit = function(e) {
    e.preventDefault();
    const fullname = document.getElementById("FULLNAME").value;
    const email = document.getElementById("EMAIL").value;
    const subject = document.getElementById("SUBJECT").value;
    const message = document.getElementById("MESSAGE").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (fullname === "" || email === "") {
        alert("Please enter all fields");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    } else if (message.length < 5) {
        alert("Minimum length for message is 5 characters");
    } else {
        localStorage.setItem("contact_name", fullname);
        localStorage.setItem("contact_email", email);
        localStorage.setItem("contact_subject", subject);
        localStorage.setItem("contact_message", message);
        alert("Your message has been sent successfully!");
        this.reset();
    }
}