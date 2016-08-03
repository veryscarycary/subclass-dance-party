
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$horseNode = $('<img class="dancer" src="images/horse.gif">');
  this.setPosition(top, left);
  this.explosion = false;
  //var oldStep = blinkyDancer.step;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(this);
  //console.log(window.motion);
  if (window.motion === true) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //console.log(this);
  // this.top = this.top + 20;
  //console.log('top is' + this.top);
  // this.left = this.left + 20;
  //this.setPosition(this.top, this.left);
  //this.$node.toggle();
  $('.dancer').animate({left: "+=" + this.speed, '-webkit-transform': 'rotate(45deg)'}, 2500);

  if ( Number(this.$node.css("left").replace('px',"")) >= $("body").width() ) {
    //remove it

    if (this.explosion === false) {
      this.$node.remove();
      this.$horseNode.remove();
      //show explosion
      window.explosion = $('<img class="explosion" src="images/explosion.gif">');
      var rightmost = $('body').width() - 120;
      window.explosion.css( {left: rightmost, top: 550} );
      console.log("explosion is" + window.explosion);
      console.log('explosion.css is' + window.explosion.css('left'));
      $('body').append(window.explosion);

      var removeexplosion = function(){
        $('.explosion').remove();
        delete window.explosion;
      };
      //window.explosion.remove();
      setTimeout(removeexplosion, 2000);
      this.explosion = true;
      //$('body').append($('<img class="dancer" src="images/explosion.gif">').css( {left: $("body").width()} ));
    }
  }
};