$(function() {
    $('#scroll a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 400, 'linear');
    });
});

$(function() {
    $(".myname").typed({
        strings: ["Anton Haman"],
        typeSpeed: 100,
        showCursor: false,
    });
});
