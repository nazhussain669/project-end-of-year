window.addEventListener("load", getInfo);

function getInfo() {
    let username = localStorage.getItem("user");
    let password = localStorage.getItem("pwrd");

    // If no info, send back to login
    if (!username || !password) 
	{
        alert("No login info found! Redirecting to login page.");
        window.location.href = "mainscreen1.html";
        return;
    }

    let userLogin = "Username: " + username + " | Password: " + password;
    document.getElementById("lbluserlogin").textContent = userLogin;
}
