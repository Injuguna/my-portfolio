//making the nav-tabs active
$(".nav li").on("click", function(){
    $(".nav li").removeClass("active");
    $(this).addClass("active");
});