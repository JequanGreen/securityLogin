function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.write("Die 1 = " + die1);
    document.write("Die 2 = " + die2);
    document.write("Sum = " + sum);
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
    } else {
        document.write("Draw - you did not win or lose, please try again.");
        document.write("<br/>");
    }
}


fuction blastoff
var currTime = 50;
document.getElementById("countDownTimer").innerHTML = currTime;
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 5000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 10000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 15000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 20000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 25000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 30000);
setTimeout(function () {
    currTime = currTime - 2;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 35000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 40000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = currTime;
}, 45000);
setTimeout(function () {
    currTime = currTime - 5;
    document.getElementById("countDownTimer").innerHTML = "Blastoff!";
}, 50000);  
}

function btrBlastoff() {
    console.log("btrBlastoff() started");
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        setTimerout(function () {
            if(currTime > 10 ){
                document.getElementById("countDownTimer").innerHTML = currTime;
            } else if (currTime == 0 ){
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
            }else {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
            } 
            currTime = currTime - 5;
        }, 5000 * i);
    }
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blastoff";
    }, 50000)

}