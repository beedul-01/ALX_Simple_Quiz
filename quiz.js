document.addEventListener("DOMContentLoaded", function() {
    
const feedback = document.getElementById("feedback");
const submit_answer =  document.getElementById("submit-answer");
function checkAnswer() {
   
    let correctanswer = "4";
    let ans = document.querySelector('input[name="quiz"]:checked');
    let useranswer = ans.value;

    if (correctanswer===useranswer){
        feedback.textContent = "Correct! Well done." ;
    }
    else{
        feedback.textContent = "That's incorrect. Try again!" ;
    }

};

submit_answer.addEventListener('submit',checkAnswer);
});


