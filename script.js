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


// Form hanlde  

let formenquery = document.getElementById("myForm");

formenquery.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(formenquery);

    let formdata = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        services: formData.get("services")
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:\+92|92|0)3\d{9}$/;  
  
    let phone = document.getElementById("phone").value.trim();

    if (!phoneRegex.test(phone)) {
        e.preventDefault();
        alert("Invalid Mobile No!");
    }
        else {

        axios.post("http://localhost:8006/api/enquery/insert", formdata)
            .then((res) => {
         alert("Your information is send now to M-A-S Engineering structure.✅");

                console.log(res.data);

                formenquery.reset();
            })
            .catch((err) => {
                console.log(err);
                alert("Error saving data!");
            });

        return true;
        }

});

//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>




// Svg Fornt End loader-----------------------


let progress = 0;

let bar = document.getElementById("progressBar");
let percent = document.getElementById("percent");

let interval = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";
    percent.innerText = progress + "%";

    if(progress >= 100){

        clearInterval(interval);

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

            document.getElementById("web-content").style.display = "block";

        }, 500);

    }

}, 30);