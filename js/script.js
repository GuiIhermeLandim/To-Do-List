// Atribuições Todo

const cardTodo = document.querySelector("#cardTodo-container");
const addTodo = document.querySelector("#addTodo");
const clearTodo = document.querySelector("#clearTodo");
const changeTodo = document.querySelector("#changeTodo");
const editTodo = document.querySelector("#editTodo");
const inputTodo = document.querySelector("#inputTodo");
const taskInputTodo = document.querySelector("#taskTodo-input");
const clearInputTodo = document.querySelector("#clearInputTodo");
const addInputTodo = document.querySelector("#addInputTodo");
const spanTodo = document.querySelector("#spanTodo"); 

// Atribuições Doing

const cardDoing = document.querySelector("#cardDoing-container");
const addDoing = document.querySelector("#addDoing");
const clearDoing = document.querySelector("#clearDoing");
const changeDoing = document.querySelector("#changeDoing");
const editDoing = document.querySelector("#editDoing");
const inputDoing = document.querySelector("#inputDoing");
const taskInputDoing = document.querySelector("#taskDoing-input");
const clearInputDoing = document.querySelector("#clearInputDoing");
const addInputDoing = document.querySelector("#addInputDoing");
const spanDoing = document.querySelector("#spanDoing"); 

// Atribuições Done
const cardDone = document.querySelector("#cardDone-container");
const addDone = document.querySelector("#addDone");
const clearDone = document.querySelector("#clearDone");
const changeDone = document.querySelector("#changeDone");
const editDone = document.querySelector("#editDone");
const inputDone = document.querySelector("#inputDone");
const taskInputDone = document.querySelector("#taskDone-input");
const clearInputDone = document.querySelector("#clearInputDone");
const addInputDone = document.querySelector("#addInputDone");
const spanDone = document.querySelector("#spanDone"); 

 



// Funções Todo

function addTaskCardTodo() {

    if(!inputTodo.value == ""){
        
        const divTask = document.createElement("div");
        divTask.classList.add("task-card");

        const p = document.createElement("p");
        p.innerText = inputTodo.value;

        const cardButtons = document.createElement("div");
        cardButtons.classList.add("card-buttons");

        const clearBtn = document.createElement("button");
        clearBtn.classList.add("clearBtn");
        clearBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'

        const changeBtn = document.createElement("button");
        changeBtn.classList.add("changeBtn");
        changeBtn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i>'

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'


        cardButtons.appendChild(clearBtn);
        cardButtons.appendChild(changeBtn);
        cardButtons.appendChild(editBtn);
        divTask.appendChild(p);
        divTask.appendChild(cardButtons);
        cardTodo.appendChild(divTask);

        spanTodo.classList.add("hidden"); 

    }

    
    taskInputTodo.classList.add("hidden");
    inputTodo.value = ""
    inputTodo.focus();

}

//Funções Doing

function addTaskCardDoing() {

    if(!inputDoing.value == ""){
        
        const divTask = document.createElement("div");
        divTask.classList.add("task-card");

        const p = document.createElement("p");
        p.innerText = inputDoing.value;

        const cardButtons = document.createElement("div");
        cardButtons.classList.add("card-buttons");

        const clearBtn = document.createElement("button");
        clearBtn.classList.add("clearBtn");
        clearBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'

        const changeBtn = document.createElement("button");
        changeBtn.classList.add("changeBtn");
        changeBtn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i>'

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'


        cardButtons.appendChild(clearBtn);
        cardButtons.appendChild(changeBtn);
        cardButtons.appendChild(editBtn);
        divTask.appendChild(p);
        divTask.appendChild(cardButtons);
        cardDoing.appendChild(divTask);

        spanDoing.classList.add("hidden"); 

    }

    
    taskInputDoing.classList.add("hidden");
    inputDoing.value = ""
    inputDoing.focus();

}

//Funções Done

function addTaskCardDone() {

    if(!inputDone.value == ""){
        
        const divTask = document.createElement("div");
        divTask.classList.add("task-card");

        const p = document.createElement("p");
        p.innerText = inputDone.value;

        const cardButtons = document.createElement("div");
        cardButtons.classList.add("card-buttons");

        const clearBtn = document.createElement("button");
        clearBtn.classList.add("clearBtn");
        clearBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>'

        const changeBtn = document.createElement("button");
        changeBtn.classList.add("changeBtn");
        changeBtn.innerHTML = '<i class="fa-solid fa-arrows-left-right"></i>'

        const editBtn = document.createElement("button");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'


        cardButtons.appendChild(clearBtn);
        cardButtons.appendChild(changeBtn);
        cardButtons.appendChild(editBtn);
        divTask.appendChild(p);
        divTask.appendChild(cardButtons);
        cardDone.appendChild(divTask);

        spanDone.classList.add("hidden"); 

    }

    
    taskInputDone.classList.add("hidden");
    inputDone.value = ""
    inputDone.focus();

}

// Eventos Todo

addTodo.addEventListener("click", (e) => {
    taskInputTodo.classList.remove("hidden");

    clearInputTodo.addEventListener("click", (e) => {
        taskInputTodo.classList.add("hidden");
    })
})

addTodo.addEventListener("click", (e) => {
    taskInputTodo.classList.remove("hidden");

    clearInputTodo.addEventListener("click", (e) => {
        taskInputTodo.classList.add("hidden");
    })
})

addInputTodo.addEventListener("click", (e) => {
    addTaskCardTodo();
})

clearInputTodo.addEventListener("click", (e) => {
        taskInputTodo.classList.add("hidden");
})

// Eventos Doing

addDoing.addEventListener("click", (e) => {
    taskInputDoing.classList.remove("hidden");

    clearInputDoing.addEventListener("click", (e) => {
        taskInputDoing.classList.add("hidden");
    })
})

addDoing.addEventListener("click", (e) => {
    taskInputDoing.classList.remove("hidden");

    clearInputDoing.addEventListener("click", (e) => {
        taskInputDoing.classList.add("hidden");
    })
})

addInputDoing.addEventListener("click", (e) => {
    addTaskCardDoing();
})

clearInputDoing.addEventListener("click", (e) => {
        taskInputDoing.classList.add("hidden");
})

// Eventos Done

addDone.addEventListener("click", (e) => {
    taskInputDone.classList.remove("hidden");

    clearInputDone.addEventListener("click", (e) => {
        taskInputDone.classList.add("hidden");
    })
})

addDone.addEventListener("click", (e) => {
    taskInputDone.classList.remove("hidden");

    clearInputDone.addEventListener("click", (e) => {
        taskInputDone.classList.add("hidden");
    })
})

addInputDone.addEventListener("click", (e) => {
    addTaskCardDone();
})

clearInputDone.addEventListener("click", (e) => {
        taskInputDone.classList.add("hidden");
})


document.addEventListener("click", (e) => {

    targetEl = e.target;
    parentEl = targetEl.closest("div");

    if(targetEl.classList == "fa-regular fa-circle-xmark" || targetEl.classList == "clearBtn") {
        parentEl.parentNode.remove();
        targetEl.parentNode.remove();
    }

})


