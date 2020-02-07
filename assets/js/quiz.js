const quizQuestion = document.getElementById('quizQuestion');
const quizResult = document.getElementById('quizResult');
const quizButton = document.getElementById('quizButton');

const myQuestions = [
  {
    question: "Which Harry Potter word is now in the Oxford English Dictionary?",
    answers: {
      a: "Hogwarts",
      b: "Muggle",
      c: "Voldemort"
    },
    correctAnswer: "b"
  },
  {
    question: "Who were Harry's parents?",
    answers: {
      a: "Henry and Maggie Potter",
      b: "William and Elizabeth Potter",
      c: "James and Lily Potter"
    },
    correctAnswer: "c"
  },
  {
    question: "Who are the muggle aunt and uncle that Harry must live with every summer?",
    answers: {
      a: "Vernon and Petunia Dursley",
      b: "Ned and Camilla Diddly",
      c: "Ralph and Magnolia Dudley",
    },
    correctAnswer: "a"
  }
];

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);