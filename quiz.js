var quizForm=document.querySelector("#quiz-form");
var submitBtnEl=document.querySelector("#submit-btn");
var outputEl=document.querySelector("#output")

correctAnswers=["90°","right angled","5","4","10","20","9:1","60"]

function calculateMarks(){
    let score=0;
    let index=0;
    const forResults= new FormData(quizForm);
    for (let forResult of forResults.values()){
        if (forResult==correctAnswers[index]){
            score=score+1;
        }
        index=index+1;
        
    }
    
    outputEl.innerText="Your score is "+score;
}


submitBtnEl.addEventListener("click",calculateMarks)