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
});

function define(arg) {
    window[arg] = null;
}
define("gameStarted");
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
    if (gameStarted == true) {

    } else {
        gameStarted = true;
        game.addEmphMessage("hi");
    }
}
