window.addEventListener("load", addListener);

let currentTime = "";
let currentDate = "";

function addListener() {
  
  document.getElementById("btnhide").addEventListener("click", hideDate);
  document.getElementById("btnshow").addEventListener("click", showDate);
  document.getElementById("btnfile").addEventListener("click", CreateFile);

  document.getElementById("date").style.visibility = "hidden";

  // Start clock
  startTime();
}
function startTime() {
  const today = new Date();
  let h = today.getHours();
  const meridien = h >= 12 ? "pm": "am";
  h = h % 12 || 12;
  let m = today.getMinutes();
  m = checkTime(m);
  currentTime = h + ":" + m + meridien;
  document.getElementById('clock').innerHTML = currentTime;
  setTimeout(startTime, 1000);
  
  
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  currentDate = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = currentDate;
}

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
