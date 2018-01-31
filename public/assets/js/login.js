
; (function (wnd, $) {
    $(function () {
        var $header = $('header');
        var $wnd = $(wnd);

        function LoginForm(selector) {
            this.selector = selector;
        }

        LoginForm.prototype.init = function () {
            this.$this = $(this.selector);
            this.$controls = this.$this.find('input, button, a, select');
            this.$overlay = this.createOverlay();
            this.$body = $('body');
            this.hideForm();

            $wnd.on('resize', function () {
                this.setPositionAndHeight();
            }.bind(this));

            this.setPositionAndHeight();

            this.$this.find('select').selectpicker();
            this.$this.find('.login-btn-close').on('click', this.hideForm.bind(this));
            this.isOpen = false;
        };

        LoginForm.prototype.setPositionAndHeight = function () {
            var left = 0;
            if (!this.isOpen) {
                left = this.getFormWidth() * -1;
            }

            this.$this.css({
                //height: $wnd.height(),
                left: left
            });
        };

        LoginForm.prototype.getTopOffset = function () {
            return +$header.height() + 1;
        };

        LoginForm.prototype.getFormWidth = function () {
            return +(this.$this.width());
        };

        LoginForm.prototype.hideForm = function () {
            this.$this
                .removeClass('active')
                .css('left', this.getFormWidth() * -1);
            this.toggleDisabled(true);
            this.$overlay.hide();
            this.$body.removeClass('no-scroll');
            this.isOpen = false;
        }

        LoginForm.prototype.showForm = function () {
            this.$this
               .addClass('active')
               .css('left', 0);
            this.toggleDisabled(false);
            this.$overlay.show();
            this.$body.addClass('no-scroll');
            this.isOpen = true;
        }

        LoginForm.prototype.toggleDisabled = function (isDisabled) {
            this.$controls.each(function () {
                var $this = $(this);
                $this.prop('disabled', isDisabled);

                if ($this.is('select')) {
                    $this.selectpicker('refresh');
                }
            });
        }

        LoginForm.prototype.createOverlay = function () {
            return $('<div class="login-overlay" style="display:none;"></div>').insertBefore(this.$this);
        };


        var objLogin = new LoginForm('#login-form');
        window._waLogin = window._waLogin || objLogin;
        window._waLogin.init();
    });

})(window, jQuery);

