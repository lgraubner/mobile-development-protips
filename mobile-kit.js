(function($) {

    var pm = {
        // cancel zoom on input focus
        // https://gist.github.com/zachleat/2008932
        cancelZoom: function() {
            var d = document,
            viewport,
            content,
            maxScale = ',maximum-scale=',
            maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;

            // this should be a focusable DOM Element
            if(!this.addEventListener || !d.querySelector) {
                return;
            }

            viewport = d.querySelector('meta[name="viewport"]');
            content = viewport.content;

            function changeViewport(event)
            {
                // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
                viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
            }

            // We could use DOMFocusIn here, but it's deprecated.
            this.addEventListener('focus', changeViewport, true);
            this.addEventListener('blur', changeViewport, false);
        },

        // enable fastclick on elements
        // https://developers.google.com/mobile/articles/fast_buttons
        fastClick: function(element, handler) {
            this.element = element;
              this.handler = handler;

              element.addEventListener('touchstart', this, false);
            element.addEventListener('click', this, false);
        },

        fastClick.prototype.handleEvent: function(event) {
            switch (event.type) {
                case 'touchstart': this.onTouchStart(event); break;
                case 'touchmove': this.onTouchMove(event); break;
                case 'touchend': this.onClick(event); break;
                case 'click': this.onClick(event); break;
            }
        },

        fastClick.prototype.onTouchStart: function(event) {
            event.stopPropagation();

            this.element.addEventListener('touchend', this, false);
            document.body.addEventListener('touchmove', this, false);

            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        },

        fastClick.prototype.onTouchMove: function(event) {
            if (Math.abs(event.touches[0].clientX - this.startX) > 10 ||
                Math.abs(event.touches[0].clientY - this.startY) > 10) {
                this.reset();
            }
        },

        fastClick.prototype.onClick: function(event) {
            event.stopPropagation();
            this.reset();
            this.handler(event);

            if (event.type == 'touchend') {
                pm.fastClick.clickbuster.preventGhostClick(this.startX, this.startY);
            }
        },

        fastClick.prototype.reset: function() {
            this.element.removeEventListener('touchend', this, false);
            document.body.removeEventListener('touchmove', this, false);
        },

        fastClick.clickbuster.preventGhostClick: function(x, y) {
            pm.fastClick.clickbuster.coordinates.push(x, y);
             window.setTimeout(pm.fastClick.clickbuster.pop, 2500);
        },

        fastClick.clickbuster.pop: function() {
            pm.fastClick.clickbuster.coordinates.splice(0, 2);
        },

        fastClick.clickbuster.onClick: function(event) {
            for (var i = 0; i < pm.fastClick.clickbuster.coordinates.length; i += 2) {
                var x = pm.fastClick.clickbuster.coordinates[i];
                var y = pm.fastClick.clickbuster.coordinates[i + 1];
                if (Math.abs(event.clientX - x) < 25 && Math.abs(event.clientY - y) < 25) {
                    event.stopPropagation();
                    event.preventDefault();
                }
            }
        },

        init: function() {

        }
    };

    $.fn.cancelZoom = function() {
        return this.each(app.cancelZoom);
    };

    $(function() {

        pm.init();

        $('input:text, input:email, select, textarea').cancelZoom();
    });

})(jQuery);
