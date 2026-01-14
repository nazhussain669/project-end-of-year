window.addEventListener("load", addListeners);

function addListeners()
{
    document.getElementById("btncalculate").addEventListener("click", calculateTip);
    document.getElementById("btncreatefile").addEventListener("click", createFile);
	document.getElementById("btnnew").addEventListener("click", newCalculation);
	document.getElementById("btnmainmenu").addEventListener("click", goToMainMenu);
}

let lastResult = ""; // store last calculation for file creation

function calculateTip()
{
    let totalInput = document.getElementById("txttotal");
    let tipInput = document.getElementById("txttip");
    let result = document.getElementById("result"); //gets the id result and stores it in a variable
    let createBtn = document.getElementById("btncreatefile");

    let total = parseFloat(totalInput.value);
    let tipPercent = parseFloat(tipInput.value);

    if (isNaN(total) || total <= 0) // isNaN checks if a value is NOT a number
    {
        alert("Please enter a valid total price.");
        totalInput.focus();
        return;
    }

    if (isNaN(tipPercent) || tipPercent < 0)
    {
        alert("Please enter a valid tip percentage.");
        tipInput.focus();
        return;
    }

    let tipAmount = total * (tipPercent / 100);
    let finalTotal = total + tipAmount;

    // Display result
    result.textContent = "Tip: $" + tipAmount.toFixed(2) + " | Total with Tip: $" + finalTotal.toFixed(2); //fixed to two decimal places

    // Store result for file creation
    lastResult = "Total Price: $" + total.toFixed(2) + "\n" +
                 "Tip Percentage: " + tipPercent.toFixed(2) + "%\n" +
                 "Tip Amount: $" + tipAmount.toFixed(2) + "\n" +
                 "Total with Tip: $" + finalTotal.toFixed(2);

    // Enable the Create File button
    createBtn.disabled = false;
}

function newCalculation()
{
    document.getElementById("txttotal").value = "";
    document.getElementById("txttip").value = "";
	
    document.getElementById("txtfilename").value = "";
    document.getElementById("result").textContent = "";

    document.getElementById("btncalculate").disabled = true;
    document.getElementById("btncreatefile").disabled = true;

    lastResult = ""; // clear stored result
	
	// Put the cursor back in the total price input
	document.getElementById("txttotal").focus();
}

function createFile()
{
    if (lastResult.length == 0)
    {
        alert("No calculation to save. Please calculate the tip first.");
        return;
    }

	let filenameInput = document.getElementById("txtfilename");
	let filename = filenameInput.value;
	
	if (filename.length == 0)
	{
	    alert("Please enter a file name.");
	    filenameInput.focus();
	    return;
	}
	
	filename = filename + ".txt";
	
    let blob = new Blob([lastResult], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}

function goToMainMenu()
{
    // goes back to the mainscreen
    window.location.href = "mainscreen3.html";
}