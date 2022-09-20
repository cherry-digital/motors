$(document).ready(function() {auto: true
    $(".slider-1").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 100,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 400, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 5000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        thumbItem:10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
        ],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });

    $(".modal__slider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 40,
 
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
 
        speed: 600, //ms'
        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 5000,
 
        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',
 
        thumbItem: 8,
        pager: true,
        gallery: true,
        galleryMargin: 0,
        thumbMargin: 12,
        currentPagerPosition: 'middle',
 
        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40,
 
        responsive : [
            {
                breakpoint: 750,
                settings: {
                    thumbItem: 6,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    thumbItem: 5,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    thumbItem: 4,
                }
            },
        ],
 
        onBeforeStart: function (el) {},
        onSliderLoad: function (el) {},
        onBeforeSlide: function (el) {},
        onAfterSlide: function (el) {},
        onBeforeNextSlide: function (el) {},
        onBeforePrevSlide: function (el) {}
    });

});