window.addEventListener("load", checkInput);

function checkInput()
{
    let totalInput = document.getElementById("txttotal");
    let tipInput = document.getElementById("txttip");
	
    let calculateBtn = document.getElementById("btncalculate");
    let createBtn = document.getElementById("btncreatefile");

    // Check that total and tip have valid numbers
    let total = parseFloat(totalInput.value);
    let tip = parseFloat(tipInput.value);

    if (!isNaN(total) && total > 0 && !isNaN(tip) && tip >= 0) // !isNaN means total IS a valid number
    {
        calculateBtn.disabled = false;
    }
    else
    {
        calculateBtn.disabled = true;
        createBtn.disabled = true; // only allow file creation after calculation
    }

    // Run check again whenever user types
    totalInput.addEventListener("input", checkInput);
    tipInput.addEventListener("input", checkInput);
}