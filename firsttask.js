const toggleBtn = document.querySelector(".toggle");
const body=document.body;

function toggleTheme(){

    if(body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        toggleBtn.textContent="dark-mode";
    }
    else {
        body.classList.add("dark-mode");
        toggleBtn.textContent="Light-mode";
    }
    
}addEventListener("click",toggleTheme);