 var currentDayEl = document.querySelector("#currentDay");

 setInterval(function(){
     currentDayEl.textContent = moment().format("dddd MMM Do YYYY");
 });

// let descriptionText = document.querySelector(".description");



// function pick(){
//     localStorage.setItem("description", descriptionText.value);
//     console.log(descriptionText)
//     document.getElementById("description").addEventListener("click", pick)
// }
//     descriptionText.value = localStorage.getItem("description");


// document.getElementById("saveBtn").addEventListener("click", function() {
//     const addMessage = (event)=> {
//     event.preventDefault();
//     let Message = {
//         Id: saveBtn.now(),
//         saveBtn: document.getElementById("saveBtn").value;
//     }
//     Messages.push(Message);
//     document.querySelector("form").reset;
//     console.log("saveBtn",saveBtn);
//     }
// });

// const storageInput = document.querySelector(".storage");
// const text = document.querySelector(".Text");
// const saveBtn = document.querySelector("#saveBtn");

// let textContent = "";


// storageInput.addEventListener("input", letter => {

//     text.innerHTML = letter.target.value
// })

// const saveToLocalStorage = () => {
//     localStorage.setItem("textInput", text.textContent)
// }
// saveBtn.addEventListener("click", saveToLocalStorage)