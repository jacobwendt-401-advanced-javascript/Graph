const Graph = function() {
  this.container = {};
  this.girth = 0;
};

Graph.prototype.add = function (value) {
  this.container[value] = {};
  this.girth ++;
};

Graph.prototype.addLink = function(start, end) {
  this.container[start][end] = true;
  this.container[end][start] = true;
};

Graph.prototype.deleteLink = function(start, end) {
  delete this.container[start][end];
  delete this.container[end][start];
};

Graph.prototype.checkConnection = function(start, end) {
  return this.container[start].hasOwnProperty(end);
};

Graph.prototype.contains = function(value) {
  return this.container.hasOwnProperty(value);
};

Graph.prototype.deleteValue = function(value) {
  console.log(this.container[value]);
  delete this.container[value];
  this.girth --;
  for(let entry in this.container) {
    if (this.container[entry][value]) {
      delete this.container[entry] [value];
    }
  }
};

let myGraph = new Graph();

myGraph.add('Sony');
myGraph.add('PS1');
myGraph.add('PS2');
myGraph.add('PS3');
myGraph.add('PS4');
myGraph.add('Microsoft');
myGraph.add('Xbox');
myGraph.add('Xbox360');
myGraph.add('XboxONE');
myGraph.add('Nintendo');
myGraph.add('SNES');
myGraph.add('NES');
myGraph.add('Gameboy');

myGraph.addLink('Sony','PS1');
myGraph.addLink('Sony','PS2');
myGraph.addLink('Sony','PS3');
myGraph.addLink('Sony','PS4');
myGraph.addLink('Microsoft','Xbox');
myGraph.addLink('Microsoft','Xbox360');
myGraph.addLink('Microsoft','XboxONE');
myGraph.addLink('Nintendo','NES');
myGraph.addLink('Nintendo','SNES');
myGraph.addLink('Nintendo','Gameboy');

myGraph.deleteLink('Microsoft', 'Xbox');
myGraph.deleteValue('Microsoft');

console.log(myGraph);

