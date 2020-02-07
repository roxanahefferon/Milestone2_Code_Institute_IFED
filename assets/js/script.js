// declaration of variables

const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
   return;
   }

   secondCard = this;

   checkForMatch();
 }

 function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
    return;
   }

   unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
 }

 resetBoard();

 function unflipCards() {

    lockBoard = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
   }, 1500);
 }

 function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 16);
     card.style.order = ramdomPos;
   });
 })();

cards.forEach(card => card.addEventListener('click', flipCard));









// modal declaration of variables 

var modal = document.getElementById("myModal");
var btn = document.getElementById("HowToBtn");
var span = document.getElementsByClassName("close")[0];

// functions 

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