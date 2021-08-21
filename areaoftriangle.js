var inputEl=document.querySelectorAll(".input-el");
var btnEl=document.querySelector("#btn");
var outputEl=document.querySelector("#output");

function calculateArea(a,b){
    var answer=((a*b)/2);
    return answer;
}

function area(){
    const answer=calculateArea(Number(inputEl[0].value),Number(inputEl[1].value));
    outputEl.innerText="Area of Triangle is : "+answer;
    outputEl.style.color="blue";
}


btnEl.addEventListener("click",area)
