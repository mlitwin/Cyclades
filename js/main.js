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
		c.foundData("cycleMultiple", lam);

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
		c.foundData("minCycle", lam);

		return c.anim;
	}

	function brent(c) {
		var mu, lam, i;
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
		lam++;
		c.foundData("minCycle", lam);

		c.changePhase( "cycleStart");
		c.atPosition(0, 0);
		for(i = 0; i < lam; i++) {
			c.atPosition(c.tortice, adv(c.hare));
		}
		mu = 0;
		while(c.tortice !== c.hare) {
      c.atPosition(adv(c.tortice), adv(c.hare));
			mu++;
		}
		c.foundData("cycleStart", mu);


		return c.anim;
	}

	function runAlgorithm($parentNode, algorithm) {
		var anim = algorithm(Cycler.createAlgorithmModel($parentNode));

		Cycler.animate($parentNode, anim);
	}

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			runAlgorithm($(this), runrunrunaround);
		});
	});

	$("#floyd").click(function() {
		$(".cycler").each(function() {
			runAlgorithm($(this), floyd);
		});
	});

	$("#brent").click(function() {
		$(".cycler").each(function() {
			runAlgorithm($(this), brent);
		});
	});

})(jQuery);
