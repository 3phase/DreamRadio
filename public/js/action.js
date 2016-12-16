$(document).ready(function() {
  "use strict";

  $(".open-informative-panel").on("click", function() {
    if ($(".informative-panel").attr("data-toggled") == "false") {
      $(".informative-panel").attr("data-toggled", "true");
      $(".informative-panel").show(500);
      // css("display", "block");
    } else if ($(".informative-panel").attr("data-toggled") == "true") {
      $(".informative-panel").attr("data-toggled", "false");
      $(".informative-panel").hide(500);
      // css("display", "none");
    }
  });

  checkScrolling($('.cd-pricing-body'));
	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){checkScrolling($('.cd-pricing-body'))});
	});
	$('.cd-pricing-body').on('scroll', function(){
		var selected = $(this);
		window.requestAnimationFrame(function(){checkScrolling(selected)});
	});

	function checkScrolling(tables){
		tables.each(function(){
			var table= $(this),
				totalTableWidth = parseInt(table.children('.cd-pricing-features').width()),
		 		tableViewport = parseInt(table.width());
			if( table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
				table.parent('li').addClass('is-ended');
			} else {
				table.parent('li').removeClass('is-ended');
			}
		});
	}

});
