/*
 *	Visualization of cycle detection algorithms.
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

 var SketchCyclePrototype = {
	 	displayFrame: function(curEvent) {
				if( curEvent.event === 'move') {
					if(undefined !== curEvent.tortice) {
							setSketchValue("T", curEvent.tortice.index);
					}
					if(undefined !== curEvent.hare) {
							setSketchValue("H", curEvent.hare.index);
					}
				}
		},
		reset: function() {
			 initSketchCycle( this.model);
		}
 };

	window.SketchCycle = {};
	window.SketchCycle.createSketchCycle = function($parentNode, sketch, cycler) {
		//var $table = $cycleParent.children("table");
		var ret = Object.create(SketchCyclePrototype);
		ret.parentNode = $parentNode;
		ret.model = cycler;

		$("#cycleSketch").WSP("loadSketch", {
					"data-sourceDocument": sketch,
					"onReady": function() { initSketchCycle(cycler); }
			}
		);

		return ret;
	};

})(jQuery);
