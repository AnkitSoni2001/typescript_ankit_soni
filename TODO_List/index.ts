const addedTasks = new Set();
function addRow() {
    var task = document.getElementById('create_task') as HTMLInputElement;
    var appending = document.getElementById('add_row');


    console.log(task.value);


    if (task.value.trim() && !addedTasks.has(task.value.trim())) {
        addedTasks.add(task.value);
        var element = document.createElement('div')
        element.innerHTML = `<div class="check_box">
        <input type="checkbox" id="checkbox1" name="checkbox1" value="Bike">
        <!-- <label for="task1">Task_1 Completed</label><br> -->
    </div>

    <div class="task">
        <!-- <input type="text" name="task_input" id="task_input" placeholder="Tasks"> -->
        <p id="task_input">${task.value}</p>
    </div>

    <div class="task_status">
        <select name="status" id="status">
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
    </div>
    <div id="delete">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
          </svg> -->
        <button class="btn" type="button" onclick="removeRow(this)">Remove</button>

    </div>
    
    `
        element.id = 'rows';
        appending?.appendChild(element);

        const select = element.querySelector('.task_status select') as HTMLSelectElement;
        var checkbox = element.querySelector('.check_box input') as HTMLInputElement;
        var p = element.querySelector('.task p') as HTMLParagraphElement;

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                p.style.textDecoration = 'line-through';
                select.value = 'Completed';
                addedTasks.delete(task.value);
            } else {
                p.style.textDecoration = 'none';
                select.value = 'To Do';
            }
        });

        select.addEventListener("change", () => {
            if (select.value === "Completed") {
                checkbox.checked = true; 
                p.style.textDecoration = "line-through"; 
                addedTasks.delete(task.value);
            } else if (select.value === "To Do" || select.value === "In Progress") {
                checkbox.checked = false; 
                p.style.textDecoration = "none"; 
            }
        });

    }
    else {
      
        alert("Task already exists!");
    }

}


function removeRow(button:HTMLButtonElement) {
    var parentEle = button.parentElement?.parentElement as HTMLDivElement;
    parentEle.remove();
}


function searchTasks() {
    var searchTerm = document.getElementById('search_task').value;
    var tasks = document.querySelectorAll('.task p');

    tasks.forEach(task => {
        var parent = task.parentElement?.parentElement as HTMLDivElement
        
        var content = task.textContent;
        if (content.includes(searchTerm)) {
            parent.style.display=""
        } else {
            parent.style.display="none"
        }
    });
}









