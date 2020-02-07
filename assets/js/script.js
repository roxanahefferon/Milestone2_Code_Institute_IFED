// declaration of variables

const cards = document.querySelectorAll('.card');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));




// shuffle array function

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -=1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// start game function

function startGame() {
    let shuffled = shuffle(imagesArray);

    for (i=0; i < shuffled.length; i++) {
        cardElements[i].innerHTML="";
        cardElements[i].appendChild(shuffled[i]);
        cardElements[i].type = `${shuffled[i]}`.alt;



    }


    }




// modal

var modal = document.getElementById("myModal");
var btn = document.getElementById("HowToBtn");
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