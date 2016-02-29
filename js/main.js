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

	// tortice and hare just run together - testing the animation code.
	function runrunrunaround(model) {
		var anim = [];
		var i, cur = 0;
		for(i = 0; i <= model.maxIndex; i++) {
			anim.push({tortice: cur, hare: cur});
			cur = Cycler.nextElement(cur, model);
		}

		return anim;	
	}

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var model = $self.data("cycleData");
			var anim = runrunrunaround(model);

			Cycler.animate($self, anim);

		});		
	});

})(jQuery);
