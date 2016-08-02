var Trump = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/trumphead.png">');
  this.setPosition(top, left);
};

Trump.prototype = Object.create(makeBlinkyDancer.prototype);
Trump.prototype.constructor = Trump;



