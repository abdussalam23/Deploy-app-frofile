let toggleSpan = document.querySelector(".menu")
let navul = document.querySelector("nav ul")
let a = document.querySelectorAll("nav ul li a")
toggleSpan.addEventListener("click",()=>{
    toggleSpan.classList.toggle("toggle-active");   
    navul.classList.toggle("left")

})
a.forEach(value=>{
    value.addEventListener("click",()=>{
        navul.classList.remove("left")
        toggleSpan.classList.toggle("toggle-active");   

    })

}) 