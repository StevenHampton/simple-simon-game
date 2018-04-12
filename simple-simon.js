"use strict";
//variables
var userSeq = [];
var simonSeq= [];
var id, color, level = 0;


//1- start board sequence
$(document).ready(function(){
    $("#start").click(function(){
        startSequence();
    })
});

function startSequence(){
    $("#displayCounter").text(level);
}

//2- User replicated sequence