$(document).ready(function() {
    const $nameContainer = $('.name');
    const $spans = $nameContainer.find('span');
    const lastSpan = $spans.last()[0];
    const lastSpanPosition = lastSpan.getBoundingClientRect().top + window.scrollY; // Get the position of the last span

    $(window).scroll(function(){
        //$(".name").css("opacity", 1 - $(window).scrollTop() / 250);
        $(window).scroll(function() {
            const opacity = 1 - ($(window).scrollTop() - lastSpanPosition + 890) / 250;
            $nameContainer.css("opacity", opacity);
        });
    });
});