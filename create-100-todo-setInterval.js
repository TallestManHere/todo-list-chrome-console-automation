var botTodoCount = 0;

var creatorBot = setInterval(function() {
    
        document.querySelector("input.new-todo").value = "todo " + botTodoCount;
        document.querySelector("input.new-todo").dispatchEvent(new Event('change',{
            'bubbles': true
        }))  
            
        botTodoCount++;

        if(botTodoCount>=100){
            clearInterval(creatorBot);
        }
    }, 500)
