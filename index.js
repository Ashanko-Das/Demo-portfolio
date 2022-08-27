let navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click",()=>{
    document.body.classList.toggle("nav-opened");
}
)

let navList = document.querySelectorAll(".nav__link");

navList.forEach((section)=>{
    section.addEventListener("click",()=>{
        document.body.classList.remove("nav-opened");
    })
})