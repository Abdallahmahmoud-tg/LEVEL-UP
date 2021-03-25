// Header scroll
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 150) {
        $(".navbar").addClass("scrolled");
        $(".top-menu-wrapper").css("display" , "none")
    }

    else{
        $(".navbar").removeClass("scrolled");
        $(".top-menu-wrapper").css("display" , "block")
    }
});

// Init WOW =====================
$(document).ready(function(){
    wow = new WOW
    (
        {
            boxClass: 'wow',            // default
            animateClass: 'animated',   // default
            offset: 1,                  // default
            mobile: false,               // default
            live: true                  // default
        }
    );
    wow.init()
});