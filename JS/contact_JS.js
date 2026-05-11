document.querySelector("form").onsubmit = function(e) {
    //js
    const fullname = document.getElementById("FULLNAME").value;
    const email = document.getElementById("EMAIL").value;
    const message = document.getElementById("MESSAGE").value;
    e.preventDefault();
    if (fullname === "" || email === "") {
        alert("Please enter all fields");
    }  
    if(message.length < 5) {
        alert("Minimum length is 5");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
    }
}