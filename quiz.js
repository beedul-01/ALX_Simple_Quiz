document.addEventListener("DOMContentLoaded", function() {
    
const feedback = document.getElementById("feedback");
const submit_answer =  document.getElementById("submit-answer");
function checkAnswer() {
   
    let correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer.value;

    if (correctAnswer===userAnswer){
        feedback.textContent = "Correct! Well done." ;
    }
    else{
        feedback.textContent = "That's incorrect. Try again!" ;
    }

};

submit_answer.addEventListener('submit',checkAnswer);
});


