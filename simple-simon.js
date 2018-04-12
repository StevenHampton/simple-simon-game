//variables
userSeq = [];
simonSeq = [];
var id, color, level = 0;
var error = false;

//1- start board sequence
$(document).ready(function() {
    $(".display").text("");
    $(".start").click(function () {
        error = false;
        level = 0;
        level++;
        simonSeq = [];
        userSeq = [];
        simonSequence();
    });

    //user pad listener
    $(".pad").click(function () {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[1];
        userSequence();
    });
});

//user sequence
function userSequence() {
    userSeq.push(id);
    console.log(id+" "+color);
    addClass(id, color);
    //check user sequence
    if(!checkUserSeq()) {
        error = true;
        displayError();
        userSeq = [];
        simonSequence();
    }
    //checking end of sequence
    else {
        level++;
        userSeq = [];
        error = false;
        console.log("start simon");
        simonSequence();
    }
}

/* simon sequence */
function simonSequence() {
    console.log("level "+level);
    $(".display").text(level);
    if(!error) {
        getRandomNum();
    }
    var i = 0;
    var myInterval = setInterval(function() {
        id = simonSeq[i];
        color = $("#"+id).attr("class");
        color = color.split(" ")[1];
        console.log(id+" "+color);
        addClass(id, color);
        i++;
        if(i === simonSeq.length) {
            clearInterval(myInterval);
        }
    }, 1000);
}

//generate random number
function getRandomNum() {
    var random = Math.floor(Math.random() * 4);
    simonSeq.push(random);
}

/* add temporary class */
function addClass(id, color) {
    $("#"+id).addClass(color+"-active");
    setTimeout(function(){
        $("#"+id).removeClass(color+"-active");
    }, 500);
}

/* checking user seq against simon's */
function checkUserSeq() {
    for(var i = 0; i < userSeq.length; i++) {
        if(userSeq[i] !== simonSeq[i]) {
            return false;
        }
    }
}

/* display error  */
function displayError() {
    console.log("error");
    var counter = 0;
    var myError = setInterval(function() {
        $(".display").text("Err");
        counter++;
        if(counter === 3) {
            $(".display").text(level);
            clearInterval(myError);
            userSeq = [];
            counter = 0;
        }
    }, 500);
}
