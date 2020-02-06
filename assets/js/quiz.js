const startQuizBtn = document.getElementById('quiz-start-btn');
const quizQuestCont = document.getElementById('quiz-question');
let suffleQuest, currentQIndex;
const questionElement = document.getElementById('questions');
const answersElement = document.getElementById('answers');

startQuizBtn.addEventListener('click', startQuiz);

function startQuiz(){
startQuizBtn.classList.add('hide');
suffleQuest = quizQuest.sort(() => Math.random() - .5)
currentQIndex = 0;
quizQuestCont.classList.remove('hide');
setNextQ()
}

function quizNextQuestion(){
showQuestion(shuffleQuest[currentQIndex])
}

function showQuestion(questions){
questionElement.innerText = quizQuest.questions;
}

function quizSelectAnswer(){


}

// array for questions (objects)

const quizQuest = [
    {
        questions: 'What spell produces a jet of water from the caster’s wand?',
        answers: [
            {text: 'Aguamenti', correct: true},
            {text: 'Caterwauling Charm', correct: false},
            {text: 'Portus', correct: false},
            {text: 'Scourgify', correct: false},

        ]
    }
]
