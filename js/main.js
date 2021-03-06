/*
 *	Cycle detection algorithms.
 *
 *
 */

(function($) {
  var N = 10,
    length = N * N;
  var cycler = Cycler.createCyler(length);
  var sketchcycle = SketchCycle.createSketchCycle($("#cycleSketch"), sketch, cycler);
  var squarecycle = SquareCycle.createSquareCycle($("#cycler"), cycler);

  function resetCycler() {
    cycler.randomize(length);
    sketchcycle.reset();
    squarecycle.reset();
  }

  squarecycle.reset();


  $("#cycleReset").click(function() {
    resetCycler();
  });

  function floyd(c) {
    var mu, lam;
    // Convenience wrapper
    function adv(v) {
      return c.nextElement(v);
    }

    c.changePhase("cycleMultiple");
    c.atPosition(0, 0);
    c.atPosition(adv(c.tortice), adv(adv(c.hare)));

    lam = 1;
    while (!c.atSame()) {
      c.atPosition(adv(c.tortice), adv(adv(c.hare)));
      lam++;
    }
    c.foundData("cycleMultiple", lam);

    mu = 0;

    c.changePhase("cycleStart");
    c.atPosition(0, c.hare);
    while (!c.atSame()) {
      c.atPosition(adv(c.tortice), adv(c.hare));
      mu++;
    }

    c.foundData("cycleStart", mu);

    lam = 1;
    c.changePhase("minCycle");
    c.atPosition(c.tortice, adv(c.tortice));
    while (!c.atSame()) {
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
    function adv(v) {
      return c.nextElement(v);
    }

    c.changePhase("minCycle");
    c.atPosition(0, 0);
    c.atPosition(c.tortice, adv(c.hare));

    lam = 0;
    width = 1;
    while (!c.atSame()) {
      // looking for cycle
      if (lam < width) {
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

    c.changePhase("cycleStart");
    c.atPosition(0, 0);
    for (i = 0; i < lam; i++) {
      c.atPosition(c.tortice, adv(c.hare));
    }
    mu = 0;
    while (!c.atSame()) {
      c.atPosition(adv(c.tortice), adv(c.hare));
      mu++;
    }
    c.foundData("cycleStart", mu);


    return c.anim;
  }

  function runAlgorithm(algorithm) {
    var anim;

    cycler.clear();
    anim = algorithm(cycler);

    Cycler.animate(anim, [
      function(event) {
        sketchcycle.displayFrame(event);
      },
      function(event) {
        squarecycle.displayFrame(event);
      }
    ]);
  }

  $("#floyd").click(function() {
    runAlgorithm(floyd);
  });

  $("#brent").click(function() {
    runAlgorithm(brent);
  });

	impress().init();
	$("body").removeClass("loading");

})(jQuery);
