var Hillary = function(top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  //overwrites node
  this.$node = $('<img class="dancer" src="images/hillaryhead.png">');
  this.setPosition(top, left);
};

Hillary.prototype = Object.create(makeBlinkyDancer.prototype);
Hillary.prototype.constructor = Hillary;



