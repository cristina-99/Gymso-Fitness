let menuOpen = false;
let menuContainer = document.getElementById("nav-container");
let menuButton = document.getElementById("nav-button");

menuButton.addEventListener("click", toggleMenu);

let initialHeight =menuContainer.style.height ;


function toggleMenu(){
    menuOpen = !menuOpen;
    

    if(menuOpen){
        menuContainer.style.height="400px";
    }else{
        menuContainer.style.height=initialHeight;
    }
}

function resetHeight(){
    if(screen.width> 1024){
        menuOpen=false;
        menuContainer.style.height=initialHeight;
    }
}


window.onresize =resetHeight;