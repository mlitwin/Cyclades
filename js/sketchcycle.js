/*
 *	Visualization of cycle detection algorithms.
 *
 *	This one hooks up to a web (specially authored)
 *  Web Sketch, and drives it with JavaScript
 */

(function($) {

  var SketchCyclePrototype = {
    /*  Set a value in the sketch
     *	We are assuming there's a targetNAME paramter to
     *  set, and a MoveNAME action button to press in the
     *  sketch which makes the new value take effect.
     */
    setSketchValue: function(name, v) {
      var doc = this.parentNode.data("document");
      var sQ = doc.sQuery;
      var target = sQ("[label='target" + name + "']");
      var move = sQ("[label='Move" + name + "']");

      target.value(v);
      move.press();
    },
    displayFrame: function(curEvent) {
      if (curEvent.event === 'move') {
        if (undefined !== curEvent.tortice) {
          this.setSketchValue("T", curEvent.tortice.index);
        }
        if (undefined !== curEvent.hare) {
          this.setSketchValue("H", curEvent.hare.index);
        }
      }
    },
    reset: function() {
      this.setSketchValue("c0", this.cycler.cycle.cycleEnd);
      this.setSketchValue("c1", this.cycler.cycle.cycleStart + 1);
    }
  };

  window.SketchCycle = {};
  window.SketchCycle.createSketchCycle = function($parentNode, sketch, cycler) {
    //var $table = $cycleParent.children("table");
    var ret = Object.create(SketchCyclePrototype);
    ret.parentNode = $parentNode;
    ret.cycler = cycler;

    $parentNode.WSP("loadSketch", {
      "data-sourceDocument": sketch,
      "onReady": function() {
        ret.reset();
      }
    });

    return ret;
  };

})(jQuery);
