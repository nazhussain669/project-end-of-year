window.addEventListener("load",CheckInput);

function CheckInput()
{
	
		
	inputfilename = document.getElementById("txtfilename");
	submitfilename = document.getElementById("btnfile");


	yesnowords = inputfilename.value.trim();

	if (yesnowords.length > 0)
	{
		submitfilename.disabled = false;
	}
	else
	{
		submitfilename.disabled = true;
	}
	inputfilename.addEventListener("input",CheckInput);

}