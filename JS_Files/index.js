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
// console.log(html);

// console.log(navlinks);
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
// --------------- Resume Section Start --------------
const tabs=document.querySelectorAll(".tab"),
      contents=document.querySelectorAll(".content"),
      progressbar=document.querySelectorAll(".progress-bar");

// console.log(tabs);
tabs.forEach((e, ind)=>{
    e.addEventListener("click",()=>{
        // console.log(e.innerHTML)
        tabs.forEach((tab)=>{
            tab.classList.remove("active");
        });
        e.classList.add("active");
       contents.forEach((content)=>{
       content.classList.remove("active");
       });
       contents[ind].classList.add("active");
    });
});
// console.log(tabs[1].innerHTML);
tabs[1].addEventListener("click",()=>{
progressbar.forEach((ele)=>{
ele.classList.add("active");
});
});

// --------------- Resume Section End --------------



// --------------- Portfolio Section Start --------------
const PortfolioTabs=document.querySelectorAll(".portfolio-tab"),
      projectCardsContainer=document.querySelectorAll(".project-cards-container");
console.log(projectCardsContainer);

PortfolioTabs.forEach((ele,ind)=>{
  ele.addEventListener("click",()=>{
    PortfolioTabs.forEach((tab)=>{
    tab.classList.remove("active");
    });
    ele.classList.add("active");
    projectCardsContainer.forEach((container)=>{
     container.classList.remove("active");
    });
    projectCardsContainer[ind].classList.add("active");
  });
});
// --------------- Portfolio Section End --------------


// ------------------ Certificates Section Start --------------

// ------------------ Certificates Section End --------------
// /*********./ Main Section Functionality End /***********/ */ */


// ------------ Whatsapp link Showing Functionality
const wicon=document.querySelector(".w-icon");

setTimeout(()=>{
    wicon.classList.add("active");
},8000);



