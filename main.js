//page loader
function loadFun(){
    let load = document.querySelector(".loader-cont");

    load.style.display = "none";
}
//---------------------------------------
let menu = document.querySelector(".menu");
let menuItem = document.querySelector(".nav-item");
let cross = document.getElementById("cross-btn");
let menu_btn = document.getElementById("menu-btn");

function toggle(){
    if(menuItem.classList.contains("active")){
        menuItem.classList.remove("active");
        cross.style.display = "none";
        menu_btn.style.display = "block";
    }else{
        menuItem.classList.add("active");
        menu_btn.style.display = "none";
        cross.style.display = "block";
    }
}

menuItem.addEventListener("click", () =>{
    menuItem.classList.remove("active");
    cross.style.display = "none";
    menu_btn.style.display = "block";
});

