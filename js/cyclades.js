/*
 *	Visualization of cycle detection algorithms.
 *
 *	Display our list as an N x N grid, with a standard ordering,
 *  and choose at which element the cycle starts, and where you go from there.
 *
 *  Your cycle detection algorithm would get the model level info from the
 *  c = Cycler.createAlgorithmModel($parentNode);
 *  and then do
 *    nextIndex = c.adv(index) to advance and index
 *    call "c.atPosition(c.tortice, c.hare)" when you've finished a move
 *    call c.haveData(name, value) when you've figured out an answer:
 *       - cycleMultiple (found a multiple of the cycle length)
 *       - minCycle (found the cycle length)
 *       - cycleStart (found the start of the cycle)
 *
 *  This collects your sequence in c.anim = [ {tortice: index, hare: index}, ...] and
 *  then you can call Cycler.animate($parentNode, anim); to get the visuals
 *
*/

(function($) {
	var N = 10,
		length = N*N;

	function randIndex() {
		return Math.floor(Math.random() * length);
	}



	// next element is element + 1, unless we're looping at a cycle
	function nextElement(cur, model) {
		var next;
		if( cur === model.cycleStart) {
			next = model.cycleEnd;
		} else {
			next = cur + 1;
		}

		// arbitrary condition to ensure nextElement is a valid element.
		if( next > model.maxIndex) {
			next = model.maxIndex;
		}

		return next;
	}

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

				if( event.name === 'cycleMultiple' || event.name === 'minCycle') {
					targetDomClass = 'cycleLength';
					preliminaryData = (event.name === 'cycleMultiple');
				}

				$targets = $cycleParent.find(".cycleResults ." + targetDomClass);

				$targets.text(event.value).toggleClass("preliminaryData", preliminaryData).addClass("hasData");
			}

			function displayCurrentFrame() {
				var curEvent = itinerary[curIndex];
				var delay = 150;

				 if(curEvent.event === 'phase') {
					 delay = 500;
					}

				if( frameUpdateList) {
					frameUpdateList.forEach(function(frameUpdater) {
						frameUpdater( curEvent);
					});
				}

				curIndex++;
				if( curIndex < itinerary.length) {
					window.setTimeout(displayCurrentFrame, delay);
				}
			}

			displayCurrentFrame();
		}
	};

	var CyclerPrototype = {
		  randomize: function(length) {
				var c0 = Math.floor(Math.random() * length / 3),
				c1 = c0 + Math.floor(Math.random() * 2 * Math.sqrt(length)); // cycle goes from c1 -> c0

				this.model =  {
						maxIndex: length - 1,
						cycleEnd: c0,
						cycleStart: c1,
						cycleLength: c1 - c0 + 1
				};
			},
			nextElement: function(v) {
				return v + 1;
				//return nextElement(v, this.model);
			},
			reducedElement: function(v) {
				var c0 = this.model.cycleEnd;
				var len = this.model.cycleLength;
				if( v > c0) {
					v = c0 + (v- c0) % len;
				}
				return v;
			},
			sameElement: function(t,h) {
				return this.reducedElement(t) === this.reducedElement(h);
			},
			atSame: function() {
				return this.sameElement(this.tortice, this.hare);
			},
			changePhase: function(phase) {
					this.anim.push({'event': 'phase', 'phase': phase});
			},
			atPosition: function(t, h) {
				this.tortice = t;
				this.hare = h;
				this.anim.push({'event': 'move',
					'tortice': {'index': this.tortice, 'reduced': this.reducedElement(this.tortice)},
					'hare': { 'index': this.hare, 'reduced': this.reducedElement(this.hare)}
				});
			},
			foundData: function(name, value) {
				this.anim.push({'event': 'foundData', 'name': name, 'value': value});
			},
			clear: function() {
				this.tortice = undefined;
				this.hare = undefined;
				this.anim = [];
			}
		};

	window.Cycler.createCyler = function(length) {
		var ret = Object.create(CyclerPrototype);

		ret.clear();
		ret.randomize(length);

		return ret;
	};

})(jQuery);
