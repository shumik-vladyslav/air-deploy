/// <reference path="jquery-2.2.4.min.js" />
(function ($) {
    'use strict';

    $.fn.btoggle = function (options) {

        // plugin settings
        var settings = $.extend({
            // default values
            multiselect: false,
            dir: 'rtl',
            onCheck: null,
            onUncheck: null
        }, options);

        var selector = settings.multiselect ? 'checkbox' : 'radio';

        return this.each(function () {
            var container = this;
            var $container = $(container);
            container.settings = jQuery.extend(true, {}, settings);

            function init() {

                this.$items = $container.find('input[type="' + selector + '"]');

                // container init
                $container.attr('dir', container.settings.dir);
                var containerClsName = [
                    'btn-group',
                    'btoggle',
                    'btoggle-' + (container.settings.multiselect ? 'multi' : 'single')
                ].join(' ');
                $container.addClass(containerClsName);

                // items init
                if (this.$items.length > 0) {
                    this.$items.hide()
                        .attr('tabindex', -1);

                    this.$items.each(function () {
                        var $input = $(this);
                        var $label = $input.parent();
                        if ($label.is('label')) {
                            $input.get(0).$btoggle = $container;
                            $label.addClass('btn btn-default btn-btgoggle')
                                .attr('tabindex', 0)
                                .on('click', toggleItem.bind(this))
                                .on('keypress', function (e) {
                                    if (e.which === 13) {
                                        $(this).trigger('click');
                                    }
                                });

                            if ($input.is(':checked')) {
                                $label.triggerHandler('click');
                                $input.prop("checked", true)
                            }
                        }
                    });
                }

                $container.checkedItems = function () {
                    return $(this).find(':checked');
                }
            }

            function toggleItem(e) {
                var $this = $(this);
                var checkedValue = !$this.prop('checked');

                if (!container.settings.multiselect) {
                    container.$items
                        .prop('checked', false)
                        .parent()
                        .removeClass('btoggle-checked');
                }

                $this.parent().toggleClass('btoggle-checked');
                $this.prop('checked', checkedValue);
                triggerCallback.call(this, checkedValue);

                e.preventDefault();
                return false;
            }

            function triggerCallback(value) {
                var callback = value ? container.settings.onCheck : container.settings.onUncheck;
                if (callback && typeof callback === 'function') {
                    callback.call(this, value)
                }
            }

            init.apply(this, []);
        });

    };

})(jQuery);