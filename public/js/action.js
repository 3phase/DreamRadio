$(document).on("ready", function() {
  "use strict";

  checkScrolling($('.cd-pricing-body'));
	$(window).on('resize', function(){
		window.requestAnimationFrame(function(){checkScrolling($('.cd-pricing-body'))});
	});
	$('.cd-pricing-body').on('scroll', function(){
		var selected = $(this);
		window.requestAnimationFrame(function(){checkScrolling(selected)});
	});

  $(".open-informative-panel").on("click", function() {
    alert("hahaa");
    if ($(".informative-panel").attr("data-toggled") == "false") {
      $(".informative-panel").attr("data-toggled", "true");
      $(".informative-panel").css("display", "block");
    }
  });

	function checkScrolling(tables){
		tables.each(function(){
			var table= $(this),
				totalTableWidth = parseInt(table.children('.cd-pricing-features').width()),
		 		tableViewport = parseInt(table.width());
		 	console.log(table.scrollLeft() - totalTableWidth + tableViewport)
			if( table.scrollLeft() >= totalTableWidth - tableViewport - 1) {
				table.parent('li').addClass('is-ended');
			} else {
				table.parent('li').removeClass('is-ended');
			}
		});
	}

});
