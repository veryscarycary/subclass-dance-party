var Obama = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/obamahead.png">');
  this.setPosition(top, left);
};

Obama.prototype = Object.create(makeBlinkyDancer.prototype);
Obama.prototype.constructor = Obama;
