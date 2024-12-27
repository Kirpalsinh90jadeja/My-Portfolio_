console.log("Hello");
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");


    window.addEventListener('scroll',()=>{
        // console.log("working");
        document.querySelector(".style-switcher").classList.remove("open");
    })
    


styleSwitcherToggle.addEventListener('click', ()=>{
    document.querySelector(".style-switcher").classList.toggle("open")
})




// theme color change
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActivestyle(color){
    alternateStyle.forEach((style) => {
     if (color ===style.getAttribute("title") ) {
          style.removeAttribute("disabled")
     } else {
        style.setAttribute("disabled","true")
    }
    document.querySelector(".style-switcher").classList.remove("open");
    })
}

// theme dark and light change
const daynight = document.querySelector(".day-night");
daynight.addEventListener('click',()=>{
    daynight.querySelector("i").classList.toggle("fa-sun")
    daynight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})
window.addEventListener('load',()=>{
    if (document.body.classList.contains("dark")) {
        daynight.querySelector("i").classList.add("fa-sun")
    } else {
        daynight.querySelector("i").classList.add("fa-moon")
        
    }
})
// HIDE style while scrolling

