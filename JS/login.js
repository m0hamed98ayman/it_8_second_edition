document.querySelector("form").onsubmit = function(e){
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user == "" || pass == ""){
        alert("please fill all fields");
    }
    else if(pass.length < 6){
        alert("the minimum number of char or num is 6");
    }else{
        // استخدام اسم الصفحة قبل المفتاح عشان ما يتلخبطش مع باقي الصفحات
        localStorage.setItem("login_username", user);
        
        alert("تم تسجيل الدخول بنجاح");
        window.location.href = "../Pages/index.html";
    }
}