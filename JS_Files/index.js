//---/**********/Header Functonality JSCode Start /**************/--- 
const menuicon=document.getElementById("menu"),
      closeicon=document.getElementById("close"),
      menulist=document.querySelector(".navbar-list"),
      body=document.getElementById("body");
menuicon.addEventListener("click",(e)=>{
    menulist.classList.add("active");
});
closeicon.addEventListener("click",(e)=>{
   menulist.classList.remove("active");
});

// ******* Sticky Header Start ***********
let header=document.querySelector(".header");
window.addEventListener("scroll",(e)=>{
    if(window.pageYOffset>=160){
header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
});

// ******* Sticky Header End ***********
//---/**********/Header Functonality JSCode End /**************/--- */
