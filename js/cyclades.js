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
 *    call c.atPosition()
 *    call c.haveData()
 *
 *  to ollect your sequence in c.anim = [ {tortice: index, hare: index}, ...] and
 *  call Cycler.animate($parentNode, anim); to get the visuals
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

	function resetTableDOM($parentNode) {
		var i, j, k, tmp;
		var c0 = randIndex(), c1 = randIndex(); // cycle goes from c1 -> c0
		var $cycleParent = $('<div class="cycleParent"></div>');

		var $table = $("<table></table>"),
			$row,
			$td;

		// normalize to c0 <= c1
		if( c0 > c1) {
			tmp = c0; c0 = c1; c1 = tmp;
		}

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
				if( k === c0) {
					$td.addClass("cycleEnd");
				}
				if( k === c1) {
					$td.addClass("cycleStart");
				}
				k++;
			}
		}

		$cycleParent.append($table);
		$cycleParent.append('<div class="cycleResults"></div>');
		resetResultsDOM($cycleParent);

		$parentNode.empty().append($cycleParent);

		return {
			maxIndex: length - 1,
			cycleEnd: c0,
			cycleStart: c1
		};
	}

	function resetTable($cycler) {
		var cycleData;

		cycleData = resetTableDOM($cycler);
		$cycler.data("cycleData", cycleData);
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
					$("td.index-" + index, $table[0]).addClass(player);
			}
	}

	// action starts here
	$(".cycler").each(function() {
		resetTable($(this));
	});


	window.Cycler = {
		resetTable: resetTable,
		// Run our animation of the itinerary
		animate: function($parentNode, itinerary) {
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
				var delay = 50;

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
					 delay = 150;
				} else if(curEvent.event === 'foundData') {
					handleFoundData(curEvent);
				}

				curIndex++;
				if( curIndex < itinerary.length) {
					window.setTimeout(displayCurrentFrame, delay);
				}
			}

			displayCurrentFrame();
		}
	};

	window.Cycler.createAlgorithmModel = function($cycler) {
		var amPrototype = {
			nextElement: function(v) {
				return nextElement(v, this.model);
			},
			changePhase: function(phase) {
					this.anim.push({'event': 'phase', 'phase': phase});
			},
			atPosition: function(t, h) {
				this.tortice = t;
				this.hare = h;
				this.anim.push({'event': 'move', 'tortice': this.tortice, 'hare': this.hare});
			},
			foundData: function(name, value) {
				this.anim.push({'event': 'foundData', 'name': name, 'value': value});
			}
		};

		var ret = Object.create(amPrototype);

		ret.model = $cycler.data("cycleData");
		ret.tortice = undefined;
		ret.hare = undefined;
		ret.anim = [];

		resetResultsDOM($cycler);

		return ret;
	};

})(jQuery);
