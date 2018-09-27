$(document).ready(function(){

$('#container').animate({opacity: 1}, 600, "linear");

// toggle to-do item completion
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done').blur();
});
// ^ listener is added to ul, 2nd argument targets
// all future lis created within uls

// remove to-do item (prevent event bubbling)
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); // this is the callback
    }); // function that runs after item fades
    event.stopPropagation(); // stops bubbling
});

$('#items').on('keypress', function(event){
    if(event.which === 13 && $(this).val() !== "") {
        // if ENTER pressed & input not blank
        var newToDo = $(this).val().replace(/</g, "&lt;").replace(/>/g, "&gt;"); // save input to var
        $('ul').append('<li><span><img src="../images/trash.png" class="fa fa-trash-o" width="20px" height="20px"/></span> ' + newToDo + '</li>'); // append html and to-do content to ul
        $(this).val("").blur(); // clear input
    }
});

$("#title").on('keypress', function(event){
    if(event.which === 13) {
        var title = $(this).val().replace(/</g, "").replace(/>/g, "");
        $(this).attr("placeholder", title).blur();
    }
});

$('.fa-pencil').on('click', function(){
    $('#items').fadeToggle();
});

});
