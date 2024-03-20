let menuContainer = document.getElementById("menuContainer");
let navContainer = document.getElementById("navContainer");


menuContainer.onclick = function(){
    if (navContainer.style.display === "block") {
        navContainer.style.display = "none";
    } else {
       navContainer.style.display = "block";
   
    }
    
}

