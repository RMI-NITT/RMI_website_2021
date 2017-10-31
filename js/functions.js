var homePLef = parseInt($('.home-content p').css('left')); //home-content p-left property
var homeHLef = parseInt($('.home-content h1').css('left')); //home-content h1-left property

if (parseInt($(document).top) >= 1000) {
    $('.home-content h1').css({
        'display': 'none'
    })
} else {
    $('home-content').css({
        'display': 'block'
    })
}

$('.project-nav a').click(function(e) {
    e.preventDefault();
});

$('.project-nav #prev').click(function(e) {
    e.preventDefault();
    var fullLeft = parseInt($('.projects').css('left'));
    $('.projects').animate({
        left: fullLeft - 1024 + 'px'
    });

    if (fullLeft == -2048) {
        $('.projects').animate({
            left: '0px'
        });
    };
});
$('#icon4').click(function(e) {
    e.preventDefault();
    var members_scroll = parseInt($('.ban-3').offset().top) + $(window).height()
    $('html, body').animate({
        scrollTop: members_scroll,
        scrollLeft: 0
    }, 1000);
});
$('#icon1').click(function(e) {
    e.preventDefault();
    var members_scroll = 0
    $('html, body').animate({
        scrollTop: members_scroll,
        scrollLeft: 0
    }, 1000);
});
$('#icon2').click(function(e) {
    e.preventDefault();
    var members_scroll = parseInt($('#projects').offset().top)
    $('html, body').animate({
        scrollTop: members_scroll,
        scrollLeft: 0
    }, 1000);
});
$('#icon3').click(function(e) {
    e.preventDefault();
    var members_scroll = parseInt($('.ban-2').offset().top) + $(window).height()
    $('html, body').animate({
        scrollTop: members_scroll,
        scrollLeft: 0
    }, 1000);
});
$('#icon5').click(function(e) {
    e.preventDefault();
    var members_scroll = parseInt($('#contact').offset().top)
    $('html, body').animate({
        scrollTop: members_scroll,
        scrollLeft: 0
    }, 1000);
});
var figure = $(".video").hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}

$('.event a').click(function(e) {
    e.preventDefault();
    var fullEvent = $(this).parent().parent();
    $(fullEvent).addClass('event-full');
});

$('.close-event').click(function(e) {
    e.preventDefault();
    var closeEvent = $(this).parent().parent();
    $(closeEvent).removeClass('event-full');
})

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('.home-content p').css({
        'left': homePLef + (-wScroll) + 'px'
    });

    if (wScroll >= 800) {
        $('.home-content h1').css({
            'left': 800 + homeHLef + (-wScroll) + 'px'
        });
    } else {
        $('.home-content h1').css({
            'left': homeHLef + 'px'
        });
    }


    var sliderWid = $('.container').height() / $(document).height() * 366;
    if (wScroll > $('#projects').offset().top - ($(window).height() / 1.2)) {
        $('.project').each(function(i) {

            setTimeout(function() {
                $('.project').eq(i).addClass('is-showing');
            }, (2500 * (Math.exp(i * 0.14))) - 2500);
        });
    }

    var firstHeight = parseInt($('.ban-1').offset().top);
    var secHeight = parseInt($('.ban-2').offset().top);
    var thirdHeight = parseInt($('.ban-3').offset().top);
    var fourthHeight = parseInt($('#contact').offset().top);
    if (wScroll < firstHeight - 200) {
        $('.bar').css({
            'width': '20%'
        });
        $('.ban-1 p').css({
            'transform': 'translate(0px, ' + (wScroll - firstHeight + 200) + 'px)'
        });

        $('.ban-1 h1').css({
            'transform': 'translate(0px, ' + (wScroll - firstHeight + 200) + 'px)'
        });

        // $('.section-banner').css({
        // 	'background-color' : '#6CC9C6'
        // })

        $('.nav-out').css({
            'background-color': '#144955'
        })

    } else {
        $('.nav-out').css({
            'background-color': '#414141'
        });
    }

    if (wScroll > firstHeight - 200) {
        $('.bar').css({
            'width': '40%'
        });
        $('.ban-1 p').css({
            'transform': 'translate(0px, ' + (wScroll - firstHeight + 200) + 'px)'
        });

        $('.ban-1 h1').css({
            'transform': 'translate(0px, ' + (wScroll - firstHeight + 200) + 'px)'
        });

        // $('.section-banner').css({
        // 	'background-color' : '#6CC9C6'
        // })

        $('.nav-out').css({
            'background-color': '#144955'
        })

    } else {
        $('.nav-out').css({
            'background-color': '#414141'
        });
    }

    if (wScroll > secHeight - 200) {
        $('.bar').css({
            'width': '60%'
        });

        $('.ban-2 p').css({
            'transform': 'translate(0px, ' + (wScroll - secHeight + 200) + 'px)'
        });

        $('.ban-2 h1').css({
            'transform': 'translate(0px, ' + (wScroll - secHeight + 200) + 'px)'
        });

        $('.nav-out').css({
            'background-color': '#616536'
        });
    };

    if (wScroll > thirdHeight - 200) {
        $('.bar').css({
            'width': '80%'
        });
        $('.ban-3 p').css({
            'transform': 'translate(0px, ' + (wScroll - thirdHeight + 200) + 'px)'
        });

        $('.ban-3 h1').css({
            'transform': 'translate(0px, ' + (wScroll - thirdHeight + 200) + 'px)'
        });

        $('.nav-out').css({
            'background-color': '#414141'
        });
    };

    if (wScroll > fourthHeight - 200) {
        $('.bar').css({
            'width': '100%'
        });
        $('.nav-out').css({
            'background-color': '#F4F1E0'
        });
        $('.menu-slider').css({
            'background-color': '#F4F1E0'
        });
        $('.bar').css({
            'background-color': '#414141'
        });
        $('nav li a').css({
            'color': '#414141'
        });
        $('nav li a:hover').css({
            'color': '#414141'
        });

    } else {
        $('.menu-slider').css({
            'background-color': '#414141'
        });
        $('.bar').css({
            'background-color': '#eee'
        });
        $('nav li a').css({
            'color': '#eee'
        });
        $('nav li a:hover').css({
            'color': '#fff'
        });
    }

    if (wScroll > $('#events').offset().top - $(window).height()) {

        var offset = (Math.min(0, wScroll - $('#events').offset().top + $(window).height() - 350)).toFixed();

        $('.event-1').css({
            'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });

        $('.event-3').css({
            'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)'
        });

    }

});
