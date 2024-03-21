var autoTodo = new function() {

    this.clickItem = function(item) {
        item.click();
    }

    this.toggleAll = function() {
        document.querySelector(".toggle-all-label").click()
    }

    this.selectItem = function(x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click()
    }

    this.deleteItem = function(x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") button.destroy").click()
    }

    this.filterCompleted = function() {
        location.hash = "/completed";
    }

    this.filterAll = function() {
        location.hash = "/";
    }

    this.filterActive = function() {
        location.hash = "/active";
    }

    this.createToDo = function(name) {
        document.querySelector("input.new-todo").value = name;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }));
    }

}
