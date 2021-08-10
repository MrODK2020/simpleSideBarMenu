const sideBar=document.getElementById("sideBar");
const headerNav = document.querySelector(".header");
const btnCls = document.getElementById("btnClose");
const closebtn = document.querySelector(".closeBtn");


function sideMenu (){
    sideBar.addEventListener("click", function(e){
        e.preventDefault()
        headerNav.style.display="block";
        sideBar.style.display="none"

    })
}
sideMenu();

function buttonClose(){
    btnCls.addEventListener("click", function(e){
        e.preventDefault()
        headerNav.style.display="none"
        sideBar.style.display="block"
    })
}
buttonClose();