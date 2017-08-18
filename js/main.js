$('.navbar-collapse ul li a').click(function(){
    $('.navbar-toggle:visible').click();
});

$('.navbar-brand').click(function(){
    $('.navbar-toggle:visible').click();
});

$(".flip").flip();

$("#websiteTitle").typeIt({
    strings: [" Siddharth.", " Sid."],
    speed: 100,
    breakLines: false,
    autoStart: false,
    loop: false,
    loopDelay: 2000,
    deleteSpeed: 100
});

var scroll = new SmoothScroll('a[href*="#"]');
