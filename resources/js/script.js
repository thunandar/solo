$(window).on('load', function() {
    $('#status').fadeOut(1000);
    $('#preloader').delay(1100).fadeOut(1000);
});
// Carousel
$(document).ready(function() {
    $("#team-members").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
});
// Progress Bar
$(document).ready(function() {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%",
                },
                3000
            );
        });
        this.destroy();
    }, {
        offset: "bottom-in-view"
    });
});
//Responsive Tab Service Section
$(document).ready(function() {
    $('#services-tab').responsiveTabs({
        animation: 'slide',
    });
});
// Portfolio
$(window).on("load", function() {
    // init Isotope
    $('.isotope-container').isotope({
        // options
    });
    // filter items on button click
    $('#isotope-filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $(".isotope-container").isotope({ filter: filterValue });

        // Active Button 
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass("active");
    });
});

//Magnifire
$(document).ready(function() {
    $('#portfolio-wapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
            // other options
    });
});
//Testimonial Section
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});
//Stats Section
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
//Client Section
$(".client-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            item: 3,
        },
        1000: {
            items: 5,
        },
    },
});
//Nav Section
$(document).ready(function() {
    $(window).scroll(function() {
        // For Show 
        if ($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top');
            $('.navbar-brand img').attr('src', "./resources/img/logo/logo-dark.png");
            $('#back-to-top').fadeIn();
        } else {
            //For Hide
            $('nav').removeClass('white-nav-top');
            $('.navbar-brand img').attr('src', "./resources/img/logo/logo.png");
            $('#back-to-top').fadeOut();



        }
    });
});
//Scroll Effect
$(document).ready(function() {
    $('a.smooth').click(function(event) {
        event.preventDefault();
        var select_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(select_id).offset().top - 64,
        }, 1250, 'easeInOutExpo');
    });
});