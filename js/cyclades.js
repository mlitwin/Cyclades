/*
 *	Visualization of cycle detection algorithms.
 *
 *	Display our list as an N x N grid, with a standard ordering,
 *  and choose at which element the cycle starts, and where you go from there.
 *
 *  Your cycle detection algorithm would get the model level info from the
 *  $parentNode.data("cycleData"); and then implement the algorithm using
 *  Cycler.nextElement(cur, model) to get the next index.
 *
 *  Collect your sequence in anim = [ {tortice: index, hare: index}, ...] and
 *  call Cycler.animate($parentNode, anim); to get the visuals
 *
*/

(function($) {
	var N = 10,
		length = N*N;

	function randIndex() {
		return Math.floor(Math.random() * length);
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
		$cycleParent.append('<div class="cycleResults"><div><span class="cycleStartLabel">Start:</span> ' +
			'<span class="cycleStart">&nbsp;</span> <span class="cycleLengthLabel">Length:</span>' +
			'<span class="cycleLength">&nbsp;</span><div><div><span class="curPhaseLabel">Seeking: </span><span class="curPhase">&nbsp;</span></div></div>');

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

	$(".cycler").each(function() {
		resetTable($(this));
	});

	window.Cycler = {
		resetTable: resetTable,
		// next element is element + 1, unless we're looping at a cycle
		nextElement: function(cur, model) {
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
		},
		// our player has moved to a new index
		setPlayerCell: function($table, player, index) {
				$("td." + player, $table[0]).removeClass(player);
				if( undefined !== index) {
						$("td.index-" + index, $table[0]).addClass(player);
				}
		},
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


				if( targetDomClass === 'cycleMultiple' || targetDomClass === 'minCycle') {
					targetDomClass = 'cycleLength';
					preliminaryData = targetDomClass === 'cycleMultiple';
				}

				$targets = $cycleParent.find(".cycleResults ." + targetDomClass);

				$targets.text(event.value).toggleClass("preliminaryData", preliminaryData).addClass("hasData");
			}

			function displayCurrentFrame() {
				var curEvent = itinerary[curIndex];

				if( curEvent.event === 'move') {
					["tortice", "hare"].forEach(function(player) {
							self.setPlayerCell($table, player, curEvent[player]);
					});
				} else if(curEvent.event === 'phase') {
					 if(curPhase) {
						 $cycleParent.removeClass(curPhase);
					 }
					 $cycleParent.addClass(curEvent.phase);
					 curPhase = curEvent.phase;
					 $cycleParent.find(".cycleResults .curPhase").text(curPhase);
				} else if(curEvent.event === 'foundData') {
					handleFoundData(curEvent);
				}

				curIndex++;
				if( curIndex < itinerary.length) {
					window.setTimeout(displayCurrentFrame, 50);
				}
			}

			displayCurrentFrame();
		}
	};

})(jQuery);
