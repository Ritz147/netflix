const lang=document.querySelector(".drop-btn");
const selectlang=document.querySelector(".dropdown-content"); 
const option2=document.querySelector(".option2");
const option1=document.querySelector(".option1");
function defaultlang(){
    if(selectlang.style.display==="block")
    {
        selectlang.style.display="none";  
    }
    else{
        selectlang.style.display="block";  
        option1.style.backgroundColor="gray";  
     }
}
option2.onmouseover=function(){
     option1.style.backgroundColor="white";
     option2.style.backgroundColor="gray";
}
option1.onmouseover=function(){
    option2.style.backgroundColor="white"; 
    option1.style.backgroundColor="gray";
}
lang.addEventListener("click",()=>{
    defaultlang();
});
const lang2=document.querySelectorAll(".drop-btn")[1];
const selectlang2=document.querySelectorAll(".dropdown-content")[1]; 
const option22=document.querySelectorAll(".option2")[1];
const option12=document.querySelectorAll(".option1")[1];
function defaultlang2(){
    if(selectlang2.style.display==="block")
    {
        selectlang2.style.display="none";  
    }
    else{
        selectlang2.style.display="block";  
        option12.style.backgroundColor="gray";  
     }
}
option22.onmouseover=function(){
     option12.style.backgroundColor="white";
     option22.style.backgroundColor="gray";
}
option12.onmouseover=function(){
    option22.style.backgroundColor="white"; 
    option12.style.backgroundColor="gray";
}
lang2.addEventListener("click",()=>{
    defaultlang2();
});


