const element = document.querySelector(".hamburger-menu");


// aprire menu 
const show = document.querySelector(".fa-bars");

show.addEventListener('click', 
function showMenu() {
        element.className = element.classList + " active";
} 
);


// chiudere menu 
const noShow = document.querySelector(".close");

noShow.addEventListener('click', 
function noShowMenu() {
        element.className = "hamburger-menu";
} 
);