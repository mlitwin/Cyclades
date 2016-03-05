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

		function atPosition(t, h, phase) {
			tortice = t;
			hare = h;
			anim.push({'event': 'move', 'tortice': tortice, 'hare': hare});
			if( phase) {
					anim.push({'event': 'phase',  'phase': phase});
			}
		}

		atPosition(0, 0, "cycle");
		atPosition(adv(tortice), adv(adv(hare)));

		lam = 1;
		while(tortice !== hare) {
			atPosition(adv(tortice), adv(adv(hare)));
			lam++;
		}

		anim[anim.length -1].cycleLength = lam - 1;


		mu = 0;
		atPosition(0, hare, "cycleStart");
		while( tortice !== hare) {
			atPosition(adv(tortice), adv(hare));
			mu++;
		}
		anim[anim.length -1].cycleStart = mu;


		lam = 1;
		atPosition(tortice, adv(tortice), "minCycle");
		while( tortice !== hare) {
			atPosition(tortice, adv(hare));
			lam++;
		}
		anim[anim.length -1].cycleLength = lam - 1;

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
