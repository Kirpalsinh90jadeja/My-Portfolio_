// typing animation
var typed = new Typed (".typing",{
    strings:["Web Developer","Web Disigner"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


// Aside  

const nav = document.querySelector(".nav"),
 navList = nav.querySelectorAll("li"),
 totalNavlist = navList.length,
 allSection = document.querySelectorAll(".section"),
 totalSection = allSection.length;
 for(let i=0;i<totalNavlist;i++){
    
    const a = navList[i].querySelector("a");
    a.addEventListener('click',function(){
        for(let i=0;i<totalSection;i++){
            allSection[i].classList.remove("backsection");
        }
        for(let j=0;j<totalNavlist;j++){
             
            if(navList[j].querySelector("a").classList.contains("active")){//it work initially because home has already contain class='active' in html line:38

               allSection[j].classList.add("backsection");
                
                
        }
        navList[j].querySelector("a").classList.remove("active"); 
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth<1260){
            asideSectionTogglerbtn();
        }
    })
 }
 function showSection(element){
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.remove("active");
    }
    const target =element.getAttribute("href").split("#")[1];
   document.querySelector("#" + target).classList.add("active");
   
 }

//  toggle button
function updateNav(element){
    for (let i=0;i<totalNavlist;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target =element.getAttribute("href").split("#")[1];
if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
    navList[i].querySelector("a").classList.add("active");
}
    

    }
    
}
document.querySelector(".hire-me").addEventListener('click',function(){
    showSection(this);
    updateNav(this);
})

const navTogglebtn = document.querySelector(".nav-toggler"),
 aside = document.querySelector(".aside");
 navTogglebtn.addEventListener('click',()=>{
    asideSectionTogglerbtn() 
})

function asideSectionTogglerbtn(){
    aside.classList.toggle("open");
    navTogglebtn.classList.toggle("open");
    for(let i=0;i<totalSection;i++){
        allSection[i].classList.toggle("open")
    }
}
