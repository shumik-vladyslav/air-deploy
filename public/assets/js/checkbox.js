; (function ($) {
    'use strict';

    $.fn.checkbox = function () {

        this.each(function () {
            var $this = $(this);

            // leave if 'for' value is undefined
            var forValue = $this.attr('for');
            if (!forValue) { return; };

            $this.attr('tabindex', '0');

            // get an input
            var $input = $('#' + forValue);

            // leave if not input or input is not a checkbox
            if (!$input.length || !$input.is(':checkbox')) return;

            $input.hide();

            // Default value
            if ($input.is(':checked')) {
                $input.siblings(".checkbox-label").toggleClass('checked');
                //$input.siblings().attr("aria-checked", "true") 
            }

            //else {
            //    $this.attr("aria-checked", "false");
            
            //}

            function toggleCheckbox($input) {
                // assume this = $('label');
                this.toggleClass('checked');
                //console.log($input.is(':checked'));
            }

            $this.on('click', function () {
                toggleCheckbox.call($this, $input)
            });

            $this.on('keyup', function (e) {
                if (e.which === 13) {
                    $this.click();
                }
            });

        });

        return this;
    };
})(jQuery);