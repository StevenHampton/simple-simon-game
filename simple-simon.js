//variables
var userSeq = [];
var simonSeq = [];
var id, color, level = 0;

//1- start board sequence
$(document).ready(function() {
    $(".display").text("");
    $(".start").click(function () {
        level = 0;
        level++;
        simonSeq = [];
        userSeq = [];
        simonSequence();
    });

    //user pad listener
    $(".pad").click(function () {
        id = $(this).attr("id");
        userSeq.push(id);
        color = $(this).attr("class").slice(4);
        userSequence(color, id);
    });
});

//generate random number
function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    simonSeq.push(random);
}

/* add temporary class */
function addTempClass(id, color) {
    $("#"+id).addClass(color+"-active");
    setTimeout(function(){
        $("#"+id).removeClass(color+"-active");
    }, 500);
}

/* simon sequence */
function simonSequence() {
    getRandomNum();
    console.log("level "+level);
    $(".display").text(level);
    var i = 0;
    id = simonSeq[i];
    var myInterval = setInterval(function() {
        color = $("#"+id).attr("class").slice(4);
        console.log(id+" "+color);
        addTempClass(id, color);
        i++;
        if(i === simonSeq.length) {
            clearInterval(myInterval);
        }
    }, 1000);
}

//user sequence
function userSequence() {
    console.log(id+" "+color);
    addTempClass(id, color);
    userSeqCorrect(userSeq, simonSeq);
    if(userSeqCorrect()) {
        level++;
        console.log("start simon");
        simonSequence();
    }
}

/* checking user seq against simon's */
function userSeqCorrect() {
    console.log(userSeq + " " + simonSeq);
    for(var i = 0; i < simonSeq.length; i++) {
        if(userSeq[i] == simonSeq[i]) {
            return true;
        }
    }
}

