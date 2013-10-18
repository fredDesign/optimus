;(function ($, window, undefined) {
'use strict';

var $doc = $(document),
    Modernizr = window.Modernizr;

function column_equalizer(){
    // Equalize content text columns to the same height
    $('.equal-heights').equalize({children: '.equalized-item', reset: true, breakpoint: 750});
    return;
}

$doc.ready(function() {
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    
    // Iframe vidéo responsive
    // $(".video-block").fitVids();
        
    // Language/Country choose box
    $('.dropdownselect').each(function(index) {
        var $this = $(this),
            current_lang = $this.attr('data-dropdownselect-current');
        // Display the current lang/country label
        if(current_lang){
            var current_item = $("li[data-dropdownselect-value='"+current_lang+"']", $(this));
            $(".selected-label", $this).addClass("active flags-"+current_lang).html( $("a", current_item).html() );
            // Add active class and attribute on the corresponding item
            current_item.attr("data-dropdownselect-selected", "true").addClass("active");
        }
        // Fill each item with some html to add flag image
        $('li', $this).each(function(index) {
            $("a", this).prepend("<span class=\"flags-sprite flags-"+$(this).attr('data-dropdownselect-value')+"\"></span>");
        });
    });
    
    $('.popin-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; } 

                    src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0' // URL that will be set as a source for iframe. 
                }
            }
        },

        fixedContentPos: true
    });
});

$(window).load(function () {
    // Equalize some columns after full page loading
    // NOTE: Needed to be in the $.load(), because webkit raise ready() even if it does not have 
    //       downloaded all ressources, this cause false dimensions because all images 
    //       have not yet be downloaded, so they doesn't set true dimensions on their 
    //       parent and etc..
    column_equalizer();
});
    
// Bind equalizer action on window resize
$(window).resize(function() {
    column_equalizer();
});

// UNCOMMENT THE LINE YOU WANT BELOW IF YOU WANT IE8 SUPPORT AND ARE USING .block-grids
// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});

// Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
    setTimeout(function () {
        // At load, if user hasn't scrolled more than 20px or so...
                        if( $(window).scrollTop() < 20 ) {
        window.scrollTo(0, 1);
        }
    }, 0);
    });
}

})(jQuery, this);
