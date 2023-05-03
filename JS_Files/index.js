//---/**********/Header Functonality JSCode Start /**************/--- 
const  html=document.getElementById("root"),
      menuicon=document.getElementById("menu"),
      closeicon=document.getElementById("close"),
      menulist=document.querySelector(".navbar-list"),
      navlinks=document.querySelectorAll(".navbar-list .navbar-link"),
      mainElement=document.querySelector(".main");

menuicon.addEventListener("click",(e)=>{
    menulist.classList.add("active");
    html.classList.add("stop-scroll");
    mainElement.classList.add("show");
});
closeicon.addEventListener("click",(e)=>{
   menulist.classList.remove("active");
   html.classList.remove("stop-scroll");
   mainElement.classList.remove("show");
});
console.log(html);

console.log(navlinks);
navlinks.forEach((e)=>{
e.addEventListener("click",(ele)=>{
    html.classList.remove("stop-scroll");
menulist.classList.remove("active");
mainElement.classList.remove("show");
  });
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



// /*********./ Main Section Functionality Start /***********/ */ */
// --------------- Experience Section Start --------------
const boxes=document.querySelectorAll(".experience-card");
console.log(boxes);
window.addEventListener("scroll",checkboxes);
checkboxes();
function checkboxes(){
   boxes.forEach((box)=>{
if(window.pageYOffset>=600){
    // alert();
    box.classList.add("show");
}else{
    box.classList.remove("show");
}
   });
}

// --------------- Experience Section End --------------
// /*********./ Main Section Functionality End /***********/ */ */
