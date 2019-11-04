//function of adding new task
function newElement() {
    // Declare variables
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let descriptionText = document.getElementById('toDoDesciption').value;
    let selectedValue = document.getElementById('selectPriority').value;
    let selectedValue2 = document.getElementById('selectStatusFilter').value;
    let editTitle = document.getElementById('editTitle');
    let editDescription = document.getElementById('editDescription');
    let saveChanges = document.getElementById('saveChanges');
    let titleSpan = document.createElement('SPAN');
    let selectSpan2 = document.createElement('SPAN');
    let selectSpan = document.createElement('SPAN');
    let editButton = document.createElement("button");
    let span = document.createElement('SPAN');
    let description = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    let edit = document.createTextNode('Edit');
    let selectSpanText = document.createTextNode(selectedValue);
    let titleSpanText = document.createTextNode(inputValue);
    let descr = document.createTextNode(descriptionText);
    let selectSpanText2 = document.createTextNode(selectedValue2);


    //checking for empty inputs
    if (inputValue == "" && descriptionText == "") {
        alert("Enter your todo data!");
    } else {
        document.getElementById('list').appendChild(li);
        document.getElementById('toDoDesciption').value = "";
        document.getElementById('toDoEl').value = "";
    }

    //adding classes from selects to li`s 
    li.className = 'li ' + selectedValue + ' ' + selectedValue2;
    span.className = "close";
    editButton.innerText = "Edit";
    editButton.className = "edit" + ' ' + "btn btnEdit btn-success";

    //set several attributes
    function setAttributes(el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }
    setAttributes(editButton, { "data-toggle": "modal", "data-target": "#editModal"});

    //appending items
    selectSpan2.appendChild(selectSpanText2);
    selectSpan.appendChild(selectSpanText);
    titleSpan.appendChild(titleSpanText);
    li.appendChild(titleSpan);
    li.appendChild(descr);
    description.appendChild(descr);
    li.appendChild(description);
    li.appendChild(selectSpan);
    li.appendChild(selectSpan2);
    li.appendChild(editButton);
    span.appendChild(txt);
    li.appendChild(span);

    // edit task 
    let editSelectPrior = document.getElementById('selectPriorityEdit');
    let editStatus = document.getElementById('selectStatusEdit');
    editButton.addEventListener('click', function () {
        editTitle.value = titleSpan.textContent;
        editDescription.value = description.textContent;
        editSelectPrior.value = selectSpan.textContent;
        editStatus.value = selectSpan2.textContent;
        li.className = 'li';

        saveChanges.addEventListener('click', function () {
            if (editTitle.value != 0 && editDescription.value != 0) {
                titleSpan.textContent = editTitle.value;
                description.textContent = editDescription.value;
                selectSpan2.textContent = editStatus.value;
                selectSpan.textContent = editSelectPrior.value;
                li.className = 'li ' + selectSpan2.textContent + ' ' + selectSpan.textContent;
            }
            else {
                alert('Change todo!!!');
            }
        })
    });
}

//filter search function
function myFunction() {
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// remove button
let list = document.querySelector('ul');
list.addEventListener('click', function (el) {
    if (el.target.tagName === "SPAN") {
        let div = el.target.parentNode;
        div.remove();
    }
});

var filter_select_el = document.getElementById('selectPriorityFilter');
var filter_select_el2 = document.getElementById('selectStatusFilter');
var items_el = document.getElementById('list');

//filtering by priority selects
filter_select_el.onchange = function () {
    console.log(this.value);
    var items = items_el.getElementsByClassName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'flex';
            items[i].style.justifyContent = "space-between";
        } else {
            items[i].style.display = 'none';
        }
    }
};


//filtering by status selects
filter_select_el2.onchange = function () {
    console.log(this.value);
    var items = items_el.getElementsByClassName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains(this.value)) {
            items[i].style.display = 'flex';
            items[i].style.justifyContent = "space-between";
        } else {
            items[i].style.display = 'none';
        }
    }
};