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
		var hare;
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		c.changePhase( "runningMindlessly");
		c.atPosition(0, 0);
		for(i = 0; i <= c.model.maxIndex; i++) {
			hare = adv(c.hare);
			if(Math.random() < 0.5) {
				hare = adv(hare);
			}
			c.atPosition(adv(c.tortice), hare);
		}

		return c.anim;
	}

	function floyd(c) {
		var mu, lam;
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		c.changePhase( "cycleMultiple");
		c.atPosition(0, 0);
		c.atPosition(adv(c.tortice), adv(adv(c.hare)));

		lam = 1;
		while(c.tortice !== c.hare) {
			c.atPosition(adv(c.tortice), adv(adv(c.hare)));
			lam++;
		}
		c.foundData("cycleMultiple", lam - 1);

		mu = 0;

		c.changePhase( "cycleStart");
		c.atPosition(0, c.hare);
		while( c.tortice !== c.hare) {
			c.atPosition(adv(c.tortice), adv(c.hare));
			mu++;
		}

		c.foundData("cycleStart", mu);


		lam = 1;
		c.changePhase( "minCycle");
		c.atPosition(c.tortice, adv(c.tortice));
		while( c.tortice !== c.hare) {
			c.atPosition(c.tortice, adv(c.hare));
			lam++;
		}
		c.foundData("minCycle", lam - 1);

		return c.anim;
	}

	function brent(c) {
		var mu, lam;
		var width;
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		c.changePhase( "minCycle");
		c.atPosition(0, 0);
		c.atPosition(c.tortice, adv(c.hare));

		lam = 0; width = 1;
		while(c.tortice !== c.hare) {
			// looking for cycle
			if( lam < width) {
				c.atPosition(c.tortice, adv(c.hare));
				lam++;
			} else { // advance tortice to hair and look again
				c.atPosition(c.hare, adv(c.hare));
				lam = 0;
				width *= 2;
			}
		}
		c.foundData("minCycle", lam);

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

	$("#brent").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var anim = brent( Cycler.createAlgorithmModel($self));

			Cycler.animate($self, anim);

		});
	});

})(jQuery);
