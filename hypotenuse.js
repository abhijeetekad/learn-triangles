var sideEl=document.querySelectorAll(".side");
var btnEl=document.querySelector("#btn-El");
var messageEl=document.querySelector("#message")


function calculateSumOfSquare(a,b){
    var c=Math.sqrt(a*a+b*b);
    return c;
}
function calculateHypotenuse(){
    const sumOfSquare=calculateSumOfSquare(Number(sideEl[0].value),Number(sideEl[1].value));
    
    messageEl.textContent="C= "+sumOfSquare;
    
}
btnEl.addEventListener("click",calculateHypotenuse)