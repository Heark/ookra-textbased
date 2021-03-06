/*
 */
// Buttons below
// Start Game Button
$(document).ready(function() {
    $('.start-button').click(function() {
        $(this).css('background', '#D3D3D3');
        startGame();
    });
    $('.start-button').hover((function() {
        $(this).css('border-radius', '25px');
        $(this).css('border', '1px solid');
        $(this).css('border-color', '#00FFFF');
    }), function() {
        $(this).css('border-radius', '0px');
        $(this).css('border', '0px solid');
    });
    $("#walk").click(function(){
        game.addMessage("You walk...");
        if(Candy.rand(1, 20) >= 10){
            if(Player.level  > 1 && Player.level < 5){
            selectedmonster = Candy.shuffle(monsters_tier_1)
            }
            game.addEmphMessage("You ran into a battle with "+selectedmonster.name)
            inBattle = true;
        } else {
            
        }
    })
});
    if(gameList == true){
        $("#gamelist").show()
       $("#gamelist").accordion() 
    } else {
        $("#gamelist").hide()
    }
    if(inBattle == true){
        $("battlelist").show()
    } else {
        $("battlelist").hide()
    }
var gameStarted;
// End of Buttons
var gameAdd = document.getElementById('game');
var game = {
    addMessage: function(arg) {
        gameAdd.innerHTML = gameAdd.innerHTML + "<center><br>" + arg + "</center>";

    },

    addEmphMessage: function(arg) {
        gameAdd.innerHTML = gameAdd.innerHTML + "<div class=Emph>" + arg + "</div>";
    }

}

function startGame() {
    if (gameStarted == true){
        
    } else { 
        game.addEmphMessage("Welcome to the game!")
    }
}
