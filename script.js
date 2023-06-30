const questions = [
    {
        question: "The series Friends is set in which city?",
        answers: [
            { text: "Los Angeles", correct: false},
            { text: "New York City", correct: true},
            { text: "miami", correct: false},
            { text: "seattle", correct: false},
        ]
    },
    {
        question: "What pet did Ross own?",
        answers: [
            { text: "A dog", correct: false},
            { text: "A rabbit", correct: false},
            { text: "A monkey", correct: true},
            { text: "A cat", correct: false},
        ] 
    },
    {
        question: "What is Monica skilled at?",
        answers: [
            { text: "screaming", correct: false},
            { text: "caring", correct: false},
            { text: "cooking", correct: true},
            { text: "dancing", correct: false},
        ]
    },
    {
        question: "What does joey never share?",
        answers: [
            { text: "His room", correct: false},
            { text: "His video games", correct: false},
            { text: "His sofa", correct: false},
            { text: "His food", correct: true},
        ]
    },
    {
        question: "What is janice most likely to say?",
        answers: [
            { text: "Talk to the hand!", correct: false},
            { text: "Chandler bingggg!", correct: false},
            { text: "oh.. my.. God!", correct: true},
            { text: "No way!", correct: false},
        ]
    },
    {
        question: "What kind of uniform does Joey wear to Monica and Chandler's wedding?",
        answers: [
            { text: "Chef", correct: false},
            { text: "Soldier", correct: true},
            { text: "Fire fighter", correct: false},
            { text: "A basket player", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuix(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>  {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)

    }


}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuix();
    }

    });


startQuix();






















