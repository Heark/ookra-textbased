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
function define(arg){
    window[arg] = null
}
define("gameStarted");
// End of Buttons
var gameAdd = document.getElementById('#game');
function gameMessage(arg){
    gameAdd.innerHTML = gameAdd.innerHTML + "<br>" + arg;
}
function startGame(){
    gameStarted = true;
}
