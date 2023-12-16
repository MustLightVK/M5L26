$(document).ready(function() {
    $('a').on({
        mouseenter: function(){
            $(this).css('background-color', 'green')
        },
        mouseleave: function(){
            $(this).css('background-color', 'red')
        },
    })
        
});