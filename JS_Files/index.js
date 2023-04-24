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

//---/**********/Header Functonality JSCode End /**************/--- */
