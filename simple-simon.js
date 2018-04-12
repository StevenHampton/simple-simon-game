"use strict";
//variables
var userSeq = [];
var simonSeq= [];
var id, color, level = 0;


//1- start board sequence
$(document).ready(function(){
    $("#start").click(function(){
        level++;
        startSequence();
    })
});


//Simon sequence
function startSequence(){
    console.log(level);
    $("#displayCounter").text(level);
    getRanomNum();
    var i = 0;
    var myInterval = setInterval(function(){
        id = simonSeq[i];
        color = $("#"+id).attr("class").slice(10);
        console.log(id + " " + color);
        addClass(id, color);
        i++;
        if( i === simonSeq.length){
            clearInterval(myInterval);
        }
    }, 1000);

}

//generate random number
function getRanomNum() {
    var random = Math.floor(Math.random() * 4);
    simonSeq.push(random);
}

//add temporary class
function addClass(id, color){
    $("#"+id).addClass(color + "-active");
    setTimeout(function(){
        $("#"+id).removeClass(color + "-active");
    }, 500);
}

//2- User replicated sequence