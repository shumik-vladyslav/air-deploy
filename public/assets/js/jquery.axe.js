/// <reference path="jquery-2.2.4.min.js" />
// Accessibility scripts
; (function ($) {
    'use strict';

    $.fn.ariaHide = function () {
        return this.each(function () {
            $(this).attr('aria-hidden', true)
				.hide();
        });
    };

    $.fn.ariaShow = function () {
        return this.each(function () {
            $(this).attr('aria-hidden', false)
				.show();
        });
    };

    $.fn.disableFormStep = function () {
        return this.each(function () {
            $(this).hide()
                .find('input, select')
                .addClass('ignore');
        });

    }

    $.fn.enableFormStep = function () {
        return this.each(function () {
            $(this).show()
                .find('input, select')
                .removeClass('ignore');
        });

    }

    function initFontSize() {
        var key = 'large-font-size';
        var isActive = Lockr.get(key) || false;

        $('.toggle-font-size').on('click', function () {
            $('body').toggleClass('large-font-size');

            if (isActive) {
                Lockr.rm(key);
            }
            else {
                Lockr.set(key, true);
            }

            isActive = !isActive;
        });

        if (isActive) {
            $('body').addClass('large-font-size');
        }
    }

    function appendCss() {
        $('<link id="link-contrast" rel="stylesheet" type="text/css" />')
            .attr('href', '/css/contrast.min.css')
            .appendTo('head');
    }

    function initContrast() {
        var key = 'high-contrast';
        var isActive = Lockr.get(key) || false;

        $('.toggle-contrast').on('click', function () {

            if (isActive) {
                Lockr.rm(key);
                $('#link-contrast').remove();
            }
            else {
                Lockr.set(key, true);
                appendCss();
            }

            isActive = !isActive;
        });

        if (isActive) {
            appendCss();
        }
    }

    initFontSize();
    initContrast();
})(jQuery)