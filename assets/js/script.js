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

// modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// timer

function countDown(i, callback) {
    let timer = setInterval(function(){
        document.getElementById("time-left").innerHTML = "Time: " + i;
        i-- || (clearInterval(timer), callback());
    }, 1000);
}








// sorting hat

var x = 0;
var txt = 'No good sittin’ worryin’ abou’ it. What’s comin’ will come, an’ we’ll meet it when it does. – Harry Potter and the Goblet of Fire';

var speed = 50;

function typeWriter() {
  if (x < txt.length) {
    document.getElementById("result").innerHTML += txt.charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}

// sorting hat questions


function sorting() {
    var houses = [
    "You're brave, courageous, chivalrous and daring.\n\n"+ person + ", better be... Gryffindor!", 
    "You're ambitious, cunning, resourceful and pure-blood.\n\n" + person + ", you belong to Slytherin!", 
    "You're loyal, just and patient.\n\n" + person + ", you will do well in Hufflepuff!",
    "You're intelligent, wit, creative and wise.\n\n" + person + ", your house is Ravenclaw!", 
    "Hmm... What is this!?\n\nYou're a Muggle!\n\nSomeone Obliviate " + person + "!" ];
    
    var result = houses[Math.floor(Math.random() * houses.length)];
    
    alert(result);
}