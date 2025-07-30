function checkAnswer () {
    var correctAnswer = "4";
    userAnswer = document.querySelector('input[name = "quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."
    } else {document.getElementById("feedback").textContent = "That's incorrect. Try again!"
    }
}

let submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener('click', checkAnswer)