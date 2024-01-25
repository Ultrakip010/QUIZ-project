const questions = [
    {
        question: "Wat is softwareontwikkeling?",
        options: ["Een proces van het creëren van software", "Een proces van het creëren van hardware", "Een proces van het ontwerpen van websites"],
        correctAnswer: "Een proces van het creëren van software"
    },
    {
        question: "Wat is de rol van een softwareontwikkelaar?",
        options: ["Code schrijven", "Software testen", "Beide"],
        correctAnswer: "Beide"
    },
    {
        question: "Wat is versiebeheer?",
        options: ["Een systeem voor het beheren van softwareontwikkeling", "Een programmeertaal", "Een softwaretesttechniek"],
        correctAnswer: "Een systeem voor het beheren van softwareontwikkeling"
    },
    {
        question: "Wat is een algoritme?",
        options: ["Een stapsgewijze procedure voor het oplossen van een probleem", "Een type programmeertaal", "Een softwareontwikkelingsframework"],
        correctAnswer: "Een stapsgewijze procedure voor het oplossen van een probleem"
    },
    {
        question: "Wat is debuggen?",
        options: ["Het proces van het vinden en oplossen van fouten in code", "Het proces van het optimaliseren van code voor prestaties", "Het proces van het documenteren van code"],
        correctAnswer: "Het proces van het vinden en oplossen van fouten in code"
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
        optionsElement.innerHTML = "Correct antwoord!";
        optionsElement.style.color = "lightgreen";
        score++;
    } else {
        optionsElement.innerHTML = `Fout antwoord. Het correcte antwoord is: ${question.correctAnswer}`;
        optionsElement.style.color = "red";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        nextButton.style.display = "block";
    } else {
        const scoreElement = document.getElementById("score");
        scoreElement.textContent = `Goed gedaan! Je score is ${score}/${questions.length}`;
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
    resultScoreElement.textContent = `Je eindscore is ${score}/${questions.length}`;
}

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", displayQuestion);

displayQuestion();