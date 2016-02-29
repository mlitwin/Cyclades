/*
 *	Cycle detection algorithms.
 *
 *
*/


(function($) {
	$("#cycleReset").click(function() {
		$(".cycler").each(function() {
			Cycler.resetTable($(this));
		});		
	});

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var model = $self.data("cycleData");
			var anim = [];
			var i, cur = 0;
			for(i = 0; i <= model.maxIndex; i++) {
				anim.push({tortice: cur, hare: cur});
				cur = Cycler.nextElement(cur, model);
			}

			Cycler.animate($self, anim);

		});		
	});

})(jQuery);
