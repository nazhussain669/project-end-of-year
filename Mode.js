window.addEventListener("load", addListener);


function addListener()
{
	const mode = document.getElementById("mode");
	document.getElementById("btnStart") .addEventListener("click", showOptions);
	mode.style.visibility = "hidden";
}

function showOptions(){
	const mode = document.getElementById("mode");
	mode.style.visibility = "visible";
	document.getElementById("btnEasy") .addEventListener("click", easyQuiz);
	document.getElementById("btnMedium") .addEventListener("click", midQuiz);
	document.getElementById("btnHard") .addEventListener("click", hardQuiz);
}

function easyQuiz(){
	localStorage.setItem("qmode", "easy");
	localStorage.setItem("fname", document.getElementById("txtdispname").value);
	window.location.href = "EasyQuiz.html";
	document.getElementById("txtdispname").value = "";	
}

function midQuiz(){
	localStorage.setItem("qmode", "mid");
    localStorage.setItem("fname", document.getElementById("txtdispname").value);
	window.location.href = "MidQuiz.html";
	document.getElementById("txtdispname").value = "";	
}

function hardQuiz(){
	localStorage.setItem("qmode", "hard");
	localStorage.setItem("fname", document.getElementById("txtdispname").value);
	window.location.href = "HardQuiz.html";
	document.getElementById("txtdispname").value = "";	
}