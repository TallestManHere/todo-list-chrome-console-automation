function clickItem(item) {
    item.click();
}

function toggleAll() {
    document.querySelector(".toggle-all-label").click()
}

function selectItem(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
}

function deleteItem(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
}

function clearCompleted() {
    document.querySelector("button.clear-completed").click();
}

function filterCompleted(){
    location.hash ="/completed";
}

function filterAll(){
    location.hash ="/";
}

function filterActive(){
    location.hash = "/active";
}

function createToDo(name){
    document.querySelector("input.new-todo").value = "hello";
    document.querySelector("input.new-todo").dispatchEvent(new Event('change',{'bubbles': true}));
}

function ammendToDo(x, amendedValue){
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") > div > label").dispatchEvent(new Event('dbclick',{'bubbles':true})); //this double clicks on the element
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").value="ammended"; // change value
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") .edit").dispatchEvent(new Event('blur');
}