// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
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

var i = 0;
var txt = 'No good sittin’ worryin’ abou’ it. What’s comin’ will come, an’ we’ll meet it when it does. – Harry Potter and the Goblet of Fire';

var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("result").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// sorting hat questions

function myFunction() {
  var x = document.createElement("INPUT");
  var y = document.createElement("INPUT");
  var z = document.createElement("INPUT");
  var w = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  document.body.appendChild(x);
  y.setAttribute("type", "checkbox");
  document.body.appendChild(y);
  z.setAttribute("type", "checkbox");
  document.body.appendChild(z);
  w.setAttribute("type", "checkbox");
  document.body.appendChild(w);
}


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

// quotes

function aparecium() {
  var quote = randomQuote(Math.random());
  document.getElementById("quote").innerHTML = quote[0];
  document.body.style.backgroundColor = quote[1];
  document.getElementById("quote-center").style.backgroundColor = quote[2];
  document.getElementById("quote").style.color = quote[4];
  document.getElementById("magic").style.color = quote[4];
  document.getElementById("magic").style.backgroundColor = quote[1];
  document.getElementById("tumblr").style.color = quote[4];
  document.getElementById("tumblr").style.backgroundColor = quote[1];
};

document.getElementById("magic").addEventListener("click", function(){
  aparecium();
});

var gryffindor = {
    quotes: ['"It does not do to dwell on dreams and forget to live, remember that." - Albus Dumbledore', 
    '"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals." - Sirius Black', 
    '"I am what I am an’ I’m not ashamed. ‘Never be ashamed,’ my ol’ dad used ter say, ‘there’s some who’ll hold it against you, but they’re not worth bothern’ with." - Rubeus Hagrid', 
    '"Of course it is happening inside your head, Harry, but why on earth should that mean it is not real?" - Albus Dumbledore',
    '"After all, to the well-organized mind, death is but the next great adventure." - Albus Dumbledore',
    '"It is our choices, Harry, that show what we truly are, far more than our abilities." - Albus Dumbledore', 
             '"The thing about growing up with Fred and George is that you sort of start thinking anything’s possible if you’ve got enough nerve." - Ginny Weasley', '"I don’t go looking for trouble. Trouble usually finds me." - Harry Potter'],
  color1: "#740001",
  color2: "#ae0001",
  color3: "#eeba30",
  color4: "#d3a625",
  title: "GRYFFINDOR QUOTE"
};

var ravenclaw = {
    quotes: ['"Wit beyond measure is man’s greatest treasure." - Rowena Ravenclaw', 
             '"Don’t worry. You’re just as sane as I am." - Luna Lovegood', 
             '"Either must die at the hand of the other for neither can live while the other survives" - Sybill Trelawney', 
             '"Gilderoy Lockhart, Order of Merlin, Third Class, Honorary Member of the Dark Force Defense League, and five times winner of Witch Weekly’s Most Charming Smile Award. But I don’t talk about that; I didn’t get rid of the Banden Banshee by smiling at him." - Gilderoy Lockhart',
            '"Curious indeed how these things happen. The wand chooses the wizard, remember… I think we must expect great things from you, Mr. Potter… After all, He-Who-Must-Not-Be-Named did great things, terrible, yes, but great." - Ollivander', 
            '"There is no good or evil, there is only power, and those too weak to seek it." - Prof. Quirrell'],
  color1: "#0e1a40",
  color2: "#222f5b",
  color3: "#946b2b",
  color4: "#5d5d5d",
  title: "RAVENCLAW QUOTE"
};

var slytherin = {
    quotes: ['"The mind is not a book, to be opened at will and examined at leisure." - Severus Snape', 
             '"Greatness inspires envy. Envy engenders spite. Spite spawns lies." - Lord Voldemort', 
             '"Famous Harry Potter, can’t even go to a bookshop without making the front page." - Draco Malfoy', 
             '"Always." - Severus Snape',
            '"Is it love again? Dumbledore’s favorite solution, love, which he claimed conquered death, though love did not stop him falling from the tower and breaking like an old waxwork? Love, which did not prevent me stamping out your Mudblood mother like a cockroach, Potter!" - Lord Voldemort'],
  color1: "#1a472a",
  color2: "#2a623d",
  color3: "#5d5d5d",
  color4: "#aaaaaa",
  title: "SLYTHERIN QUOTE",
};

var hufflepuff = {
    quotes: ['"Said Hufflepuff, ‘I’ll teach the lot, and treat them just the same." - The Sorting Hat', 
             '"Ah well… wand still in your jeans? Both buttocks still on? Okay, let’s go." - Nymphadora Tonks', 
             '"Remember Cedric. Remember, if the time should come when you have to make a choice between what is right, and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory." - Albus Dumbledore', 
             '"In many, many ways, Hufflepuff is my favourite House." - J.K. Rowling'],
  color1: "#ecb939",
  color2: "#f0c75e",
  color3: "#372e29",
  color4: "#726255",
  title: "HUFFLEPUFF QUOTE",
};


function randomQuote(number) {
    console.log(number);
    
    if (number >= 0 && number < 0.25) {
        var numberGryf = Math.floor((Math.random() * 6) + 0);
        console.log(numberGryf);
        return [gryffindor.quotes[numberGryf], gryffindor.color1, gryffindor.color2, gryffindor.color3, gryffindor.color4, gryffindor.title];
        
    } else if (number >= 0.25 && number < 0.50) {
        var numberRav = Math.floor((Math.random() * 6) + 0);
        console.log(numberRav);
        return [ravenclaw.quotes[numberRav], ravenclaw.color1, ravenclaw.color2, ravenclaw.color3, ravenclaw.color4, ravenclaw.title];
        
    } else if (number >= 0.50 && number < 0.75) {
        var numberSlyth = Math.floor((Math.random() * 5) + 0);
        console.log(numberSlyth);
        return [slytherin.quotes[numberSlyth], slytherin.color1, slytherin.color2, slytherin.color3, slytherin.color4, slytherin.title];
        
    } else if (number >= 0.75 && number <= 1) {
        var numberHuff = Math.floor((Math.random() * 4) + 0);
        console.log(numberHuff);
        return [hufflepuff.quotes[numberHuff], hufflepuff.color1, hufflepuff.color2, hufflepuff.color3, hufflepuff.color4, hufflepuff.title];
        
    }
}

aparecium();