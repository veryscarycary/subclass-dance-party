var Ted = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/tedhead.png">');
  this.$bodynode = $('<img class="dancer" src="images/giphy.gif">');
};

Ted.prototype = Object.create(makeBlinkyDancer.prototype);
Ted.prototype.constructor = Ted;