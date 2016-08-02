var ThreeD = function(top,left,timeBetweenSteps){
	this.node0 = [-100, -100, -100];
	this.node1 = [-100, -100,  100];
	this.node2 = [-100,  100, -100];
	this.node3 = [-100,  100,  100];
	this.node4 = [ 100, -100, -100];
	this.node5 = [ 100, -100,  100];
	this.node6 = [ 100,  100, -100];
	this.node7 = [ 100,  100,  100];
	this.nodevalues = [this.node0, this.node1, this.node2, this.node3, this.node4, this.node5, this.node6, this.node7];
	this.nodes = [];
	for (var i = 0; i<this.nodevalues.length;i++){
		this.nodes.push($('<span class="dancer threednode"></span>'));
	}
	this.edge0  = [0, 1];
	this.edge1  = [1, 3];
	this.edge2  = [3, 2];
	this.edge3  = [2, 0];
	this.edge4  = [4, 5];
	this.edge5  = [5, 7];
	this.edge6  = [7, 6];
	this.edge7  = [6, 4];
	this.edge8  = [0, 4];
	this.edge9  = [1, 5];
	this.edge10 = [2, 6];
	this.edge11 = [3, 7];
	this.edges  = [this.edge0, this.edge1, this.edge2, this.edge3, this.edge4, this.edge5, this.edge6, this.edge7, this.edge8, this.edge9, this.edge10, this.edge11];
	makeBlinkyDancer.call(this,top,left,timeBetweenSteps);
	

}

ThreeD.prototype = Object.create(makeBlinkyDancer.prototype);
ThreeD.prototype.constructor = ThreeD;
ThreeD.prototype.setPosition = function(top,left){
	//console.log(this.nodevalues);
	var top = 50;
	var left = 50;
	for(var i = 0;i<this.nodes.length;i++){
		
		var addtox = this.nodevalues[i][0] > 0 ? 20: 0;
		//console.log(addtox);
		var addtoy = this.nodevalues[i][1] > 0 ? 20: 0;
		var left = left + addtoy
		var top = top +addtox;
		//console.log("addtoy" + this.$node[0]);
		//console.log("bottom is" +  bottom);
		var styleSettings = {
			top: top + addtox,
			left: left + addtoy
		}
		//console.log(styleSettings)
		//console.log(i);
		console.log(styleSettings);
		this.nodes[i].css(styleSettings);
		//console.log(this.nodes[i]);
	}

}