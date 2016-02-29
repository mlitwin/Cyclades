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
 *  Collect your sequence in anim = [ {tortice: index, hair: index}, ...] and
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
		var c0 = randIndex(), c1 = randIndex();

		var $table = $("<table></table>"),
			$row,
			$td;

		if( c0 > c1) {
			tmp = c0; c0 = c1; c1 = tmp; // swap c0 and c1
		}

		k = 0;
		for( j = 0; j < N; j++) {
			$row = $("<tr></tr>");
			$table.append($row);
			for( i = 0; i < N; i++) {
				$td = $("<td></td>");
				$row.append($td);

				$td.addClass("index-" + k);


				if( k === c0) {
					$td.addClass("cycleEnd");
				}
				if( k === c1) {
					$td.addClass("cycleStart");					
				}
				k++;
			}
		}

		$parentNode.empty().append($table);	

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
		nextElement: function(cur, model) {
			var next;
			if( cur === model.cycleStart) {
				next = model.cycleEnd;
			} else {
				next = cur + 1;
			}

			if( next > model.maxIndex) {
				next = model.maxIndex;
			}

			return next;
		},
		animate($table, itinerary) {
			var curIndex = 0;

			function clearPlayer(player) {
				$("td." + player, $table[0]).removeClass(player);
			}

			function displayCurrentFrame() {
				var domIndexes = itinerary[curIndex];
				var player;

				for(player in domIndexes) {
					clearPlayer(player);
					$("td.index-" + domIndexes[player], $table[0]).addClass(player);
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

(function($) {
	$("#cycleReset").click(function() {
		$(".cycler").each(function() {
			Cycler.resetTable($(this));
		});		
	});

	$("#cycleGo").click(function() {
		$(".cycler").each(function() {
			var $self = $(this);
			var model = $self.data("cycleData");
			var anim = [];
			var i, cur = 0;
			for(i = 0; i <= model.maxIndex; i++) {
				anim.push({tortice: cur, hair: cur});
				cur = Cycler.nextElement(cur, model);
			}

			Cycler.animate($self, anim);

		});		
	});

})(jQuery);
