window.addEventListener("load", addListeners);

let tasks = []; // Array to store task objects { name, day }

function addListeners()
{
    document.getElementById("btnAdd").addEventListener("click", addTask);
    document.getElementById("btnComplete").addEventListener("click", completeTask);
    document.getElementById("btnDelete").addEventListener("click", deleteTask);
    document.getElementById("btnMainMenu").addEventListener("click", Main);

    // hide the table
    document.getElementById("tableDiv").style.visibility = "hidden";
}

// Add task
function addTask()
{
    let name = document.getElementById("txtTask").value.trim();
    let day = document.getElementById("daySelect").value;

    if (name == "")
    {
        alert("Please enter a task.");
        return;
    }

    tasks.push({ name: name, day: day }); // Add task object to array

    updateTaskList();
    updateTable();

	// Clear input and focus back on task box
    document.getElementById("txtTask").value = "";
    document.getElementById("txtTask").focus();
}

// Update textarea showing tasks
function updateTaskList()
{
    let list = document.getElementById("taskList");
    list.value = ""; // Clear previous list

    for (let i = 0; i < tasks.length; i++) // Loop through tasks array
    {
        list.value += (i + 1) + ". " + tasks[i].name + " (" + tasks[i].day + ")\n"; // Display numbered list
    }
}

// Complete task
function completeTask()
{
    let num = parseInt(document.getElementById("taskNumber").value) - 1; //Converts that string into a number

    if (isNaN(num) || num < 0 || num >= tasks.length)
    {
        alert("Enter a valid task number to complete.");
        return;
    }

    alert("Task completed: " + tasks[num].name);
}

// Delete task
function deleteTask()
{
    let num = parseInt(document.getElementById("taskNumber").value) - 1;

    if (isNaN(num) || num < 0 || num >= tasks.length)
    {
        alert("Enter a valid task number to delete.");
        return;
    }

    let deleted = tasks[num].name; // Store deleted task name
    tasks.splice(num, 1); // Remove task from array

    updateTaskList();
    updateTable();

    alert("Task deleted: " + deleted);
}

// Update table
function updateTable()
{
    document.getElementById("tableDiv").style.visibility = "visible";

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // Array of day names

    // Clear table cells
    for (let i = 0; i < days.length; i++)
    {
        document.getElementById("td" + days[i]).textContent = "";
    }

    // Fill table with tasks
    for (let i = 0; i < tasks.length; i++)
    {
        let cell = document.getElementById("td" + tasks[i].day);
        if (cell.textContent == "")
        {
            cell.textContent = tasks[i].name;
        }
        else
        {
            cell.textContent += ", " + tasks[i].name;
        }
    }
}

function Main()
{
	window.location.href = "mainscreen1.html"; // Go to main menu
}

