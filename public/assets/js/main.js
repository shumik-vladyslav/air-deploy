; (function (wnd) {
    wnd.console = wnd.console || { log: function () { } };
})(window);

$(function () {

    try {
        if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
            $('body').addClass('ie');
        }
    } catch (e) {

    }

    var $body = $('body');
    var $menuOverlay = $('.menu-overlay');

    $('.navbar-toggle').on('click', function (e) {
        var $this = $(this)
        var expanded = $this.hasClass('open') ? 'false' : 'true';

        $this.attr('aria-expanded', expanded);
        $this.toggleClass('open');
        $body.toggleClass('navbar-open');
        $menuOverlay.toggle();

        e.preventDefault();
        return false;
    });

    initHeader();
});

function getScrollBarWidth() {
    if ($(document).height() > $(window).height()) {
        $('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
        fakeScrollBar = $('#fakescrollbar');
        fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
        var w1 = fakeScrollBar.find('div').innerWidth();
        fakeScrollBar.css('overflow-y', 'scroll');
        var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
        fakeScrollBar.remove();
        return (w1 - w2);
    }
    return 0;
}

function initHeader() {
    var $window = $(window);
    var $offCanvasNav = $('.navbar-offcanvas');
    var scrollWidth = getScrollBarWidth();

    function setHeight() {
        var totalWidth = $window.width();

        totalWidth += ($(document).height() > $(window).height()) ? scrollWidth : 0;

        // navbar height
        if (totalWidth < 1200) {
            var $navbar = $('.navbar');
            $offCanvasNav.height(window.innerHeight - $('.navbar').height());
        }
        else {
            $offCanvasNav.height('');
            $('body').removeClass('navbar-open');
            $('.navbar-toggle').attr('aria-expanded', 'false').removeClass('open');
            $('.menu-overlay').hide();
        }
    }

    setHeight();
    $window.on('resize', setHeight);
}

// Section 1 slider

function initMainBannerSlider(selector, interval, playBtnSelector, pauseBtnSelector) {
    var $slider = $(selector)
    var $elPlayBtn = $(playBtnSelector);
    var $elPauseBtn = $(pauseBtnSelector);
    var $mainBannerSlide = $('.mainBannerSlide');
    var $mainBannerDots = $('.mainBannerDots');

    // responsimg for main banner
    $('.mainBannerImageWrapper').responsImg({
        allowDownsize: true,
        breakpoints: {
            mobile: 320,
            tablet: 768,
            desktop: 992
        }
    });

    // show slider buttons (dots) on desktop screen only and if mainBannerSlide is ltr
    function bannerDotsDisplay() {
        if (window.innerWidth < 992) {
            $mainBannerDots.hide();
        }
        else {
            $mainBannerDots.show();

            if ($mainBannerSlide.hasClass('ltr')) {
                $mainBannerDots.addClass('ltr');
            }
        }
    }

    $mainBannerDots.hide();
    bannerDotsDisplay();

    $(window).resize(function () {
        bannerDotsDisplay();
    });


    //Main banner slider init
    $slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: interval,
        dots: true,
        appendDots: '.mainBannerDots',
        customPaging: function (slider, i) {
            return $('<span class="slider-dot" data-role="none" />').text(i + 1);
        }
       
    });

    $elPauseBtn.click(function () {
        $elPlayBtn.ariaShow();
        $elPauseBtn.ariaHide();
        $slider.slick("pause");
    });

    $elPlayBtn.click(function () {
        $elPlayBtn.ariaHide();
        $elPauseBtn.ariaShow();
        $slider.slick("play");
    });
}

// Section 2 slider

function initCompaniesSlider(selector, interval, playBtnSelector, pauseBtnSelector) {
    var $slider = $(selector);
    var $elPlayBtn = $(playBtnSelector);
    var $elPauseBtn = $(pauseBtnSelector);
    var itemCount = $slider.children().length - 1;

    $slider.slick({
        slidesToShow: itemCount,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: interval,
        mobileFirst: true,
        variableWidth: true,
        centerMode: true,
        rtl: true
    });
    $elPauseBtn.click(function () {
        $elPlayBtn.ariaShow();
        $elPauseBtn.ariaHide();
        $slider.slick("pause");
    });

    $elPlayBtn.click(function () {
        $elPlayBtn.ariaHide();
        $elPauseBtn.ariaShow();
        $slider.slick("play");
    });
}

// Section 5 slider

function initRecommendSlider(selector, interval, playBtnSelector, pauseBtnSelector) {

    var $slider = $(selector);
    var $elPlayBtn = $(playBtnSelector);
    var $elPauseBtn = $(pauseBtnSelector);


    $slider.slick({
        rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: interval,
        arrows: true,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]

    });

    $elPauseBtn.click(function () {
        $elPlayBtn.ariaShow();
        $elPauseBtn.ariaHide();
        $slider.slick("pause");
    });

    $elPlayBtn.click(function () {
        $elPlayBtn.ariaHide();
        $elPauseBtn.ariaShow();
        $slider.slick("play");
    });


    $(".prev").on("mouseenter", function () {
        $(selector).slick("pause");
    }).on("mouseleave", function () {
        $(selector).slick("play");
    });

    $(".next").on("mouseenter", function () {
        $(selector).slick("pause");
    }).on("mouseleave", function () {
        $(selector).slick("play");
    });
}

// checkup

function initGenderSelection() {
    var $genderButtons = $(".genderSelect").children();
    var $formBox = $(".personalDetails");
    var $hdnGender = $('#hdnGender');

    $genderButtons.on('click keyup', function (e) {
        if (e.type == "click" || e.keyCode == 13) {
            $genderButtons.not(this).removeClass('selected');
            $(this).addClass("selected");
            $formBox.show();
            $hdnGender.val($(this).data('value'));
        }
    });
}

function initSmokingSelection() {
    var $smokingButtons = $(".isSmoking").find('div');
    var $lastSmoked = $(".lastSmoked");
    var $hdnSmoking = $('#hdnSmoking');

    if ($hdnSmoking.val() == 'True' || $hdnSmoking.val() == '') {
        $lastSmoked.disableFormStep();
    } else {
        $lastSmoked.enableFormStep();
    }

    $smokingButtons.on('click keyup', function (e) {
        if (e.type == "click" || e.keyCode == 13) {

            $smokingButtons.not(this).removeClass('selected');
            $(this).addClass("selected");

            if ($(this).hasClass("no")) {
                $lastSmoked.enableFormStep();
                //$lastSmoked.show();
            }
            else {
                $lastSmoked.disableFormStep();
                $lastSmoked.val('');
                //$lastSmoked.hide();
            }

            $hdnSmoking.val($(this).data('value'));
        }
    });



    //accessibility

    //var $this = $(this);

    //if ($("input").is(':checked')) {
    //    $this.attr("aria-checked", "true");
    //} else {
    //    $this.attr("aria-checked", "false");
    //}


}

