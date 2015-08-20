/*
*/

// Buttons below
$(document).ready(function() {
    $(".start-button").click(function() {
        $(this).css("background", "#D3D3D3");
    });
    $(".start-button").hover(function() {
        $(this).css('border-radius', "25px");
    }, function() {
        $(this).css('border-radius', "0px");
    });
});

// End of Buttons
