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
