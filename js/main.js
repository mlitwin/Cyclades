/*
 *	Cycle detection algorithms.
 *
 *
*/

(function($) {

	function setSketchValue(name, v) {
		var doc = $("#cycleSketch").data("document");
		var sQ = doc.sQuery;
		var target = sQ("[label='target" + name + "']");
		var move = sQ("[label='Move" + name + "']");

		target.value(v);
		move.press();
	}

	function initSketchCycle(c) {
		setSketchValue("c0", c.model.cycleEnd);
		setSketchValue("c1", c.model.cycleStart + 1);
	}

  function doUpdateFrame(curEvent) {
			var doc = $("#cycleSketch").data("document");
			var sQ = doc.sQuery;
			var targetH = sQ("[label='targetH']");
			var targetT = sQ("[label='targetT']");
			var moveT = sQ("[label='MoveT']");
			var moveH = sQ("[label='MoveH']");

			if( curEvent.event === 'move') {
				if(undefined !== curEvent.tortice) {
					targetT.value(curEvent.tortice.index);
					moveT.press();
				}

				if(undefined !== curEvent.hare) {
					targetH.value(curEvent.hare.index);
					moveH.press();
				}
			}
	}

	var N = 10, length = N * N;
	var model = Cycler.createAlgorithmModel(length);

	$("#cycleReset").click(function() {
		model.randomize(length);
		$(".cycler").each(function() {
			Cycler.resetTable($(this), model);
		});
	});

	function floyd(c) {
		var mu, lam;
		// Convenience wrapper
		function adv(v) { return c.nextElement(v); }

		initSketchCycle(c);

		c.changePhase( "cycleMultiple");
		c.atPosition(0, 0);
		c.atPosition(adv(c.tortice), adv(adv(c.hare)));

		lam = 1;
		while( !c.atSame()) {
			c.atPosition(adv(c.tortice), adv(adv(c.hare)));
			lam++;
		}
		c.foundData("cycleMultiple", lam);

		mu = 0;

		c.changePhase( "cycleStart");
		c.atPosition(0, c.hare);
		while( !c.atSame()) {
			c.atPosition(adv(c.tortice), adv(c.hare));
			mu++;
		}

		c.foundData("cycleStart", mu);

		lam = 1;
		c.changePhase( "minCycle");
		c.atPosition(c.tortice, adv(c.tortice));
		while( !c.atSame()) {
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
		while( !c.atSame()) {
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
		while( !c.atSame()) {
      c.atPosition(adv(c.tortice), adv(c.hare));
			mu++;
		}
		c.foundData("cycleStart", mu);


		return c.anim;
	}

	function runAlgorithm($parentNode, algorithm) {
		var anim = algorithm(model);

		//resetResultsDOM($parentNode);


		Cycler.animate($parentNode, anim, doUpdateFrame);
	}

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
