window.addEventListener("load", addListener);

function addListener() {
  
  document.getElementById("btnhide").addEventListener("click", hideDate);
  document.getElementById("btnshow").addEventListener("click", showDate);

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
  document.getElementById('clock').innerHTML =  h + ":" + m + meridien;
  setTimeout(startTime, 1000);
  
  
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
  let curWeekDay = days[today.getDay()];
  let curDay = today.getDate();
  let curMonth = months[today.getMonth()];
  let curYear = today.getFullYear();
  let date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
      document.getElementById("date").innerHTML = date;
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
