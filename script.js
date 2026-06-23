// Fade section

let sections = document.querySelectorAll(".fade-Section");

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach((section) => {
    observer.observe(section);
});

// Show Nav()

function showNav() 
{

    let navList = document.getElementById("navList");
    navList.classList.toggle("show-Nav")
}


function hideNav() 
{
    
    let navList = document.getElementById("navList");
    navList.classList.remove("show-Nav")
}