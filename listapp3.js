window.addEventListener("load", addFileListener);

function addFileListener()
{
    document.getElementById("btnCreateFile").addEventListener("click", createFile);
}

function createFile()
{
    if (tasks.length == 0) // Check if there are tasks to save
    {
        alert("No tasks to save.");
        return;
    }

    let fileName = document.getElementById("txtFileName").value.trim();

    if (fileName == "")
    {
        alert("Please enter a file name.");
        document.getElementById("txtFileName").focus();
        return;
    }

    let content = "Weekly To-Do List\n\n"; //header for the file

	// Add tasks to file content
    for (let i = 0; i < tasks.length; i++)
    {
        content += (i + 1) + ". " + tasks[i].name + " - " + tasks[i].day + "\n";
    }

    let blob = new Blob([content], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = fileName + ".txt";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
}
