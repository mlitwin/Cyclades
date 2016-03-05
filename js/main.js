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

	function floyd(model) {
		var anim = [];
		var tortice, hare;
		var mu, lam;

		function adv(v) {
			return Cycler.nextElement(v, model);
		}

		function atPosition(t, h, mode) {
			tortice = t;
			hare = h;
			anim.push({'tortice': tortice, 'hare': hare, 'mode': mode});
		}

		atPosition(0, 0, "cycle");
		atPosition(adv(tortice), adv(adv(hare)));

		lam = 1;
		while(tortice !== hare) {
			atPosition(adv(tortice), adv(adv(hare)), "cycle");
			lam++;
		}

		anim[anim.length -1].cycleLength = lam;


		mu = 0;
		atPosition(0, hare);
		while( tortice !== hare) {
			atPosition(adv(tortice), adv(hare), "cycleStart");
			mu++;
		}
		anim[anim.length -1].cycleStart = mu;


		lam = 1;
		atPosition(tortice, adv(tortice));
		while( tortice !== hare) {
			atPosition(tortice, adv(hare), "minCycle");
			lam++;
		}
		anim[anim.length -1].cycleLength = lam;

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

	$("#floyd").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var model = $self.data("cycleData");
			var anim = floyd(model);

			Cycler.animate($self, anim);

		});
	});

})(jQuery);
