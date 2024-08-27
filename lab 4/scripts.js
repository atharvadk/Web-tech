$(document).ready(function () {
    // Select elements using jQuery selectors
    $('#select-element').click(function () {
        $('.text').css('color', 'blue'); // Element selector
        $('#unique-text').css('font-weight', 'bold'); // ID selector
    });

    // DOM Manipulations
    $('#add-content').click(function () {
        $('#dom-content').append('<p>New Content Added!</p>');
    });

    $('#remove-content').click(function () {
        $('#dom-content').empty();
    });

    $('#modify-content').click(function () {
        $('#dom-content').text('Content has been modified!');
    });

    // Event Handlers
    $('#click-me').click(function () {
        alert('Button Clicked!');
    });

    $('#hover-me').hover(function () {
        $(this).css('background-color', '#f0f0f0');
    }, function () {
        $(this).css('background-color', '');
    });

    // Basic Animations
    $('#animate-box').click(function () {
        $('#box').animate({
            width: '200px',
            height: '200px'
        }, 1000);
    });
});
