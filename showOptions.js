const { easyQuiz, midQuiz, hardQuiz } = require("./Mode");

export function showOptions() {
    name = document.getElementById("txtdispname").value;
    if (name === "") {
        alert("Please enter your name!");
        return;
    }
    localStorage.setItem("fname", name);
    const mode = document.getElementById("mode");
    mode.style.visibility = "visible";
    document.getElementById("btnEasy").addEventListener("click", easyQuiz);
    document.getElementById("btnMedium").addEventListener("click", midQuiz);
    document.getElementById("btnHard").addEventListener("click", hardQuiz);

}
