document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description");

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("hello")
    // creates a list element
    const li = document.createElement("li");

    //grabs the input value: task description
    let descriptionValue = e.target[0].value;
    console.log("got this far", descriptionValue)
    // creates a text node for the description input
    let description = document.createTextNode(descriptionValue);
    // puts description input into the list
    li.appendChild(description);
    //adds the list into the tasks list
    document.getElementById("tasks").appendChild(li);
  })


});
