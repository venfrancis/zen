$(window).ready(function() {
    // // Method posted by Chris Coyer of CSS Tricks
    // // for perfect full page background image
    // // http://css-tricks.com/perfect-full-page-background-image
    // var theWindow        = $(window),
    //     $bg              = $("#bg"),
    //     aspectRatio      = $bg.width() / $bg.height();
    // function resizeBg() {
    // 	if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
    // 	    $bg
    // 	    	.removeClass()
    // 	    	.addClass('bgheight');
    // 	} else {
    // 	    $bg
    // 	    	.removeClass()
    // 	    	.addClass('bgwidth');
    // 	}
    // }
    // theWindow.resize(resizeBg).trigger("resize");

    // declare our variables
    var authorBtn = $('.author-btn'),
        authorMeta = $('.author-meta');

    //css overides
    $('nav ul li a', this).hover(function() {
        $('em', this).animate({
            'text-indent': '0px'
        }, 300);
    }, function() {
        $('em', this).animate({
            'text-indent': '1500px'
        }, 300);
    });

    authorBtn.click(function() {

        if (authorMeta.is(':hidden')) {
            authorMeta.fadeIn(300);
        }
        if (authorMeta.is(':visible')) {

            $(document).mouseup(function(e) {
                var container = $('.author-meta');

                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    container.fadeOut(300);
                }
            });

        }
    });


});