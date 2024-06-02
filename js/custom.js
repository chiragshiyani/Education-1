// LOADER

$(window).on("load", function(){

    $(".overlay").fadeOut(1000);

});

// STICKY HEADER

$(window).scroll(function(){

    if($(this).scrollTop() > 0){
        $("header").addClass("slide");
        $(".back-to-top").fadeIn(100);
    }
    else{
        $("header").removeClass("slide");
        $(".back-to-top").fadeOut(100);
    }

});