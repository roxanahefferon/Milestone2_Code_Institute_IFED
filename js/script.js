document.getElementById("play").addEventListener("click", function(){
    alert("im sick of this blah blah =)");
});


// timer

function countDown(i, callback) {
    let timer = setInterval(function(){
        document.getElementById("time-left").innerHTML = "Time: " + i;
        i-- || (clearInterval(timer), callback());
    }, 1000);
}