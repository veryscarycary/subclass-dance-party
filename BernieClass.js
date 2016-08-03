var Bernie = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/berniehead.png">');
  this.setPosition(top, left);
};

Bernie.prototype = Object.create(makeBlinkyDancer.prototype);
Bernie.prototype.constructor = Bernie;
