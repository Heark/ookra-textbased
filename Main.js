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

// End of Buttons
function startGame(){
    document.write("Test")
}
