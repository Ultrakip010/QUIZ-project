const questions = [
    {
        question: "What is software development?",
        options: ["A process of creating software", "A process of creating hardware", "A process of designing websites"],
        correctAnswer: "A process of creating software"
    },
    {
        question: "What is the role of a software developer?",
        options: ["Writing code", "Testing software", "Both"],
        correctAnswer: "Both"
    },
    {
        question: "What is version control?",
        options: ["A system for managing software development", "A programming language", "A software testing technique"],
        correctAnswer: "A system for managing software development"
    },
    {
        question: "What is an algorithm?",
        options: ["A step-by-step procedure for solving a problem", "A type of programming language", "A software development framework"],
        correctAnswer: "A step-by-step procedure for solving a problem"
    },
    {
        question: "What is debugging?",
        options: ["The process of finding and fixing errors in code", "The process of optimizing code for performance", "The process of documenting code"],
        correctAnswer: "The process of finding and fixing errors in code"
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(answer) {
    const question = questions[currentQuestion];
    const nextButton = document.getElementById("next-btn");
    const optionsElement = document.getElementById("options");

    if (answer === question.correctAnswer) {
        optionsElement.innerHTML = "Correct answer!";
        optionsElement.style.color = "green";
        score++;
    } else {
        optionsElement.innerHTML = `Wrong answer. The correct answer is: ${question.correctAnswer}`;
        optionsElement.style.color = "red";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block";
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Good job! Your score is ${score}/${questions.length}`;
        nextButton.style.display = "none";
        showResultPage();
    }
}

function showResultPage() {
    const questionContainer = document.getElementById("question-container");
    const resultPage = document.getElementById("result-page");
    const resultScoreElement = document.getElementById("result-score");

    questionContainer.style.display = "none";
    resultPage.style.display = "block";
    resultScoreElement.textContent = `Your final score is ${score}/${questions.length}`;
}

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", displayQuestion);

displayQuestion();