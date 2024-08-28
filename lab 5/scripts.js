

$(document).ready(function () {

    $(document).on('ready', function () {
        console.log('Document is ready!');
    });

    $(window).on('load', function () {
        console.log('Window has loaded!');
    });

    $(window).on('resize', function () {
        console.log('Window has been resized!');
    });

    $(window).on('scroll', function () {
        console.log('Window is being scrolled!');
    });

    $(window).on('unload', function () {
        alert('You are leaving the page!');
    });

    $("#home").on('mouseenter', function () {
        $(this).css('background-color', '#0056b3');
    });

    $("#home").on('mouseleave', function () {
        $(this).css('background-color', '');
    });

    $("#fade-welcome").on('mousedown', function () {
        $(this).css('background-color', 'gray');
    });

    $("#fade-welcome").on('mouseup', function () {
        $(this).css('background-color', '');
    });

    $("#fade-welcome").on('click', function () {
        $("#intro").fadeToggle();
    });

    $("#fade-welcome").on('dblclick', function () {
        alert('Button double-clicked!');
    });

    $("#contactForm").on('submit', function (event) {
        event.preventDefault();
        alert("Form Submitted with Name: " + $("#name").val() + " and Email: " + $("#email").val());
    });

    $("#name").on('change', function () {
        console.log('Name field changed to: ' + $(this).val());
    });

    $("#email").on('blur', function () {
        console.log('Email field lost focus.');
    });

    $("#email").on('focusin', function () {
        $(this).css('border-color', '#007bff');
    });

    $("#message").on('select', function () {
        console.log('Text in the message box was selected.');
    });

    $(".project").on('mouseover', function () {
        $(this).addClass('highlighted');
    });

    $(".project").on('mouseout', function () {
        $(this).removeClass('highlighted');
    });

    $("#add-project").click(function () {
        $(".project-list").append('<div class="col-md-6 project"><div class="card"><div class="card-body"><h3 class="card-title">New Project</h3><p class="card-text">This is a newly added project.</p></div></div></div>');
    });

    $("#remove-project").click(function () {
        $(".project-list .project").last().remove();
    });

});
