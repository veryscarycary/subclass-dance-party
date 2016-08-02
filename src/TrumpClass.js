var Trump = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="trump dancer" src="images/trumphead.png">');
};

Trump.prototype = Object.create(makeBlinkyDancer.prototype);
Trump.prototype.constructor = Trump;

