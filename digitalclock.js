window.addEventListener("load", addListener);

let currentTime = "";
let currentDate = "";

function addListener() {
  
  document.getElementById("btnhide").addEventListener("click", hideDate);
  document.getElementById("btnshow").addEventListener("click", showDate);
  document.getElementById("btnfile").addEventListener("click", CreateFile);
  document.getElementById("backbtn").addEventListener("click", mainMenu);
  
  document.getElementById("date").style.visibility = "hidden";

  // Start clock
  startTime();
}
//Calculates current time with hours and minutes 
function startTime() {
  const today = new Date();
  let h = today.getHours();
  // Changes am-pm in relation to 12 hours
  const meridien = h >= 12 ? "pm": "am";
  h = h % 12 || 12;
  let m = today.getMinutes();
  m = checkTime(m);
  currentTime = h + ":" + m + meridien;
  document.getElementById('clock').innerHTML = currentTime;
  setTimeout(startTime, 1000);
  
  //Date is retrieved 
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  currentDate = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = currentDate;
}

//Places "0"s on clock display when time is less than the value 10
function checkTime(i) {
  if (i < 10) {i = "0" + i}; 
  return i;
}


function showDate(){
	document.getElementById("date").style.visibility = "visible";
}


function hideDate(){
	document.getElementById("date").style.visibility = "hidden";
}


function CreateFile()
{

	filename = document.getElementById("txtfilename").value.trim();

	content =  "Current Time: " + currentTime + "\n" + currentDate;
	
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

function mainMenu(){
	window.location.href = "mainscreen3.html";
}
