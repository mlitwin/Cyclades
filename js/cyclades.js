/*
 *	Visualization of cycle detection algorithms.
 *
 *	A Cycler (Cycler.createCyler) handles two things:
 *
 *  Creation of a "cycle", which defines the topography of our
 *  cycle: where it starts, and it's length, and some utilities
 *  to determine if two indices are the same considering the cycle, etc.
 *
 *  It also has routines to accumulate steps in an "animation" - a dumb-data
 *  set of steps showing e.g. movement of tortice and hare, determination of
 *  what the length of the cycyle is, etc, for later visiualization of the
 *  course of a cycle detection algorithm.
 *
 */

(function($) {
  window.Cycler = {
    // Run our animation of the itinerary
    animate: function(itinerary, frameUpdate) {
      var curIndex = 0;
      var curPhase = "";
      var self = this;
      var frameUpdateList = ('function' === typeof frameUpdate) ? [frameUpdate] : frameUpdate;

      function handleFoundData(event) {
        var targetDomClass = event.name;
        var preliminaryData = false;
        var $targets;

        var $cycleParent = $parentNode.children(".cycleParent");
        var $table = $cycleParent.children("table");

        if (event.name === 'cycleMultiple' || event.name === 'minCycle') {
          targetDomClass = 'cycleLength';
          preliminaryData = (event.name === 'cycleMultiple');
        }

        $targets = $cycleParent.find(".cycleResults ." + targetDomClass);

        $targets.text(event.value).toggleClass("preliminaryData", preliminaryData).addClass("hasData");
      }

      function displayCurrentFrame() {
        var curEvent = itinerary[curIndex];
        var delay = 150;

        if (curEvent.event === 'phase') {
          delay = 500;
        }

        if (frameUpdateList) {
          frameUpdateList.forEach(function(frameUpdater) {
            frameUpdater(curEvent);
          });
        }

        curIndex++;
        if (curIndex < itinerary.length) {
          window.setTimeout(displayCurrentFrame, delay);
        }
      }

      displayCurrentFrame();
    }
  };

  var CyclerPrototype = {
		clear: function() {
			this.tortice = undefined;
			this.hare = undefined;
			this.anim = [];
		},
    randomize: function(length) {
      var c0 = Math.floor(Math.random() * length / 3),
        c1 = c0 + Math.floor(Math.random() * 2 * Math.sqrt(length)); // cycle goes from c1 -> c0

      this.cycle = {
        maxIndex: length - 1,
        cycleEnd: c0,
        cycleStart: c1,
        cycleLength: c1 - c0 + 1
      };
    },
    nextElement: function(v) {
      return v + 1;
    },
    reducedElement: function(v) {
      var c0 = this.cycle.cycleEnd;
      var len = this.cycle.cycleLength;
      if (v > c0) {
        v = c0 + (v - c0) % len;
      }
      return v;
    },
    sameElement: function(t, h) {
      return this.reducedElement(t) === this.reducedElement(h);
    },
    atSame: function() {
      return this.sameElement(this.tortice, this.hare);
    },
		// accumulate various events for playback:
    changePhase: function(phase) {
      this.anim.push({
        'event': 'phase',
        'phase': phase
      });
    },
    atPosition: function(t, h) {
      this.tortice = t;
      this.hare = h;
      this.anim.push({
        'event': 'move',
        'tortice': {
          'index': this.tortice,
          'reduced': this.reducedElement(this.tortice)
        },
        'hare': {
          'index': this.hare,
          'reduced': this.reducedElement(this.hare)
        }
      });
    },
    foundData: function(name, value) {
      this.anim.push({
        'event': 'foundData',
        'name': name,
        'value': value
      });
    }
  };

  window.Cycler.createCyler = function(length) {
    var ret = Object.create(CyclerPrototype);

    ret.clear();
    ret.randomize(length);

    return ret;
  };

})(jQuery);
