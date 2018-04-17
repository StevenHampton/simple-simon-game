var userSeq = [];
var simonSeq = [];
var id, color, level = 0;

$(document).ready(function() {
    $(".display").text("");
    $(".start").click(function() {
        level = 0;
        level++;
        simonSeq = [];
        userSeq = [];
        simonSequence();
    });

    $(".pad").click(function() {
        id = parseInt($(this).attr("id"));
        userSeq.push(id);
        color = $(this).attr("class").slice(4);
        userSequence(color, id);
    });
});

function simonSequence() {
    getRandomNum();
    console.log("level " + level);
    $(".display").text(level);
    var i = 0;
    var myInterval = setInterval(function() {
        id = simonSeq[i];
        color = $("#" + id).attr("class").slice(4);
        console.log(id + " " + color);
        addTempClass(id, color);
        i++;
        if (i === simonSeq.length) {
            clearInterval(myInterval);
        }
    }, 5000);
}

function userSequence() {
    console.log(id + " " + color);
    addTempClass(id, color);
    userSeqCorrect(userSeq, simonSeq);
    if (userSeq.length === simonSeq.length) {
        if (userSeqCorrect() === true) {
            userSeq = [];
            level++;
            console.log("start simon");
            simonSequence();
        } else {
            resetGame();
        }
    }
}

function userSeqCorrect() {
    var counter = 0;
    console.log(userSeq + " " + simonSeq);
    for (var i = 0; i < userSeq.length; i++) {
        if (userSeq[i] === simonSeq[i]) {
            counter += 1;
        }
        if (counter === simonSeq.length) {
            return true
        }
    }
}

function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    simonSeq.push(random);
}

function addTempClass(id, color) {
    $("#" + id).addClass(color + "-active");
    setTimeout(function() {
        $("#" + id).removeClass(color + "-active");
    }, 200);
}

function resetGame() {
    userSeq = [];
    simonSeq = [];
    level = 0;
    $(".display").text("00");
}
