let horizontal = document.getElementById("horizontal");
let actionIcon = document.getElementById("actionIcon")
let vertical = document.getElementById("vertical")
let faqA = document.getElementById("faqA")
let flag = 0;
actionIcon.addEventListener("click", function(){

    console.log("click on logo")
    if(flag==0){

        horizontal.style.transform = " rotate(135deg)" ;
        vertical.style.transform = " rotate(50deg)" ;
        // horizontal.style.backgroundColor = "red" ;
        flag = 1;
        faqA.classList.add("hide")
    }else{
        horizontal.style.transform = " rotate(90deg)" 
        vertical.style.transform = " rotate(0)" 
        flag=0
    }
})   