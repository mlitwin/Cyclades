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
	function runrunrunaround(c) {
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		c.atPosition(0, 0, "runningMindlessly");
		for(i = 0; i <= c.model.maxIndex; i++) {
			c.atPosition(adv(c.tortice), adv(c.hare));
		}

		return c.anim;
	}

	function floyd(c) {
		var mu, lam;
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		c.atPosition(0, 0, "cycleMultiple");
		c.atPosition(adv(c.tortice), adv(adv(c.hare)));

		lam = 1;
		while(c.tortice !== c.hare) {
			c.atPosition(adv(c.tortice), adv(adv(c.hare)));
			lam++;
		}
		c.foundData("cycleMultiple", lam - 1);

		mu = 0;
		c.atPosition(0, c.hare, "cycleStart");
		while( c.tortice !== c.hare) {
			c.atPosition(adv(c.tortice), adv(c.hare));
			mu++;
		}

		c.foundData("cycleStart", mu);


		lam = 1;
		c.atPosition(c.tortice, adv(c.tortice), "minCycle");
		while( c.tortice !== c.hare) {
			c.atPosition(c.tortice, adv(c.hare));
			lam++;
		}
		c.foundData("minCycle", lam - 1);

		return c.anim;
	}

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var anim = runrunrunaround(Cycler.createAlgorithmModel($self));

			Cycler.animate($self, anim);

		});
	});

	$("#floyd").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var anim = floyd( Cycler.createAlgorithmModel($self));

			Cycler.animate($self, anim);

		});
	});

})(jQuery);
