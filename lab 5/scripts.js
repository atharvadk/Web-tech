$(document).ready(function () {
    let currentColor = '';

    // Function to reset background color
    function resetBackgroundColors() {
        $('.hero, #about, #projects, #contact').css('background-color', '');
    }

    // Change background color on click
    $('.hero, #about, #projects, #contact').on('click', function () {
        resetBackgroundColors(); // Reset other sections
        currentColor = getRandomColor(); // Get a random color
        $(this).css('background-color', currentColor); // Apply color to clicked section
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Toggle welcome message
    $("#fade-welcome").on('click', function () {
        $("#intro").fadeToggle();
    });

    // Project modal display
    $(".project").on('click', function () {
        const title = $(this).data('title');
        const description = $(this).data('description');
        $("#projectModalLabel").text(title);
        $("#project-description").text(description);
    });

    // Modify about section
    $("#modify-about").on('click', function () {
        $("#about-text").text("I've updated my introduction to reflect my latest skills and experiences.");
    });

    // Add project description
    $("#add-project").click(function () {
        $(".project-list").append('<div class="col-md-6 project" data-toggle="modal" data-target="#projectModal" data-title="New Project" data-description="This is a newly added project."><div class="card"><div class="card-body"><h3 class="card-title">New Project</h3><p class="card-text">This is a newly added project.</p></div></div></div>');
    });

    // Remove last project
    $("#remove-project").click(function () {
        $(".project-list .project").last().remove();
    });

    // Form submission
    $("#contactForm").on('submit', function (event) {
        event.preventDefault();
        alert("Form Submitted with Name: " + $("#name").val() + " and Email: " + $("#email").val());
    });

    // Additional jQuery features
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-light').removeClass('bg-dark');
        } else {
            $('.navbar').addClass('bg-dark').removeClass('bg-light');
        }
    });
});
