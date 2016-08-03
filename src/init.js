$(document).ready(function() {
  window.dancers = []; // will be useful for lining up dancers

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    //console.log("function name is" + dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    //  console.log("function is" + dancerMakerFunction);
    // make a dancer with a random position
    window.cushion = window.dancers.length;
    window.cushion = window.cushion * .02;

    var dancer = new dancerMakerFunction(
      $("body").height() * (.65 + window.cushion),
      $("body").width() * (.05 - window.cushion),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    var horseNode = dancer.$horseNode.addClass('horseNode');
    $('body').append(horseNode);
  });

  $('.lineUpButton').on('click', function() {
    window.motion = false;
    $('.dancer').stop(true, true, true);
    window.dancers.forEach(function (dancer) {

      var left = $("body").height() * (.65 + window.cushion);
      
      dancer.$node.css({left: left + 125});
      dancer.$horseNode.css({left: left});
      console.log('horse is ' + dancer.$horseNode);
    });
  });
});

