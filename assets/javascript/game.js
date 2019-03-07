// Here's some scripting!!

var darthVader = {
    "Health Points": 1,
    "Attack Power": 1,
    "Counter Attack Power": 1
};

var princessLeia = {
    "Health Points": 1,
    "Attack Power": 1,
    "Counter Attack Power": 1
};

var lukeSkywalker = {
    "Health Points": 1,
    "Attack Power": 1,
    "Counter Attack Power": 1
};

var palpatine = {
    "Health Points": 1,
    "Attack Power": 1,
    "Counter Attack Power": 1
};

var hanSolo = {
    "Health Points": 1,
    "Attack Power": 1,
    "Counter Attack Power": 1
};

$(document).ready(function() {

$(".characters").on("click", function(){
    $("#instructions").text() = "You chose " + $(".characters").value(); + ". Now choose your first opponent!"
});

$("#attack").on("click", function(){
    // player chosen attacks enemy chosen
});

    // function attack(player, enemy){
    //     var x = 0;
    // }
});