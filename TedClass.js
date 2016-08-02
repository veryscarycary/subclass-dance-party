var Ted = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/tedhead.png">');
};

Ted.prototype = Object.create(makeBlinkyDancer.prototype);
Ted.prototype.constructor = Ted;