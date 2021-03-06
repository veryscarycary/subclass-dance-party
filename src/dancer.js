// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.speed = (150 + (50 * Math.random())).toString();
  this.setPosition(this.top, this.left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.setPosition(top, left);
};

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettingsHead = {
    top: top + 15,
    left: left + 125,
  };

  var styleSettingsHorse = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettingsHead);
  if (this.$horseNode) {
    this.$horseNode.css(styleSettingsHorse);
  }
};