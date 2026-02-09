let input = document.getElementById("taskInput");
let btn = document.getElementById("addBtn");
let list = document.getElementById("list");

btn.onclick = function() {
    let li = document.createElement("li");
    
    let leftSide = document.createElement("div");
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function() {
        li.classList.toggle("done");
    };

    let text = document.createElement("span");
    text.textContent = input.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function() {
        li.remove();
    };

    leftSide.appendChild(checkbox);
    leftSide.appendChild(text);
    
    li.appendChild(leftSide);
    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
};