/*
 * Color switcher object
 * 
 * Switch some items for the selected color choice
 */
var ColorChoicesSwitcher = (function() {
    // Map items to switch to when choosing a color
    var choice_map = {};
    
    // Initializing and bind click to switch between color choices
    var add_item = function(color, selector, kind, content) {
        choice_map[color][selector] = [kind, content];
    };
    
    // Simple image preloader
    var image_preloader = function(image) {
        var img = new Image();
        img.src = image;
    }
    
    // Initializing and bind click to switch between color choices
    var initialize = function(default_color, opts) {
        $.extend( choice_map, opts );
        // Launch assets preloading
        $.each( choice_map, function( color_name, color_contents ) {
            if(color_name!=default_color){
                $.each( color_contents, function( key, value ) {
                    if(value[0]=='image'){
                        image_preloader(value[1]);
                    }
                });
            }
        });
    };
    
    var bind = function() {
        $('#colors-choices-menu li a').click(function(e){
            var $this = $(this);
            if(!$this.hasClass('active')){
                // Active class switch
                $('#colors-choices-menu li a').removeClass('active');
                $this.addClass('active');
                // Content to switch
                $.each( choice_map[$this.attr('data-color-choiceid')], function( key, value ) {
                    var kind = value[0],
                        content = value[1];
                    if(kind=='image'){
                        $(key).attr('src', content);
                    } else {
                        $(key).html(content);
                    }
                });
            }
            return false;
        });
        $('#colors-choices-loading').hide();
        $('#colors-choices-menu').show();
    };
    
    // public API
    return {
        choice_map: choice_map,
        initialize: initialize,
        bind: bind
    };
})();