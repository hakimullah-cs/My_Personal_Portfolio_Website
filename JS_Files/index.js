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


// ------------------ COntact Section Start --------------
function validation(){
    // alert("Submitted");
    // For UserNAme
    let UserName_correct_way=/^[A-Za-z]+$/;
    let userName=document.getElementById("name").value;
    if(userName===""){
       document.querySelector(".Nameerror").innerHTML="** Please Enter Your Name here???";
       return false;
    }
    if(userName.length<3){
        document.querySelector(".Nameerror").innerHTML="**Enter Your Name Maximum 3 Character!!";
       return false;
    }
    if(userName.length>20){
        document.querySelector(".Nameerror").innerHTML="**Enter Your Name Min 20 Characters!!";
       return false;
    }
    if(userName.match(UserName_correct_way)){
        true;
    }
    else{
        document.querySelector(".error").innerHTML="** Please Enter only Alphabets!!";
         return false;
    }

    // For Phone Number
    let p_Number=document.getElementById("number").value;
    let No_correct_way=/^[0-9]+$/;
    if(p_Number==""){
        document.querySelector(".Numbererror").innerHTML="** Please Enter Number???";
        return false;
    }
    if((p_Number.length<11) || (p_Number.length>16)){
        document.querySelector(".Numbererror").innerHTML="** Invalid Length!!";
        return false;
    }

    //For Email
    let Email=document.getElementById("email").value;
    if(Email.indexOf('@')<=0){
        document.querySelector(".Emailerror").innerHTML="** Invalid @ Position";
        return false;
    }
    if((Email.charAt(Email.length-4)!='.') && (Email.charAt(Email.length-3)!='.')){
        document.querySelector(".Emailerror").innerHTML="** Invalid Syntyax!!!";
        return false;
    }

    // For Subject
    let subject=document.getElementById("subject").value;
    let Subject_correct_way=/^[A-Za-z]+$/;
    // alert(subject);
    if(subject==""){
        document.querySelector(".Subjecterror").innerHTML="** Please Enter Subject???";
        return false;
    }
    if(subject.length<=5){
        document.querySelector(".Subjecterror").innerHTML="** Invalid Length!!!";
        return false;
    }
    if(subject.match(Subject_correct_way)){
        true;
    }
    else{
        document.querySelector(".Subjecterror").innerHTML="** Only Alphabetical Character Allowed!!!";
        return false;
    }

}

// ------------------ COntact Section End --------------
// /*********./ Main Section Functionality End /***********/ */ */


// ------------ Whatsapp link Showing Functionality
const wicon=document.querySelector(".w-icon");

setTimeout(()=>{
    wicon.classList.add("active");
},8000);



