var addedTasks = new Set();
function addRow() {
    var task = document.getElementById('create_task');
    var appending = document.getElementById('add_row');
    console.log(task.value);
    if (task.value.trim() && !addedTasks.has(task.value.trim())) {
        addedTasks.add(task.value);
        var element = document.createElement('div');
        element.innerHTML = "<div class=\"check_box\">\n        <input type=\"checkbox\" id=\"checkbox1\" name=\"checkbox1\" value=\"Bike\">\n        <!-- <label for=\"task1\">Task_1 Completed</label><br> -->\n    </div>\n\n    <div class=\"task\">\n        <!-- <input type=\"text\" name=\"task_input\" id=\"task_input\" placeholder=\"Tasks\"> -->\n        <p id=\"task_input\">".concat(task.value, "</p>\n    </div>\n\n    <div class=\"task_status\">\n        <select name=\"status\" id=\"status\">\n            <option value=\"To Do\">To Do</option>\n            <option value=\"In Progress\">In Progress</option>\n            <option value=\"Completed\">Completed</option>\n        </select>\n    </div>\n    <div id=\"delete\">\n        <!-- <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-trash3\" viewBox=\"0 0 16 16\">\n            <path d=\"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z\"/>\n          </svg> -->\n        <button class=\"btn\" type=\"button\" onclick=\"removeRow(this)\">Remove</button>\n\n    </div>\n    \n    ");
        element.id = 'rows';
        appending === null || appending === void 0 ? void 0 : appending.appendChild(element);
        var select_1 = element.querySelector('.task_status select');
        var checkbox = element.querySelector('.check_box input');
        var p = element.querySelector('.task p');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                p.style.textDecoration = 'line-through';
                select_1.value = 'Completed';
                addedTasks.delete(task.value);
            }
            else {
                p.style.textDecoration = 'none';
                select_1.value = 'To Do';
            }
        });
        select_1.addEventListener("change", function () {
            if (select_1.value === "Completed") {
                checkbox.checked = true;
                p.style.textDecoration = "line-through";
                addedTasks.delete(task.value);
            }
            else if (select_1.value === "To Do" || select_1.value === "In Progress") {
                checkbox.checked = false;
                p.style.textDecoration = "none";
            }
        });
    }
    else {
        alert("Task already exists!");
    }
}
function removeRow(button) {
    var _a;
    var parentEle = (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
    parentEle.remove();
}
function searchTasks() {
    var searchTerm = document.getElementById('search_task').value;
    var tasks = document.querySelectorAll('.task p');
    tasks.forEach(function (task) {
        var _a;
        var parent = (_a = task.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        var content = task.textContent;
        if (content.includes(searchTerm)) {
            parent.style.display = "";
        }
        else {
            parent.style.display = "none";
        }
    });
}
