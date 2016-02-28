(function($) {
	var N = 10,
		length = N*N;

	function randIndex() {
		return Math.floor(Math.random() * length);
	}

	$(".cycler").each(function() {
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
				if( k === c0) {
					$td.addClass("cycleEnd");
				}
				if( k === c1) {
					$td.addClass("cycleStart");					
				}
				k++;
			}
		}

		$(this).empty().append($table);
	});
})(jQuery);