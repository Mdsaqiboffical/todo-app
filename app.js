let userInput = document.getElementById("user-input");
let ul = document.getElementById("ul");
let addButn = document.getElementById("add-butn");
let delButn = document.getElementById("del-butn");

addButn.addEventListener("click", function () {
    if (userInput.value === "") {
        alert("First Enter a Task");
    } else {
        // LI 
        let li = document.createElement("li");
        li.innerHTML = userInput.value;
        ul.appendChild(li);
        userInput.value = "";

        // EDIT BUTN
        let editButn = document.createElement("button");
        editButn.innerHTML = "<i class='fa-regular fa-pen-to-square'></i>";
        ul.appendChild(editButn);
        editButn.addEventListener("click", function () {

            editButn.style.display = "none";

                let changeInput = document.createElement("input");
                li.appendChild(changeInput);
                
                let changeInputButn = document.createElement("Button");
                changeInputButn.innerHTML = "<i class='fa-solid fa-arrows-rotate'></i>";
                li.appendChild(changeInputButn);
    
                changeInputButn.addEventListener("click", function(){
                    li.innerHTML = changeInput.value;

                    editButn.style.display = "inline"
                });

            // li.innerHTML = changeInput.value    
            // let changeValue = prompt("Change the value"); 
            // li.innerHTML = changeValue;
        }) ;
    
        // DEL BUTN
        let onceDelButn = document.createElement("button");
        onceDelButn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
        ul.appendChild(onceDelButn);
        onceDelButn.addEventListener("click", function () {
            ul.removeChild(li);
            onceDelButn.classList.toggle("hide")
            editButn.classList.toggle("hide")
        });
    };
});

// ALL DEL BUTN
delButn.addEventListener("click", function () {
    ul.innerHTML = "";
});