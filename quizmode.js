window.addEventListener("load", addListener);
let correctAnswers = {};
let score = 0;

const correctAnswersEasy = {1:'d', 2:'b', 3:'c', 4:'a', 5:'b', 6:'a', 7:'b', 8:'b', 9:'c', 10:'d'};
const correctAnswersMid = {1:'a', 2:'b', 3:'b', 4:'b', 5:'c', 6:'c', 7:'d', 8:'c', 9:'b', 10:'a'};
const correctAnswersHard = {1:'b', 2:'b', 3:'a', 4:'b', 5:'c', 6:'d', 7:'d', 8:'a', 9:'b', 10:'a'};

function addListener()
{
	
	const showscore = document.getElementById("showscore");
	for (let i = 1; i <= 10; i++) {
		const showanswer = document.getElementById("showanswer"+i);
		showanswer.style.visibility = "hidden";
	}
	const playername = localStorage.getItem("fname");
	let show = document.getElementById("showname");
	show.innerHTML = playername;
	
	showscore.style.visibility = "hidden";
	document.getElementById("subbtn") .addEventListener("click", getandcheck);
	document.getElementById("btnfile").addEventListener("click", CreateFile);
	document.getElementById("quitbtn") .addEventListener("click", goBack);
	
}


function getandcheck() {
	
	content = "";
    const qmode = localStorage.getItem("qmode");
    const showscore = document.getElementById("showscore");

    if (qmode === "easy") 
		correctAnswers = correctAnswersEasy;
    else if (qmode === "mid") 
		correctAnswers = correctAnswersMid;
    else if (qmode === "hard") 
		correctAnswers = correctAnswersHard;

    

    for (let i = 1; i <= 10; i++) {
        const userAnswer = document.getElementById("answer" + i).value.toLowerCase();
        const showanswer = document.getElementById("showanswer" + i);
        showanswer.style.visibility = "hidden";
		content += i + " - " + userAnswer + " \n";

        if (userAnswer === correctAnswers[i]) {
            score++;
        } else {
            showanswer.style.visibility = "visible";
            showanswer.innerHTML = `Correct answer is ${correctAnswers[i]}`;
        }
    }

    showscore.style.visibility = "visible";
    showscore.innerHTML = `Your score is ${score} / 10`;
}


function goBack(){
	window.location.href = "Profile.html";
}

function CreateFile()
{
	const name = localStorage.getItem("fname");
	filename = document.getElementById("txtfilename").value.trim();

	content =  "Name: " + name + "\n" + "Your Answers: \n" + content + "\n Your Score is " + score + " out of 10.";
	
	filename = filename + ".txt";
	blob = new Blob([content],{type: 'text/plain'});
	url = URL.createObjectURL(blob);
	
	a = document.createElement('a');
	a.href = url;
	a.download = filename;
	

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	
	URL.revokeObjectURL(url);
}