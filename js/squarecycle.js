/*
 *	Visualization of cycle detection algorithms.
 *
 *  This visualization is an NxN grid of squares, where the first
 *  and last element of the cycle are colored.
 *  Tortice and hare elements are also colored,
 *  and there's a status line at the bottom.
 *
 */

(function($) {

  function resetResultsDOM($cycleParent) {
    $cycleParent.find(".cycleResults").empty().html('<div><span class="cycleStartLabel">Start:</span> ' +
      '<span class="cycleStart">&nbsp;</span> <span class="cycleLengthLabel">Length:</span>' +
      '<span class="cycleLength">&nbsp;</span><div><div><span class="curPhaseLabel">Seeking: </span><span class="curPhase">&nbsp;</span></div>');
  }

  function resetTableDOM($parentNode, cycler) {
    var i, j, k, tmp;
    var $cycleParent = $('<div class="cycleParent"></div>');
    var c0 = cycler.cycle.cycleEnd;
    var c1 = cycler.cycle.cycleStart;
    var N = 10;

    var $table = $("<table></table>"),
      $row,
      $td;

    // lay out an N x N table
    k = 0;
    for (j = 0; j < N; j++) {
      $row = $("<tr></tr>");
      $table.append($row);
      for (i = 0; i < N; i++) {
        $td = $("<td></td>");
        $row.append($td);

        // .index-k
        $td.addClass("index-" + k);

        // and .cycleEnd / .cycleStart class
        // one past cycleEnd is the same as cycleStart
        if (k === c0) {
          $td.addClass("cycleEnd");
        } else if (k === (c1 + 1)) {
          $td.addClass("cycleStart");
        } else if (k > (c1 + 1)) {
          $td.addClass("cyclePast");
        }
				$td.append('<div class="cellcontent"></div>');
        k++;
      }
    }

    $cycleParent.append($table);
    $cycleParent.append('<div class="cycleResults"></div>');
    resetResultsDOM($cycleParent);

    $parentNode.empty().append($cycleParent);
  }

  function resetTable($cycler, cycler) {
    resetTableDOM($cycler, cycler);
  }


  // We've been told our player is now at index
  // so update the DOM
  function setPlayerCell($table, player, index) {
    $("td." + player, $table[0]).removeClass(player);
    if (undefined !== index) {
      $("td.index-" + index.reduced, $table[0]).addClass(player);
    }
  }


  function handleFoundData(event, $cycleParent) {
    var targetDomClass = event.name;
    var preliminaryData = false;
    var $targets;


    if (event.name === 'cycleMultiple' || event.name === 'minCycle') {
      targetDomClass = 'cycleLength';
      preliminaryData = (event.name === 'cycleMultiple');
    }

    $targets = $cycleParent.find(".cycleResults ." + targetDomClass);

    $targets.text(event.value).toggleClass("preliminaryData", preliminaryData).addClass("hasData");
  }


  var SquareCyclePrototype = {
    'displayFrame': function(curEvent) {
      var $cycleParent = this.parentNode.children(".cycleParent");
      var $table = $cycleParent.children("table");

      if (curEvent.event === 'move') {
        ["tortice", "hare"].forEach(function(player) {
          setPlayerCell($table, player, curEvent[player]);
        });
      } else if (curEvent.event === 'phase') {
        if (this.curPhase) {
          $cycleParent.removeClass(this.curPhase);
        }
        $cycleParent.addClass(curEvent.phase);
        this.curPhase = curEvent.phase;
        $cycleParent.find(".cycleResults .curPhase").text(this.curPhase);
      } else if (curEvent.event === 'foundData') {
        handleFoundData(curEvent, $cycleParent);
      }
    },
    'reset': function() {
      resetTableDOM(this.parentNode, this.cycler);
    }
  };

  window.SquareCycle = {};
  window.SquareCycle.createSquareCycle = function($parentNode, cycler) {
    //var $table = $cycleParent.children("table");
    var ret = Object.create(SquareCyclePrototype);
    ret.parentNode = $parentNode;
    ret.cycler = cycler;
    ret.curPhase = "";

    return ret;
  };



})(jQuery);
