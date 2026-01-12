window.addEventListener("load", addListener);

function addListener() 
{
    document.getElementById("btnlogin").addEventListener("click", useLocal);
}

function useLocal() 
{
    // Get input values
    let username = document.getElementById("txtusername").value.trim();
    let password = document.getElementById("txtpassword").value.trim();

    // Check if inputs are not empty
    if (username == "" || password == "") 
	{
        alert("Please enter both username and password.");
        return;
    }

    // Store in localStorage
    localStorage.setItem("user", username);
    localStorage.setItem("pwrd", password);

    // Redirect to main screen
    window.location.href = "mainscreen3.html";
}
