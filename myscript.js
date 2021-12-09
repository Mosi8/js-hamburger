const element = document.querySelector(".hamburger-menu");


// aprire menu 
show = document.querySelector(".fa-bars");
show.addEventListener('click', 
function showMenu() {
        element.className = element.classList + " active";
} 
);


// chiudere menu 
noShow = document.querySelector(".close");
noShow.addEventListener('click', 
function noShowMenu() {
        element.className = "hamburger-menu";
} 
);