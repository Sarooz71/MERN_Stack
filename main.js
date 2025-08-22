// console.log("Hello World")

const title = document.getElementById("title"); 
title.innerHTML = "Hello Ram. Its me your friend Hari";
title.style.color = "red";
title.style.backgroundColor = "#ddd";
title.style.border = "1px solid black";

const paragraph = document.querySelector("p");
paragraph.innerText = "This is country side vibe!!";


//Event Listener:
const button = document.querySelector("#btn");
button.addEventListener("click" , ()=>{
    console.log("Button is clicked!!");
    button.innerText = "Clicked";
});

const buttonOne = document.querySelector("#btn");
button.addEventListener("dblclick" , ()=>{
    console.log("Button is Double clicked!!");
    button.innerText = "Clicked";
});


// Hover 
button.addEventListener("mouseover", ()=>{
    button.style.color = "red";
});

button.addEventListener("mouseleave", ()=>{
    button.style.color = "black";
});

// Writing through JS
const listItems = ["Ram", "Sam", "Hari", "Sita"];
const listElement = document.getElementById("list");

const listItem = document.createElement("li");
listItem.textContent = "Apple";
listElement.appendChild(listItem);
