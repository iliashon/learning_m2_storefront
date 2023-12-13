define(['jquery'], ($) => {

    const HEADER_SELECTOR = '.page-header';

    if(window.scrollY > 154 && !$(HEADER_SELECTOR).hasClass('sticky-header')) {
        $(HEADER_SELECTOR).addClass('sticky-header')
    }

    $(window).on("scroll", function () {

        if(window.scrollY > 154 && !$(HEADER_SELECTOR).hasClass('sticky-header')) {
            $(HEADER_SELECTOR).addClass('sticky-header')
        } else if (window.scrollY < 154 && $(HEADER_SELECTOR).hasClass('sticky-header')) {
            $(HEADER_SELECTOR).removeClass('sticky-header')
        }
    })
})
