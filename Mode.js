window.addEventListener("load", addListener);


function addListener()
{
	const mode = document.getElementById("mode");
	
	document.getElementById("btnStart") .addEventListener("click", showOptions);
	document.getElementById("backbtn") .addEventListener("click",mainMenu);
	mode.style.visibility = "hidden";
	
}

function showOptions(){
	displayname = document.getElementById("txtdispname").value;
	if(displayname === ""){
		alert("Please enter your name!");
		return;
	}
	localStorage.setItem("fname", displayname);
	const mode = document.getElementById("mode");
	mode.style.visibility = "visible";
	document.getElementById("btnEasy") .addEventListener("click", easyQuiz);
	document.getElementById("btnMedium") .addEventListener("click", midQuiz);
	document.getElementById("btnHard") .addEventListener("click", hardQuiz);
	
}

function easyQuiz(){
	localStorage.setItem("qmode", "easy");
	window.location.href = "EasyQuiz.html";
	document.getElementById("txtdispname").value = "";	
}

function midQuiz(){
	localStorage.setItem("qmode", "mid");
	window.location.href = "MidQuiz.html";
	document.getElementById("txtdispname").value = "";	
}

function hardQuiz(){
	localStorage.setItem("qmode", "hard");
	window.location.href = "HardQuiz.html";
	document.getElementById("txtdispname").value = "";	
}

function mainMenu(){
	window.location.href = "mainscreen3.html";
}