// Here's some scripting!!

var lukeSkywalker = {
    hp : 120,
    ap : 9,
    cap : 15
};

var darthVader = {
    hp : 80,
    ap : 3,
    cap : 25
};

var princessLeia = {
    hp : 100,
    ap : 6,
    cap : 20
};

var palpatine = {
    hp : 60,
    ap : 12,
    cap : 10
};

var moddedAp;
var playerHP;
var enemyHP;
var defeatCount = 0;
var clickCount = 0;
var playerNum = 0;
var enemyNum = 0;
var charArr = [lukeSkywalker, darthVader, princessLeia, palpatine];
var charIndex = [0,1,2,3];
var attCount = 0;
var attMult = 1;

function restart() {

    lukeSkywalker = {
        hp : 120,
        ap : 6,
        cap : 15
    };
    
    darthVader = {
        hp : 80,
        ap : 2,
        cap : 25
    };
    
    princessLeia = {
        hp : 100,
        ap : 4,
        cap : 20
    };
    
    palpatine = {
        hp : 60,
        ap : 8,
        cap : 10
    };

    moddedAp = 0;
    playerHP = 0;
    enemyHP = 0;
    defeatCount = 0;
    clickCount = 0;
    playerNum = 0;
    enemyNum = 0;
    attCount = 0;
    attMult = 1;

    //will need to move all player elements back to the start div and empty out all of the other divs
    $("#instructions").text("Choose your character") ;
    $(".attack").show();
    $("#player > div.characters").appendTo($(".charactersC"));
    $("#enemy > div.characters").appendTo($(".charactersC"));
    $("#defeated > div.characters").appendTo($(".charactersC"));

    $(".lukeSkywalker span").text(120);
    $(".darthVader span").text(80);
    $(".princessLeia span").text(100);
    $(".palpatine span").text(60);


    $("#restart").hide();

}

$(document).ready(function() {
    $("#restart").hide();

$(".restart").on("click", function(){
    restart();
});

$(".charactersI").on("click", function(){
    
    if (clickCount === 0){
        clickCount++;
        playerNum = this.alt;
        var player = charArr[(this.alt)];
        moddedAp = player.ap;
        console.log(moddedAp);
        playerHP = player.hp;
        var playerElement = $(this);
        $("#instructions").text("You chose " + this.value + ". Now choose your first opponent!") ;
        playerElement.parent().appendTo($("#player"));
        $("#player").attr("value", player);
        $("#player span").text(playerHP);
        
    }   
        
    else if (clickCount === 1){
        clickCount++;
        enemyNum = this.alt;
        var enemy = charArr[enemyNum];
        enemyHP = enemy.hp;
        var enemyElement = $(this);
        $("#instructions").text("Your enemy is " + this.value + ". Attack!") ;
        enemyElement.parent().appendTo($("#enemy"));
        $("#enemy").attr("value", enemy);
        $("#enemy span").text(enemyHP);


    }

    // else if (clickCount === 2) {
    //     clickCount--;
    //     var alreadyPicked = $("#enemy").contents();
    //     // $(".charactersI").on("click", function(){
    //         var enemy = this.alt;
    //         var enemyElement = $(this);
    //         $("#instructions").text("Your enemy is " + this.value + ". Attack!") ;
    //         alreadyPicked.appendTo($(".charactersC"));
    //         enemyElement.appendTo($("#enemy"));
    //     // });
    // }
    });

    

    $(".attack").on("click", function(){
    
        if (defeatCount === 3 ){
            $("#instructions").text("Victory") ;
            $(".attack").hide();
            $("#restart").show();
    
    
        }

        if (clickCount >= 2){
            attCount++;
            enemyHP = enemyHP - moddedAp;
            playerHP = playerHP - charArr[enemyNum].cap;
            moddedAp = moddedAp + attCount * charArr[playerNum].ap
            console.log("enemyHP: " + enemyHP);
            console.log("playerHP: " + playerHP);
            console.log("playerAP: " +charArr[playerNum].ap);
            $("#player span").text(playerHP);
            $("#enemy span").text(enemyHP);

            if (playerHP <= 0){
                $("#instructions").text("You've been vanquished! Click restart to play again") ;
                $("#restart").show();
                $(".attack").hide();
            }

            else if (enemyHP <= 0){
                $("#instructions").text("You win! Choose your next foe.") ;
                // $("#enemy").text("WASTED");
                $("#enemy").appendTo("#defeated");
                clickCount = 1;         
                defeatCount++;
            }

        }
    });

});

