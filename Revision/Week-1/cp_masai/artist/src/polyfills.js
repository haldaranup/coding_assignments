function MyArray() {
  this.length = 0;
}

MyArray.prototype.push = function (e) {
  this[this.length] = e;
  this.length++;
  return this.length;
};

MyArray.prototype.pop = function () {
    
};

MyArray.prototype.map = function () {};

MyArray.prototype.filter = function () {};

MyArray.prototype.reduce = function () {};
