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

	function resetResultsDOM($cycleParent) {
		$cycleParent.find(".cycleResults").empty().html('<div><span class="cycleStartLabel">Start:</span> ' +
			'<span class="cycleStart">&nbsp;</span> <span class="cycleLengthLabel">Length:</span>' +
			'<span class="cycleLength">&nbsp;</span><div><div><span class="curPhaseLabel">Seeking: </span><span class="curPhase">&nbsp;</span></div>');

	}

	function resetTableDOM($parentNode, model) {
		var i, j, k, tmp;
		var $cycleParent = $('<div class="cycleParent"></div>');
		var c0 = model.model.cycleEnd;
		var c1 = model.model.cycleStart;

		var $table = $("<table></table>"),
			$row,
			$td;

		// lay out an N x N table
		k = 0;
		for( j = 0; j < N; j++) {
			$row = $("<tr></tr>");
			$table.append($row);
			for( i = 0; i < N; i++) {
				$td = $("<td></td>");
				$row.append($td);

				// .index-k
				$td.addClass("index-" + k);

				// and .cycleEnd / .cycleStart class
				// one past cycleEnd is the same as cycleStart
				if( k === c0) {
					$td.addClass("cycleEnd");
				}
				if( k === (c1 + 1)) {
					$td.addClass("cycleStart");
				}
				k++;
			}
		}

		$cycleParent.append($table);
		$cycleParent.append('<div class="cycleResults"></div>');
		resetResultsDOM($cycleParent);

		$parentNode.empty().append($cycleParent);
	}

	function resetTable($cycler, model) {
	  resetTableDOM($cycler, model);
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

  // We've been told our player is now at index
	// so update the DOM
	function setPlayerCell($table, player, index) {
			$("td." + player, $table[0]).removeClass(player);
			if( undefined !== index) {
					$("td.index-" + index.reduced, $table[0]).addClass(player);
			}
	}

	window.Cycler = {
		resetTable: resetTable,
		// Run our animation of the itinerary
		animate: function($parentNode, itinerary, doUpdateFrame) {
			var curIndex = 0;
			var curPhase = "";
			var $cycleParent = $parentNode.children(".cycleParent");
			var $table = $cycleParent.children("table");
			var self = this;

			function handleFoundData(event) {
				var targetDomClass = event.name;
				var preliminaryData = false;
				var $targets;


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

				if( curEvent.event === 'move') {
					["tortice", "hare"].forEach(function(player) {
							setPlayerCell($table, player, curEvent[player]);
					});
				} else if(curEvent.event === 'phase') {
					 if(curPhase) {
						 $cycleParent.removeClass(curPhase);
					 }
					 $cycleParent.addClass(curEvent.phase);
					 curPhase = curEvent.phase;
					 $cycleParent.find(".cycleResults .curPhase").text(curPhase);
					 delay = 500;
				} else if(curEvent.event === 'foundData') {
					handleFoundData(curEvent);
				}

				if( doUpdateFrame) {
					doUpdateFrame(curEvent);
				}

				curIndex++;
				if( curIndex < itinerary.length) {
					window.setTimeout(displayCurrentFrame, delay);
				}
			}

			displayCurrentFrame();
		}
	};

	var AlgorithmModelPrototype = {
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
			}
		};

	window.Cycler.createAlgorithmModel = function(length) {
		var ret = Object.create(AlgorithmModelPrototype);

		ret.randomize(length);
		ret.tortice = undefined;
		ret.hare = undefined;
		ret.anim = [];


		return ret;
	};

})(jQuery);
