let menu = document.querySelector(".menu");
let menuItem = document.querySelector(".nav-item");

function toggle(){
    // console.log("menu")
    if(menuItem.classList.contains("active")){
        menuItem.classList.remove("active");
    }else{
        menuItem.classList.add("active");
    }
}

menuItem.addEventListener("click", () =>{
    menuItem.classList.remove("active");
});