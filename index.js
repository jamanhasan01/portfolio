let openNav=document.querySelector(".navOpen i")
let navbar=document.querySelector(".navbar2")

openNav.addEventListener("click",()=>{
    if(navbar.style.display==="none") {
        navbar.style.display="flex"
    }
    else{
        navbar.style.display="none"
    }
})