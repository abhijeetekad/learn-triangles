var btnEl=document.querySelector("#btn-el")
var inputEl=document.querySelectorAll(".input-el")
var outputEl=document.querySelector("#output")

function calculateSum(angle1,angle2,angle3){
    sum=angle1+angle2+angle3;
    if(sum===180){
        outputEl.innerText="It is a triangle";
        
    }
    else{
        outputEl.innerText="It is not triangle";
        outputEl.style.display="green"
    }
    
}

function isTriangle(){
    var sum=calculateSum(Number(inputEl[0].value),Number(inputEl[1].value),Number(inputEl[2].value));
    return sum;
}
btnEl.addEventListener("click",isTriangle)