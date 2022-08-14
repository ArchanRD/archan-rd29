let menu = document.querySelector(".menu");
let menuItem = document.querySelector(".nav-item");

function toggle(){
    if(menuItem.classList.contains("active")){
        menuItem.classList.remove("active");
    }else{
        menuItem.classList.add("active");
    }
}