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

	function floyd(c) {
		var mu, lam;


		c.atPosition(0, 0, "cycleMultiple");
		c.atPosition(c.adv(c.tortice), c.adv(c.adv(c.hare)));

		lam = 1;
		while(c.tortice !== c.hare) {
			c.atPosition(c.adv(c.tortice), c.adv(c.adv(c.hare)));
			lam++;
		}

		c.foundData("cycleMultiple", lam - 1);
	//	anim[anim.length -1].cycleLength = lam - 1;


		mu = 0;
		c.atPosition(0, c.hare, "cycleStart");
		while( c.tortice !== c.hare) {
			c.atPosition(c.adv(c.tortice), c.adv(c.hare));
			mu++;
		}

		c.foundData("cycleStart", mu);

	//	anim[anim.length -1].cycleStart = mu;


		lam = 1;
		c.atPosition(c.tortice, c.adv(c.tortice), "minCycle");
		while( c.tortice !== c.hare) {
			c.atPosition(c.tortice, c.adv(c.hare));
			lam++;
		}

		c.foundData("minCycle", lam - 1);

	//	anim[anim.length -1].cycleLength = lam - 1;

		return c.anim;
	}

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var model = $self.data("cycleData");
			var anim = runrunrunaround(model);

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
