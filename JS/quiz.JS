const quizForm = document.getElementById('quiz-form');
const submitButton = document.getElementById('submit-button');

quizForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;

    // Check answers
    const answers = {
        q1: 'a',
        q2: 'a',
        q3: 'a',
        q4: 'b',
        q5: 'a',
        q6: 'a'
    };

    const selectedOptions = Array.from(quizForm.elements).filter(element => element.type === 'radio' && element.checked);
    selectedOptions.forEach(option => {
        const questionName = option.name;
        const selectedAnswer = option.value;
        if (selectedAnswer === answers[questionName]) {
            score++;
            option.parentElement.classList.add('correct');
        } else {
            option.parentElement.classList.add('incorrect');
            const correctAnswer = document.createElement('span');
            correctAnswer.textContent = `Correct answer: ${answers[questionName]}`;
            option.parentElement.appendChild(correctAnswer);
        }
    });

    // Disable radio buttons
    const radioButtons = Array.from(quizForm.elements).filter(element => element.type === 'radio');
    radioButtons.forEach(button => {
        button.disabled = true;
    });

    // Display score
    const scoreContainer = document.createElement('div');
    scoreContainer.textContent = `Score: ${score}/${Object.keys(answers).length}`;
    quizForm.appendChild(scoreContainer);
});

